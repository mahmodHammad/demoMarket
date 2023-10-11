'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import { OTPInput, InfoBox } from '@/component';
import { Modal, IconButton } from '@mui/material';
import { Close } from '@/assets';
import { OTP_STATUS, InfoBoxStates } from './LoginModal';

interface Props {
	isOpen: boolean;
	mobile: {};
	setIsOpen: any;
	successFunc: any;
	resendOtp: any;
}

const OTPModal = ({ isOpen, mobile, setIsOpen, successFunc, resendOtp }: Props) => {
	const [otpCode, setOtpCode] = useState('');
	const [otpStatus, setOtpStatus] = useState(OTP_STATUS.PENDING);
	const [loading, setLoading] = useState(false);

	const [isTimerRunning, setIsTimerRunning] = useState(false);
	const [seconds, setSeconds] = useState(30);

	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null;

		const decrementTimer = () => {
			setSeconds((prevSeconds) => {
				if (prevSeconds === 0) {
					if (intervalId) {
						clearInterval(intervalId);
					}
					setIsTimerRunning(false);
					onTimerFinished();
					return 0;
				}
				return prevSeconds - 1;
			});
		};

		if (isTimerRunning) {
			intervalId = setInterval(decrementTimer, 1000);
		} else if (intervalId) {
			clearInterval(intervalId);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [isTimerRunning, otpCode]);

	const startTimer = () => setIsTimerRunning(true);

	const resetTimer = () => {
		setIsTimerRunning(false);
		setSeconds(30);
	};

	const onTimerFinished = () => {
		if (otpCode) setOtpStatus(OTP_STATUS.EXPIRED);
		if (!otpCode) setOtpStatus(OTP_STATUS.MAKE_SURE);
	};

	const handleClose = () => {
		resetTimer();
		setOtpStatus(OTP_STATUS.PENDING);
		setOtpCode('');
		setIsOpen(false);
	};

	const handlePhoneVerification = () => {
		startTimer();
	};

	useEffect(() => {
		handlePhoneVerification();
		return () => {
			setOtpCode('');
			resetTimer();
		};
	}, []);

	const handleOtpVerification = async () => {
		setLoading(true);
		const res = await successFunc(+otpCode)
			.catch((err) => {
				setOtpCode('');
				setOtpStatus(OTP_STATUS.INCORRECT);
			})
			.finally(() => setLoading(false));
	};

	const handleResendOtp = async () => {
		// TODO: resend API
		await resendOtp().then(() => {
			setOtpCode('');
			resetTimer();
			setOtpStatus(OTP_STATUS.RESENT);
			startTimer();
		});
		// TODO: auto focus of otp input
	};

	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box column center sx={style}>
				<IconButton
					onClick={handleClose}
					sx={{
						position: 'absolute',
						top: '36px',
						right: '24px',
					}}>
					<Close />
				</IconButton>
				<Box column center fullWidth>
					<Box column center gap={'12px'}>
						<Text primary bold s={24}>
							OTP Verification
						</Text>

						<Text center gray light s={16}>
							We have sent a code to your number +{mobile?.phone_country_code?.dial_code} {mobile?.phone_number}
						</Text>
					</Box>
					<OTPInput value={otpCode} onChange={setOtpCode} hasError={false} />
					{otpStatus !== OTP_STATUS.PENDING && (
						<InfoBox
							type={InfoBoxStates[otpStatus].type}
							title={InfoBoxStates[otpStatus].title}
							description={InfoBoxStates[otpStatus].description}
						/>
					)}
					<Button
						loading={loading}
						onClick={handleOtpVerification}
						disabled={
							(+otpCode.length !== 4 && otpStatus === OTP_STATUS.RESENT) ||
							(+otpCode.length !== 4 && otpStatus === OTP_STATUS.PENDING) ||
							otpStatus === OTP_STATUS.MAKE_SURE ||
							otpStatus === OTP_STATUS.EXPIRED
						}
						variant="contained"
						fullWidth
						size="large"
						sx={{ mt: '24px' }}>
						Confirm
					</Button>
					{otpStatus === OTP_STATUS.PENDING || otpStatus === OTP_STATUS.RESENT || otpStatus === OTP_STATUS.INCORRECT ? (
						<Box row center gap={0.5} mt={'24px'}>
							<Text gray s={14}>
								Resend Code in
							</Text>
							<Text bold s={14}>
								{`00:${seconds}`}
							</Text>
						</Box>
					) : (
						<Text
							onClick={handleResendOtp}
							primary
							bold
							mt={'24px'}
							s={14}
							sx={{
								'&:hover': {
									cursor: 'pointer',
								},
							}}>
							Resend OTP
						</Text>
					)}
				</Box>
			</Box>
		</Modal>
	);
};

export default OTPModal;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '90%', sm: '580px' },
	bgcolor: '#FFF',
	borderRadius: '16px',
	boxShadow: 24,
	py: 10,
	px: 12,
};
