'use client';

import React, { useEffect } from 'react';
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
import theme from '@/ThemeRegistry/theme';

const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	NationalID: yup.string().required('National ID is required'),
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
			image: [],
		},
		resolver: yupResolver(schema),
	});
	const image = watch('image');
	const onSubmit = (data: any) => {
		console.log('form data', data);
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
								<Item xs={5}>
									<Container sx={{ border: 2, borderColor: 'black', borderStyle: 'dashed', borderRadius: '10px' }}>
										<div className="space-y-1 text-center">
											<svg
												className="w-12 h-12 mx-auto text-gray-400"
												stroke="currentColor"
												fill="none"
												viewBox="0 0 48 48"
												aria-hidden="true">
												<path
													d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<div className="flex pt-4">
												<label
													htmlFor={name}
													className="h-full left-0 top-3 pt-16 w-full absolute block font-medium text-center rounded-md cursor-pointer">
													<Text variant="subtitle2" className="text-center">
														Upload an images and files
													</Text>
													{/* <input
								type="file"
								id={name}
								name={name}
								ref={ref}
								onChange={onChange}
								className="hidden"
							/> */}
												</label>
											</div>
											PNG, JPG, GIF up to
											<Text> Max 2 files</Text>
										</div>
									</Container>
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
