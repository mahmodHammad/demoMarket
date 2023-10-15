'use client';

import React from 'react';
import { Box, Button, Container, Item, Text } from '@/wrappers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TimePickerController } from '@/component';
import dayjs from 'dayjs';
import LabelledCheckboxController from '@/component/forms/controlled/LabelledCheckboxController';
import { keys } from '@/utils/keys';
import { useQuery } from '@tanstack/react-query';
import { bookingSettings, getBookingSettings } from '../booking-service';
import { globalToast } from '@/utils/toast';

const schema = yup.object().shape({
	endTime: yup.date().required('End Time required'),
	startTime: yup.date().required('Start Time required'),
	days: yup.array().required('Start Time required'),
});
const perms = [
	{ id: 0, name: 'Monday', label: 'Mon' },
	{ id: 1, name: 'Tuesday', label: 'Tue' },
	{ id: 2, name: 'Wednesday', label: 'Wed' },
	{ id: 3, name: 'Thursday', label: 'Thu' },
	{ id: 4, name: 'Friday', label: 'Fri' },
	{ id: 5, name: 'Saturday', label: 'Sat' },
	{ id: 6, name: 'Sunday', label: 'Sun' },
];
export default function Availability() {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			days: [],
			startTime: null,
			endTime: null,
		},
		resolver: yupResolver(schema),
	});
	const { data, refetch } = useQuery({
		queryKey: [keys.MYBOOKING],
		queryFn: () =>
			getBookingSettings().then((response) => {
				setValue(
					'days',
					perms.map((perm: {}) => (response?.days?.includes(perm.name) ? perm.name : false)),
				);
				setValue('startTime', dayjs(response?.start_time, 'HH:mm:ss'));
				setValue('endTime', dayjs(response?.end_time, 'HH:mm:ss'));
				return response;
			}),
		refetchInterval: false,
	});
	const onSubmit = async (data: any) => {
		let days = data?.days?.filter((i) => i != false);
		if (!days.length) {
			globalToast('Please select days.', 'error');
			return;
		}
		let payload = {
			days,
			start_time: dayjs(data?.startTime).format('HH:mm:ss'),
			end_time: dayjs(data?.endTime).format('HH:mm:ss'),
		};
		await bookingSettings(payload)
			.then(() => {
				globalToast('Booking settings updated Successfully', 'success');
				refetch();
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			});
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
								<Item xs={12}>
									<Container maxWidth="md" spacing={10}>
										<Item md={12} mt="10px">
											<Text variant="h4" s={14}>
												Days
											</Text>
											<Box sx={{ mt: '12px', ml: '12px' }}>
												{perms.map((perm: any, index: number) => {
													return (
														<LabelledCheckboxController
															key={perm.id}
															control={control}
															errors={errors}
															stringvalue={perm}
															name={`days.${perm.id}`}
															label={perm?.label}
														/>
													);
												})}
											</Box>
										</Item>
									</Container>
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
