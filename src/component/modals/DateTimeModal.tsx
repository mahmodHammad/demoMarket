'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import { OTPInput, InfoBox, DateTimePicker } from '@/component';
import { useRouter } from 'next/navigation';
import { Modal, IconButton } from '@mui/material';
import { Close } from '@/assets';
import { OTP_STATUS, InfoBoxStates } from './LoginModal';
import StaticDateTimePicker from '../forms/StaticDateTimePicker';

interface Props {
	isOpen: boolean;
	date: Date | null;
	setDate: any;
	setIsOpen: any;
	successFunc: any;
}

const DateTimeModal = ({ isOpen, setDate, date, setIsOpen, successFunc }: Props) => {
	const { push } = useRouter();
	const [otpCode, setOtpCode] = useState('');

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleConfirm = async () => {};

	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box column sx={style}>
				<Box column fullWidth>
					<Box column gap={'12px'}>
						<Text primary bold variant='h5'>
							Choose Visit Date
						</Text>
						<Text variant='body' gray light>
							Choose Visit Date
						</Text>
					</Box>
					<Box>
						<StaticDateTimePicker/>
					</Box>
{/* 
					<Button onClick={handleConfirm} variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
						Confirm
					</Button> */}
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
