'use client';

import React, { useEffect } from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import TextInputController from '@/component/forms/controlled/TextInputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';
import { Avatar } from '@mui/material';
import FileUploadController from '@/component/forms/controlled/FileUploadController';
import theme from '@/ThemeRegistry/theme';
import DragDropFile from '@/component/forms/DragDropFile';
import DragDropController from '@/component/forms/controlled/DragAndDropController';

const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	NationalID: yup.string().required('National ID is required'),
	email: yup.string().required('Email is required'),
	Hijari: yup.boolean(),
	date: yup.date().required('Date required'),
	gender: yup.string(),
	file: yup.array(),
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
export default function CreateAdvertisement() {
	const {
		control,
		handleSubmit,
		watch,
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
			file: [],
		},
		resolver: yupResolver(schema),
	});
	const image = watch('file');
	const onSubmit = (data: any) => {
		console.log('form data shreyas', data);
	};
	const readFileData = (fl: any) => {
		const file = URL.createObjectURL(fl);
		return file;
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container column>
					<Text variant="h4" sx={{ padding: '35px 0px 40px 36px' }}>
						Create New Advertisements
					</Text>
					<Text variant="h5" sx={{ padding: '0px 0px 24px 36px' }}>
						General Information
					</Text>
					<Container row rowGap={'50px'} sx={{ padding: '0px 0px 0px 35px' }}>
						<Item xs={9}>
							<Container rowGap={'24px'} columnGap={'36px'}>
								<Item xs={5}>
									<TextInputController
										placeholder="Enter Advertisement Title"
										label={'Title'}
										name={'title'}
										control={control}
									/>
								</Item>
								<Item xs={10}>
									<TextInputController
										label={'Description'}
										multiline
										name={'description'}
										rows={4}
										placeholder="Write Description"
										control={control}
									/>
								</Item>
								<Item xs={4}>
									<Text variant="h5">Banner</Text>{' '}
								</Item>
								<Item xs={10}>
									<DragDropController name={'file'} control={control} />
									{/* <FileUploadController name={'file'} label={'file'} control={control}/> */}
								</Item>
								<Item xs={5}>
									<TextInputController label={'Email'} name={'email'} control={control} />
								</Item>
							</Container>
						</Item>
						<Item xs={12}>
							<Button type="submit" variant="contained">
								Save Changes
							</Button>
						</Item>
					</Container>
				</Container>
			</form>
		</>
	);
}
