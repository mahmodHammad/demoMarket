'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Box, Button, Text } from '@/wrappers';
import { Modal } from '@mui/material';
import { Close } from '@/assets';

import { Phoneinput } from '@/component';

import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import InfoBox from '../InfoBox';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '90%', sm: '580px' },
	bgcolor: '#FFF',
	borderRadius: '16px',
	boxShadow: 24,
	p: 10,
	// pt: 11
};


const LoginModal = () => {
	const {
		isLoginModalOpen,
		closeLoginModal,
	} = useAuth();

	return (
		<Modal
			open={isLoginModalOpen}
			onClose={closeLoginModal}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box
				column
				center
				gap={'40px'}
				sx={style}
			>
				<IconButton
					onClick={closeLoginModal}
					sx={{
						position: 'absolute',
						top: '36px',
						right: '24px',
					}}
				>
					<Close />
				</IconButton>

				<Box
					column
					center
					gap={'12px'}
				>
					<Text
						primary
						bold
						s={24}
					>
						Login
					</Text>

					<Text
						gray
						light
						s={16}
					>
						For Proceed you need to login to your account first
					</Text>
				</Box>

				<Phoneinput />

				<InfoBox
					type='info'
					description='If you haven’t received the OTP, Please make sure your number is correct and try resending the OTP.'
				/>

				<InfoBox
					type='success'
					title='OTP Resent'
					description='A new OTP code has been sent to your number,Please check.'
				/>

				<InfoBox
					type='error'
					title='OTP Expired'
					description='The OTP has expired, Please resend the code to get a new one'
				/>

				<Button
					variant='contained'
					fullWidth
					size='large'
					sx={{ mt: '24px' }}
				>
					Continue
				</Button>
			</Box>
		</Modal>
	);
};

export default LoginModal;
