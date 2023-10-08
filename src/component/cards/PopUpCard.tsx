import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Text } from '@/wrappers';
import { useState } from 'react';
import { Button } from '@mui/material';

interface prop {
	color: string;
	icon: any;
	title: string;
	body: string;
	button1: string;
	button2: string;
	openPopup: boolean;
	setopenPopup: boolean;
}

export default function PopUpCard({ openPopup, setopenPopup, color, title, body, button1, button2, icon }: prop) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Open alert dialogg
			</Button>

			<Dialog
				sx={{ borderRadius: '16px' }}
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<Box column center height={'443px'} width={'557px'}>
					<Box center height={'80px'} width={'80px'} borderRadius={'50%'} bgcolor={color}>
						{icon}
					</Box>
					<Text mt={'10px'} variant="h4">
						{title || 'Unit list Successful!'}
					</Text>
					<Text variant="body1">{body || 'bodybodybody!'}</Text>
					<Button
						onClick={handleClose}
						sx={{
							color: 'white',
							background: color,
							backgroundColor: color,
							mt: '80px',
							width: '300px',
							'&:hover': {
								backgroundColor: color,
							},
						}}>
						{button1}
					</Button>
					<Button
						onClick={handleClose}
						sx={{
							mt: '20px',
							fontSize: '16px',

							color: 'black',
							'&.MuiButtonBase-root:hover': {
								bgcolor: 'transparent',
							},
						}}
						variant="text">
						{button2}
					</Button>
				</Box>
			</Dialog>
		</div>
	);
}
