'use client';

import Dialog from '@mui/material/Dialog';
import { Box, Text } from '@/wrappers';
import { Button } from '@mui/material';
import React, { useState } from 'react';

interface prop {
	color: string;
	icon: any;
	title: string;
	body: string;
	button1: string;
	button2: string;
	handleClose: any;
	setopenPopup: any;
	handleButton1: any;
	handleButton2: any;
	isOpen: boolean;
}

export default function PopUpCard({ handleClose, handleButton1,handleButton2, isOpen, color, title, body, button1, button2, icon }: prop) {
	return (
		<div>
			<Dialog
				sx={{ borderRadius: '16px' }}
				open={isOpen}
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
					<Text variant="body1">{body || ''}</Text>
					<Button
						onClick={handleButton1}
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
						onClick={handleButton2}
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
