import { Box, Button, Text } from '@/wrappers';
import {
	Badge,
	ButtonBase,
	Fade,
	FormControl,
	MenuItem,
	Paper,
	Popper,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import NotificationIcon from '@/assets/icons/Notifications';
import NotificationCard from '../cards/NotificationCard';

const data = [
	{
		title: 'Titile',
		content: 'Refrigerator is not cooling for the past two days and there is a bad smell coming ',
		read: true,
		date: 'Today at 10:00 AM',
	},
	{
		title: 'Titile',
		content: 'Refrigerator is not cooling for the past two days and there is a bad smell coming ',
		read: false,
		date: 'Today at 10:00 AM',
	},
	{
		title: 'Titile',
		content: 'Refrigerator is not cooling for the past two days and there is a bad smell coming ',
		read: false,
		date: 'Today at 10:00 AM',
	},
	{
		title: 'Titile',
		content: 'Refrigerator is not cooling for the past two days and there is a bad smell coming ',
		read: false,
		date: 'Today at 10:00 AM',
	},
	{
		title: 'Titile',
		content: 'Refrigerator is not cooling for the past two days and there is a bad smell coming ',
		read: false,
		date: 'Today at 10:00 AM',
	},
];

const PopupDetails = ({ name, image }: { name: string; image: string }) => {
	const [age, setAge] = React.useState('');
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};
	return (
		<Box row xbetween ycenter>
			<Box row ycenter>
				<Text variant="label">Notification</Text>
				<Box sx={{ minWidth: '70px' }}>
					<FormControl sx={{ m: 1 }} size="small">
						<Select
							disableUnderline
							autoWidth
							variant="standard"
							value={age}
							// onChange={handleChange}
							displayEmpty
							inputProps={{ 'aria-label': 'Without label' }}>
							<MenuItem value="">
								<em>All</em>
							</MenuItem>
							<MenuItem value={'All'}>All </MenuItem>

							<MenuItem value={'Unread'}>Unread </MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Button
				sx={{
					fontSize: '14px',
					fontWeight: '400',
					color: 'black',
					'&.MuiButtonBase-root:hover': {
						bgcolor: 'transparent',
					},
					height: '6px',
				}}
				variant="text">
				Mark all as read
			</Button>
		</Box>
	);
};

const Notifications = () => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const myRef = React.useRef<HTMLDivElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen((previousOpen) => !previousOpen);
	};

	const canBeOpen = open && Boolean(anchorEl);
	const id = canBeOpen ? 'spring-popper' : undefined;

	const handleClickAway = () => {
		setOpen(false);
	};
	return (
		<Box ref={myRef}>
			<ButtonBase aria-describedby={id} className="rounded-full" onClick={handleClick}>
				<Badge
					badgeContent={2}
					color="error"
					style={{ cursor: 'pointer' }}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}>
					<NotificationIcon
						sx={{
							color: (theme) => theme?.palette?.primary?.dark,
							mb: '10px',
						}}
					/>
				</Badge>
			</ButtonBase>
			{open && (
				<ClickAwayListener onClickAway={handleClickAway}>
					<Popper
						id={id}
						open={open}
						anchorEl={anchorEl}
						transition
						sx={{
							zIndex: 1200,
							'& .MuiPaper-root': {
								boxShadow: '0px 0px 21px rgba(218, 218, 218, 0.3)',
								borderRadius: '12px',
								minWidth: '330px',
							},
						}}>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps}>
								<Paper
									sx={{
										mt: '24px',
										mr: '30px',
										bgcolor: 'background.paper',
										color: 'black',
										zindex: 20,
										borderRadius: 3,
									}}>
									<Box
										sx={{
											padding: '21px 24px 21px 24px',
										}}>
										<PopupDetails image={''} name={'Mohammad Abdullah'} />
										{/* options */}
										<Box
											sx={{
												overflowX: 'hidden',
												overflowY: 'hidden',

												display: 'flex',
												flexDirection: 'column',
												gap: '10px',
												maxHeight: 'calc(100vh - 200px)',
											}}>
											{data?.map((d, index) => (
												<ButtonBase onClick={handleClickAway}>
													<NotificationCard
														key={index}
														title={d?.title}
														content={d?.content}
														read={d?.read}
														date={d?.date}
													/>
												</ButtonBase>
											))}
										</Box>
									</Box>
								</Paper>
							</Fade>
						)}
					</Popper>
				</ClickAwayListener>
			)}
		</Box>
	);
};

export default Notifications;
