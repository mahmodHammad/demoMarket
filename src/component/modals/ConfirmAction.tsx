'use client';

import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import { IconButton, Modal } from '@mui/material';
import { Close } from '@/assets';

interface Props {
	title: string;
	body: string;
	handleClose: () => void;
	isOpen: boolean;
	confirmFunc: any;
}

const ConfirmAction = ({ title, body, handleClose, isOpen, confirmFunc }: Props) => {
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
						<Text primary bold variant="h5">
							{title}
						</Text>
						<Text variant="body" gray light>
							{body}
						</Text>
					</Box>
					<Box row gap={'10px'} mt={'10px'}>
						<Button onClick={() => handleClose()} variant="text" fullWidth size="large" sx={{ mt: '24px' }}>
							Close
						</Button>
						<Button onClick={() => confirmFunc()} variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
							Confirm
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
	width: { xs: '90%', sm: '441px' },
	bgcolor: '#FFF',
	borderRadius: '16px',
	boxShadow: 24,
	py: '55px',
	px: '60px',
};
