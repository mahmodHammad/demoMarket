'use client';

import React, { useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import { Modal } from '@mui/material';
import StaticDatePicker from '../forms/StaticDatePicker';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getBookingSettings } from '@/app/(dash)/admin-bookings/booking-service';
import dayjs from 'dayjs';
import TimeSlot from '../TimeSlot';

interface Props {
	isOpen: boolean;
	date: Date | null;
	setDate: any;
	setIsOpen: any;
	successFunc: any;
}

const days = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };

const DateTimeModal = ({ isOpen, setDate, date, setIsOpen, successFunc }: Props) => {
	const handleClose = () => {
		setIsOpen(false);
	};

	// Disabling
	const { data, refetch } = useQuery({
		queryKey: [keys.MYBOOKING],
		queryFn: () =>
			getBookingSettings().then((response) => {
				return response;
			}),
		refetchOnMount: true,
		refetchInterval: false,
	});
	const disbaleDate = (date) => {
		if (data?.days?.includes(days[date?.day()])) {
			return false;
		} else {
			return true;
		}
	};

	// const disbaleTime = (time) => {
	// 	if (
	// 		time?.hour() >= dayjs('2023-11-22' + data?.start_time)?.hour() &&
	// 		time?.hour() <= dayjs('2023-11-22' + data?.end_time)?.hour()
	// 	)
	// 		return false;
	// 	return true;
	// };
	const [selectedHours, setSelectedHours] = useState([]);
	const handleTimeSelect = (time) => {
		setDate(dayjs(date).format('L') + ' ' + dayjs(time).format('HH:mm:ss'));
	};
	const handleConfirm = async () => {
		if (date && selectedHours?.length) {
			await setDate(dayjs(date).format('L') + ' ' + dayjs(selectedHours[0]).format('HH:mm:ss'));
			await successFunc();
		} else {
			setIsOpen(true);
		}
	};
	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box column sx={style}>
				<Box column fullWidth>
					<Box column gap={'12px'}>
						<Text primary bold variant="h5">
							Choose Visit Date
						</Text>
						<Text variant="body" gray light>
							Select available days and times for this booking
						</Text>
					</Box>
					{data?.days?.length && (
						<>
							<Box>
								<StaticDatePicker
									shouldDisableDate={(date) => disbaleDate(date)}
									disablePast
									slotProps={{
										actionBar: {
											actions: [],
										},
									}}
									onChange={(e) => setDate(e)}
								/>
							</Box>
							{date && (
								<Box>
									<TimeSlot
										startTime={data?.start_time}
										endTime={data?.end_time}
										setSelectedHours={setSelectedHours}
										handleTimeSelect={handleTimeSelect}
										selectedHours={selectedHours}
									/>
								</Box>
							)}

							<Box row gap={'10px'}>
								<Button onClick={() => handleClose()} variant="text" fullWidth size="large" sx={{ mt: '24px' }}>
									Close
								</Button>
								<Button onClick={() => handleConfirm()} variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
									Done
								</Button>
							</Box>
						</>
					)}
				</Box>
			</Box>
		</Modal>
	);
};

export default DateTimeModal;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '90%', sm: '441px' },
	bgcolor: '#FFF',
	borderRadius: '16px',
	boxShadow: 24,
	py: '33px',
	px: '37px',
};
