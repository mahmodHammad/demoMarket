'use client';

import React from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import TextInputController from '@/component/forms/controlled/TextInputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CheckboxController, DatePickerController as DatePicker, RadioGroupController as RadioGroup } from '@/component';
import dayjs from 'dayjs';
import { Avatar } from '@mui/material';

const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	NationalID: yup.string().required('National ID is required'),
	email: yup.string().required('Email is required'),
	Hijari: yup.boolean(),
	date: yup.date().required('Date required'),
	gender: yup.string(),
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

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: 'Shreyas',
			lastName: 'kanzarkar',
			NationalID: '7373727',
			email: 'sksj@jsjs.com',
			Hijari: true,
			date: dayjs('2023-09-20') as unknown as Date,
			gender: 'male',
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		console.log('form data', data);
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
								src={''}
								sx={{ width: 80, height: 80, mb: '12px' }}
							/>
							<Button variant="outlined">
								Update Photo
							</Button>
						</Item>
						<Item xs={9}>
							<Container rowGap={'16px'} columnGap={'36px'}>
								<Item xs={5}>
									<TextInputController label={'First Name'} name={'firstName'} control={control} />
								</Item>
								<Item xs={5}>
									<TextInputController label={'Last Name'} name={'lastName'} control={control} />
								</Item>
								<Item xs={5}>
									<TextInputController
										disabled
										label={'National ID / Residence Permit No.'}
										name={'NationalID'}
										control={control}
									/>
								</Item>
								<Item xs={4}>
									<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />
								</Item>
								<Item xs={5}>
									<DatePicker name="date" control={control} errors={errors} label="Date of birth" />
									<Text variant='small' sx={{mt:'8px'}}> <CheckboxController name="Hijari" control={control} errors={errors} /> Hijari </Text>
								</Item>
								<Item xs={5}>
									<TextInputController label={'Email'} name={'email'} control={control} />
								</Item>
							</Container>
						</Item>
						<Item xs={12}>
							<Button type='submit' variant="contained">
								Save Changes
							</Button>
						</Item>
					</Container>
				</Container>
			</form>
		</>
	);
}
