'use client';
import { AtarWhiteLogo, Menu as MenuIcon } from '@/assets';
import { Button, Text } from '@/wrappers';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

function ResponsiveAppBar() {
	const { openLoginModal, isAuthed } = useAuth();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleLoginClicked = () => {
		openLoginModal();
		handleCloseNavMenu();
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						justifyContent: 'space-between',
						height: { xl: '100px', md: '82px', xs: '72px' },
					}}>
					<Box
						component={Link}
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
						}}>
						<AtarWhiteLogo
							sx={{
								height: { md: '40px', xl: '52px' },
								width: '133px',
							}}
						/>
					</Box>

					<Box
						component={Link}
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
						}}>
						<AtarWhiteLogo
							sx={{
								height: '40px',
								width: '103px',
							}}
						/>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Box>
							{/* <Button
								component={Link}
								href="/dashboard"
								sx={{ color: '#fff', fontSize: '18px', mr: '12px' }}
								size="medium">
								admin
							</Button>
							<Button
								component={Link}
								href="/my-bookings"
								sx={{ color: '#fff', fontSize: '18px', mr: '12px' }}
								size="medium">
								Visitor
							</Button> */}
							{!isAuthed ? (
								<>
									<Button
										onClick={handleLoginClicked}
										sx={{ color: '#fff', fontSize: '20px', mr: '12px' }}
										size="medium">
										Login
									</Button>
									<Button
										component={Link}
										href="/signup"
										size="medium"
										variant="outlined"
										whiteborder
										sx={{ fontSize: '20px' }}>
										Signup
									</Button>
								</>
							) : (
								<Button
									component={Link}
									href="/my-bookings"
									size="small"
									variant="outlined"
									whiteborder
									sx={{ fontSize: '20px' }}>
									My Account
								</Button>
							)}
						</Box>
					</Box>

					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="Login or signup user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							<MenuItem onClick={handleLoginClicked}>
								<Text textAlign="center">Login</Text>
							</MenuItem>
							<MenuItem component={Link} href="/signup">
								<Text textAlign="center">Signup</Text>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
