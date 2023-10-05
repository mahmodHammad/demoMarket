'use client';

import React from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DatePickerController, TimePickerController } from '@/component';
import dayjs from 'dayjs';

const schema = yup.object().shape({
	date: yup.date().required('Date required'),
	endTime: yup.date().required('End Time required'),
	startTime: yup.date().required('Start Time required'),
});
export default function Availability() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			date: dayjs('2023-09-20') as unknown as Date,
			startTime: dayjs('08:32', 'HH:mm') as unknown as Date,
			endTime: dayjs('08:32', 'HH:mm') as unknown as Date,
		},
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: any) => {
		console.log('form data', data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container column>
					<Text variant="h4" sx={{ padding: '35px 0px 20px 36px' }}>
						Set Available Days & Times
					</Text>
					<Text variant="body" gray sx={{ padding: '0px 0px 42px 36px' }}>
						Select available days and times for this tool booking
					</Text>
					<Container row rowGap={'50px'} sx={{ padding: '0px 0px 0px 35px' }}>
						<Item xs={9}>
							<Container rowGap={'24px'} columnGap={'36px'}>
								<Item xs={5}>
									<DatePickerController name="date" control={control} errors={errors} label="Select Date" />
								</Item>
								<Item xs={5}></Item>
								<Item xs={10}>
									<Text variant="title"> Working Hours</Text>{' '}
								</Item>
								<Item xs={5}>
									<TimePickerController name="startTime" control={control} errors={errors} label="Start Time" />
								</Item>
								<Item xs={5}>
									<TimePickerController name="endTime" control={control} errors={errors} label="End Time" />
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
