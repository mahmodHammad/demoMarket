import { Box, Text } from '@/wrappers';
import { Avatar, ButtonBase, Fade, Paper, Popper } from '@mui/material';
import React, { useState } from 'react';
import Pencilline from '@/assets/icons/Pencilline';
import ShieldKeyholeLine from '@/assets/icons/ShieldKeyholeLine';
import LogoutBoxLine from '@/assets/icons/LogoutBoxLine';
import InformationLine from '@/assets/icons/InformationLine';
import NextIcon from '@/assets/icons/NextIcon';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const PopupDetails = ({ name, image }: { name: string; image: string }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				alignItems: 'center',
			}}>
			<Avatar alt={name?.toUpperCase()} src={image} sx={{ width: 80, height: 80 }} />
			<Text variant="h5" sx={{ mt: '8px', textTransform: 'capitalize' }}>
				{name}
			</Text>
		</Box>
	);
};

const OptionLink = ({
	label,
	href = '',
	startIcon,
	onClick,
}: {
	label: string;
	href?: string;
	startIcon: any;
	onClick?: any;
}) => {
	return (
		<Box
			component={Link}
			href={href}
			onClick={onClick}
			style={{
				textDecoration: 'none',
			}}>
			<Box
				ycenter
				xbetween
				sx={{
					cursor: 'pointer',
					padding: '12px 24px',
					borderRadius: '10px',
				}}>
				<Box
					ycenter
					sx={{
						gap: '8px',
					}}>
					{startIcon}
					<Text variant="label">{label}</Text>
				</Box>
				<NextIcon />
			</Box>
		</Box>
	);
};

const ProfileDropDown = ({ type }) => {
	const { logout, user } = useAuth();
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
				<Avatar alt={'User Avatar'} src={user?.profile_image} sx={{ width: 40, height: 40 }} />
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
										mt: '30px',
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
										<PopupDetails image={user?.profile_image} name={user?.name} />
										{/* options */}
										<Box
											sx={{
												mt: '24px',
												display: 'flex',
												flexDirection: 'column',
												gap: '10px',
											}}>
											{type !== 'admin' && (
												<OptionLink component={Link} href="/my-profile" label={'Edit'} startIcon={<Pencilline />} />
											)}
											<OptionLink href="" label={'Privacy Policy'} startIcon={<ShieldKeyholeLine />} />
											<OptionLink href="" label={'Terms And Conditions'} startIcon={<InformationLine />} />
											<OptionLink onClick={logout} href="/" label={'Logout'} startIcon={<LogoutBoxLine />} />
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

export default ProfileDropDown;
