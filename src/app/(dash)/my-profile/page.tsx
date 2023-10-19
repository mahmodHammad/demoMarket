'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import TextInputController from '@/component/forms/controlled/TextInputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	CheckboxController,
	DatePickerController as DatePicker,
	RadioGroupController as RadioGroup,
} from '@/component';
import dayjs from 'dayjs';
import { Avatar } from '@mui/material';
import FileUploadController from '@/component/forms/controlled/FileUploadController';
import { useAuth } from '@/contexts/AuthContext';
import { http } from '@/utils/http';
import { globalToast } from '@/utils/toast';
import { editProfile } from './profileService';

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	// NationalID: yup.string().required('National ID is required'),
	email: yup.string().required('Email is required'),
	Hijari: yup.boolean(),
	date: yup.date().required('Date required'),
	gender: yup.string(),
	image: yup.array(),
});
const RADIO_OPTIONS = [
	{
		label: 'Male',
		value: 'male',
	},
	{
		label: 'Female',
		value: 'female',
	},
];
export default function MyProfile() {
	const { user, getUserInfo } = useAuth();
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user?.name,
			// lastName: 'kanzarkar',
			// NationalID: '7373727',
			email: user?.email,
			Hijari: true,
			date: dayjs('2023-09-20') as unknown as Date,
			gender: user?.gender,
			image: [],
		},
		resolver: yupResolver(schema),
	});
	const image = watch('image');
	useEffect(() => {
		if (image?.length) {
			const formData = new FormData();
			formData.append('profile_image', image[0]);
			http
				.post('/profile/change-profile-image', formData, {
					headers: {
						'content-type': 'multipart/form-data',
						'Access-Control-Allow-Origin': '*',
					},
				})
				.then(() => {
					getUserInfo();
				});
		}
	}, [image]);
	const [loading, setLoading] = useState(false);
	const onSubmit = async (data: any) => {
		let payload = {
			...data,
			phone_country_code: user?.phone_country_code,
			interested: user?.interested,
			phone_number: user?.phone_number,
		};
		setLoading(true);
		await editProfile(payload)
			.then(() => {
				globalToast('Profile updated successfully', 'success');
				getUserInfo();
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			})
			.finally(() => setLoading(false));
	};
	const readFileData = (fl: any) => {
		const file = URL.createObjectURL(fl);
		return file;
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container>
					<Text variant="h4" sx={{ padding: '35px 0px 36px 36px' }}>
						Edit Profile
					</Text>
					<Container row rowGap={'50px'} sx={{ padding: '0px 0px 0px 36px' }}>
						<Item xs={12}>
							<Avatar
								alt={'Image'}
								src={`${image?.length ? readFileData(image[0]) : user?.profile_image}`}
								// src={`${image?.length ? readFileData(image[0]) : ''}`}
								sx={{ width: 80, height: 80, mb: '12px' }}
							/>
							<FileUploadController label={'Update Photo'} name={'image'} accept="image/*" control={control} />
						</Item>
						<Item xs={9}>
							<Container rowGap={'16px'} columnGap={'36px'}>
								<Item xs={5}>
									<TextInputController label={'Name'} name={'name'} control={control} />
								</Item>
								{/* <Item xs={5}>
									<TextInputController label={'Last Name'} name={'lastName'} control={control} />
								</Item> */}
								{/* <Item xs={5}>
									<TextInputController
										disabled
										label={'National ID / Residence Permit No.'}
										name={'NationalID'}
										control={control}
									/>
								</Item> */}
								<Item xs={4}>
									<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />
								</Item>
								<Item xs={5}>
									<DatePicker name="date" control={control} errors={errors} label="Date of birth" />
									<Text variant="small" sx={{ mt: '8px' }}>
										{' '}
										<CheckboxController name="Hijari" control={control} errors={errors} /> Hijari{' '}
									</Text>
								</Item>
								<Item xs={5}>
									<TextInputController label={'Email'} name={'email'} control={control} />
								</Item>
							</Container>
						</Item>
						<Item xs={12}>
							<Button type="submit" variant="contained" loading={loading}>
								Save Changes
							</Button>
						</Item>
					</Container>
				</Container>
			</form>
		</>
	);
}
