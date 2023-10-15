'use client';

import React, { useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import { Modal } from '@mui/material';
import StaticDateTimePicker from '../forms/StaticDateTimePicker';
// import { useQuery } from '@tanstack/react-query';
// import { keys } from '@/utils/keys';
// import { getBookingSettings } from '@/app/(dash)/admin-bookings/booking-service';
// import dayjs from 'dayjs';

interface Props {
	isOpen: boolean;
	date: Date | null;
	setDate: any;
	setIsOpen: any;
	successFunc: any;
}

const DateTimeModal = ({ isOpen, setDate, date, setIsOpen, successFunc }: Props) => {
	const handleClose = () => {
		setIsOpen(false);
	};

	//Disabling 
	// const [startTime, setStartTime] = useState();
	// const [endTime, setEndTime] = useState();
	// const { data, refetch } = useQuery({
	// 	queryKey: [keys.MYBOOKING],
	// 	queryFn: () =>
	// 		getBookingSettings().then((response) => {
	// 			// var start = dayjs(),
	// 			// 	end = dayjs('2016-11-02'), // Nov. 2nd
	// 			// 	day = 0; // Sunday
	// 			// var result = [];
	// 			// var current = start.clone();
	// 			// while (current.day(7 + day).isBefore(end)) {
	// 			// 	result.push(current.clone());
	// 			// }
	// 			// console.log(result.map((m) => m.format('LLLL')));
	// 			// setValue(
	// 			// 	'days',
	// 			// 	perms.map((perm: {}) => (response?.days?.includes(perm.name) ? perm.name : false)),
	// 			// );
	// 			setStartTime(dayjs('2016-11-02' + response?.start_time));
	// 			console.log(startTime);
	// 			console.log(dayjs('2016-11-02' + response?.start_time),'shreyas')
	// 			setEndTime(dayjs('2016-11-02' + response?.end_time));
	// 			return response;
	// 		}),
	// });
	const handleConfirm = async () => {
		if (date) {
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
					<Box>
						<StaticDateTimePicker
							disablePast
							// onClose={handleClose}
							slotProps={{
								actionBar: {
									actions: [],
								},
							}}
							// maxTime={startTime}
							// minTime={endTime}
							onChange={(e) => setDate(e)}
							// onAccept={handleConfirm}
						/>
					</Box>
					<Box row gap={'10px'}>
						<Button onClick={() => handleClose()} variant="text" fullWidth size="large" sx={{ mt: '24px' }}>
							Close
						</Button>
						<Button onClick={() => handleConfirm()} variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
							Done
						</Button>
					</Box>
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
