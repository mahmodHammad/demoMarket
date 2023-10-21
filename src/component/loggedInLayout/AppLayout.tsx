'use client';

import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';

import DrawerContainer from './Drawer';
import Notifications from './Notifications';
import ProfileDropDown from './ProfileDropDown';
import { Box } from '@/wrappers/layouts';
import MarketPlace from '@/assets/icons/MarketPlace';
import { Button } from '@/wrappers';
import Link from 'next/link';

const drawerWidth: number = 240;

interface Props {
	children?: React.ReactElement;
}

export default function AppLayout({ children, type }: Props) {
	return (
		<Box sx={{ display: 'flex', height: '100vh' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={true}
				sx={{
					backgroundColor: '#fff',
					boxShadow: 'none',
					minHeight: '90px',
					maxHeight: '200px',
					justifyContent: 'center',

					marginLeft: drawerWidth,
					width: `calc(100% - ${drawerWidth}px)`,
				}}>
				<Toolbar
					sx={{
						display: 'grid',
						alignItems: 'center',
						gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
						backgroundColor: '#fff',
						flexWrap: 'wrap',
						pr: '24px', // keep right padding when drawer closed
					}}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
						{/* <TextField
							size="small"
							sx={{
								width: '366px',
							}}
							variant="outlined"
							placeholder="Search"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon style={{ color: '#969798' }} />
									</InputAdornment>
								),
							}}
						/> */}
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}>
						<Box
							sx={{
								flex: 1,
								justifyContent: 'flex-end',
								display: 'flex',
								mr: '48px',
							}}>
							<Button component={Link} href="/" variant="contained" endIcon={<MarketPlace />}>
								Marketplace
							</Button>
						</Box>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '48px',
							}}>
							<Box
								xcenter
								sx={{
									mr: '20px',
									alignItems: 'end',
								}}>
								<Notifications />
							</Box>

							<Box>
								<ProfileDropDown />
							</Box>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>

			<DrawerContainer type={type} />
			<Box
				sx={{
					backgroundColor: '#FAFCFD',
					borderRadius: '8px',
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Box
					component="main"
					sx={{
						maxWidth: '1600px',
						borderRadius: '4px',
						marginTop: { xs: '70px', sm: '70px', md: '90px' },
						p: '32px',
						overflow: 'auto',
						position: 'relative',
						minHeight: '80vh',
					}}>
					{children}
				</Box>
			</Box>
		</Box>
	);
}
