'use client';

import React from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import TextInputController from '@/component/forms/controlled/TextInputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';
import DragDropFile from '@/component/forms/DragDropFile';
import DateTimePickerController from '@/component/forms/controlled/DateTimePickerController';

const schema = yup.object().shape({
	title: yup.string().required('Title is required'),
	description: yup.string().required('Description is required'),
	file: yup.array(),
	endDateTime: yup.date().required('End Date & Time required'),
	startDateTime: yup.date().required('Start Date & Time required'),
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
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: '',
			description: '',
			file:[],
			startDateTime: dayjs('2022-04-17T15:35') as unknown as Date,
			endDateTime: dayjs('2022-04-17T15:35') as unknown as Date,
		},
		resolver: yupResolver(schema),
	});
	const file = watch('file');
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
									<DragDropFile name={'file'} setValue={setValue} control={control} />
									{/* <DragDropController name={'file'} control={control} /> */}
									{/* <FileUploadController name={'file'} label={'file'} control={control}/> */}
								</Item>
								<Item xs={5}>
									<DateTimePickerController name="startDateTime" control={control} errors={errors} label="Start Date & Time" />
								</Item>
								<Item xs={5}>
									<DateTimePickerController name="endDateTime" control={control} errors={errors} label="End Date & Time" />
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
