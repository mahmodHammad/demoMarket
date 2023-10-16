'use client';

import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import { IconButton, Modal } from '@mui/material';
import { Close } from '@/assets';
import DangerClose from '@/assets/icons/DangerClose';
import Success from '@/assets/icons/Success';

interface Props {
	title: string;
	body: string;
	handleClose: () => void;
	isOpen: boolean;
	isPrimary: boolean;
	confirmFunc: any;
}

const ConfirmAction = ({ title, body, handleClose, isOpen, confirmFunc, isPrimary }: Props) => {
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
						top: '10px',
						right: '10px',
					}}>
					<Close />
				</IconButton>
				<Box column center fullWidth>
					<Box column center gap={'12px'}>
						{isPrimary ? (
							<Success sx={{ fill: 'primary', height: '80px', width: '80px' }} height="80px" width="80px" />
						) : (
							<DangerClose sx={{ fill: '#FF4242', height: '80px', width: '80px' }} height="80px" width="80px" />
						)}
						<Text bold variant="h5">
							{title}
						</Text>
						<Text variant="body" gray light>
							{body}
						</Text>
					</Box>
					<Box column gap={'10px'} mt={'30px'} minWidth={'200px'}>
						<Button
							color={isPrimary ? 'primary' : 'error'}
							onClick={() => confirmFunc()}
							variant="contained"
							fullWidth
							size="large"
							sx={{ mt: '24px' }}>
							Yes
						</Button>
						<Button
							color="inherit"
							onClick={() => handleClose()}
							variant="text"
							fullWidth
							size="large"
							sx={{ mt: '6px' }}>
							No
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default ConfirmAction;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '90%', sm: '500px' },
	bgcolor: '#FFF',
	borderRadius: '16px',
	boxShadow: 24,
	py: '55px',
	px: '60px',
};
