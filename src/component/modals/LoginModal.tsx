'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import { PhoneInput, OTPInput, InfoBox } from '@/component';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Modal, IconButton } from '@mui/material';
import { Close } from '@/assets';

const LoginModal = () => {
	const { push } = useRouter();
	const { isLoginModalOpen, closeLoginModal, verifyNumber, login } = useAuth();

	const [loading, setLoading] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [vid, setVid] = useState(null);

	const [currentStep, setCurrentStep] = useState(STEPS.LOGIN);
	const [otpCode, setOtpCode] = useState('');
	const [otpStatus, setOtpStatus] = useState(OTP_STATUS.PENDING);

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
		closeLoginModal();
		setCurrentStep(STEPS.LOGIN);
		resetTimer();
		setOtpStatus(OTP_STATUS.PENDING);
	};

	const handleSignIn = () => {
		closeLoginModal();
		push('/signup');
	};

	const handlePhoneVerification = async () => {
		setLoading(true);
		const res = await verifyNumber(phoneNumber);
		if (+res.status === 200) {
			setLoading(false);
			setVid(res.data.data.id);
			setCurrentStep(STEPS.VERIFICATION);
			startTimer();
		} else {
			setLoading(false);
			// TODO: handle number error message
			// console.log('error in verify', res);
		}
	};

	const handleOtpVerification = async () => {
		setLoading(true);
		const res = await login(phoneNumber, otpCode, vid);
		if (+res?.status === 200) {
			setLoading(false);
			setCurrentStep(STEPS.SUCESS);
			closeLoginModal();
			push('/my-bookings');
		} else {
			setLoading(false);
			console.log('error in otp', res);
			setOtpCode('');
			// TODO: handle cases of otp errors
			setOtpStatus(OTP_STATUS.INCORRECT);
			// TODO: set count for number of trials
		}
	};

	const handleResendOtp = () => {
		// TODO: resend API
		setOtpCode('');
		resetTimer();
		setOtpStatus(OTP_STATUS.RESENT);
		startTimer();
		// TODO: auto focus of otp input
	};

	const changePhoneNumber = () => {
		setCurrentStep(STEPS.LOGIN);
		setOtpCode('');
		setPhoneNumber('');
		resetTimer();
		setOtpStatus(OTP_STATUS.PENDING);
	};

	return (
		<Modal
			open={isLoginModalOpen}
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

				{currentStep === STEPS.LOGIN && (
					<Box column center fullWidth>
						<Box column center gap={'12px'} mb={'42px'}>
							<Text primary bold s={24}>
								Login
							</Text>

							<Text gray light s={16}>
								For Proceed you need to login to your account first
							</Text>
						</Box>

						<Box column center gap={'16px'} mb={'24px'} fullWidth>
							<Text bold s={14}>
								Enter Mobile Number
							</Text>

							<PhoneInput
								// value={phoneNumber}
								onChange={(e: any) => setPhoneNumber(e)}
							/>
						</Box>

						<Button
							loading={loading}
							onClick={handlePhoneVerification}
							disabled={!phoneNumber}
							variant="contained"
							fullWidth
							size="large">
							Continue
						</Button>

						<Box row center gap={0.5} mt={'24px'}>
							<Text gray s={14}>
								Don’t have an account?
							</Text>
							<Text
								onClick={handleSignIn}
								primary
								bold
								s={14}
								sx={{
									'&:hover': {
										cursor: 'pointer',
									},
								}}>
								Sign Up
							</Text>
						</Box>
					</Box>
				)}

				{currentStep === STEPS.VERIFICATION && (
					<Box column center fullWidth>
						<Box column center gap={'12px'}>
							<Text primary bold s={24}>
								OTP Verification
							</Text>

							<Text center gray light s={16}>
								We have sent a code to your number {phoneNumber}
								<Text
									onClick={changePhoneNumber}
									primary
									bold
									s={16}
									sx={{
										display: 'inline',
										'&:hover': {
											cursor: 'pointer',
										},
									}}>
									Change?
								</Text>
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

						{otpStatus === OTP_STATUS.PENDING ||
						otpStatus === OTP_STATUS.RESENT ||
						otpStatus === OTP_STATUS.INCORRECT ? (
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
				)}

				{currentStep === STEPS.SUCESS && (
					<Box column center fullWidth>
						Sucess
					</Box>
				)}
			</Box>
		</Modal>
	);
};

export default LoginModal;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '94%', sm: '580px' },
	bgcolor: '#FFF',
	borderRadius: '16px',
	boxShadow: 24,
	py: { xs: 5, md: 10 },
	px: { xs: 2.5, md: 12 },
};

export const STEPS = {
	LOGIN: 'login',
	VERIFICATION: 'verification',
	SUCESS: 'sucess',
};

export const OTP_STATUS = {
	PENDING: 'pending',
	INCORRECT: 'incorrect',
	EXPIRED: 'expired',
	MAKE_SURE: 'makeSure',
	RESENT: 'resent',
};

export const InfoBoxStates: any = {
	expired: {
		type: 'error',
		title: 'OTP Expired',
		description: 'The OTP has expired, Please resend the code to get a new one',
	},
	incorrect: {
		type: 'error',
		title: 'OTP Incorrect',
		description: 'The OTP you’ve entered is incorrect, Please try again.',
	},
	makeSure: {
		type: 'info',
		title: null,
		description: 'If you haven’t received the OTP, Please make sure your number is correct and try resending the OTP.',
	},
	resent: {
		type: 'success',
		title: 'OTP Resent',
		description: 'A new OTP code has been sent to your number,Please check.',
	},
};
