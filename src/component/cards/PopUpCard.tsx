import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button, Text } from '@/wrappers';
import Succesgreen from '@/assets/icons/Succesgreen';
import { SuccessInfoIcon } from '@/assets';

export default function PopUpCard() {
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
				Open alert dialog
			</Button>

			<Dialog
				sx={{ borderRadius: '16px' }}
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<Box column center height={'443px'} width={'557px'}>
					<Box center height={'80px'} width={'80px'} borderRadius={'50%'} bgcolor={'#4caf50'}>
						<Succesgreen></Succesgreen>
					</Box>
					<Text mt={'10px'} variant="h4">
						Unit list Successful!
					</Text>
					<Text variant="body1">lorem ma lorem ma lorem ma lorem ma lorem ma </Text>
					<Button onClick={handleClose} sx={{ mt: '80px', width: '300px' }} variant="success">
						Done
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
						View On Market
					</Button>
				</Box>
				{/* <DialogTitle  id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous location data to Google, even when no
						apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button>
				</DialogActions> */}
			</Dialog>
		</div>
	);
}
