'use client';
import theme from '@/ThemeRegistry/theme';
import { AtarWhiteLogo, FaceBook, LinkedIn, Twitter } from '@/assets';
import { xtenants } from '@/utils/xtenants';
import { Box, Text } from '@/wrappers';
import { Container, Divider, Grid, Link, SvgIcon } from '@mui/material';
import React from 'react';

export default function Footer() {
	const description = 'Our goal is at the heart of all that we do.';
	const title = AtarWhiteLogo;

	const columns = [
		{
			title: 'Page',
			resources: [
				{
					name: 'Rent',
					link: '/Rent',
				},
				{
					name: 'Buy',
					link: '/Buy',
				},
				{
					name: 'About Us',
					link: 'https://www.atarcloud.com/about',
				},
				{
					name: 'Properties',
					link: '/Properties',
				},
			],
		},
		{
			title: 'Support',
			resources: [
				{
					name: 'FAQ,s',
					link: '/FAQ,s',
				},
				{
					name: 'Support Center',
					link: '/Support-Center',
				},
				{
					name: 'Security',
					link: 'Security',
				},
			],
		},
	];

	const contactUs = [
		{
			name: 'Want to know more?',
			link: 'https://www.atarcloud.com/contact',
		},
		{
			name: 'info@goatar.com',
			link: 'mailto:info@goatar.com',
		},
		{
			name: '3504 Imam Saud bin Faisal Rd. Almalqa 6418, Riyadh, Saudi Arabia ',
			link: 'https://maps.app.goo.gl/t6fw3RsFjvt5uC6R7',
		},
	];

	const logos = [
		{
			icon: <FaceBook />,
			link: 'https://www.facebook.com/',
		},
		{
			icon: <Twitter />,
			link: 'https://twitter.com/goatar_sa',
		},
		{
			icon: <LinkedIn />,
			link: 'https://www.linkedin.com/company/goatarsa/',
		},
	];

	return (
		<Box
			sx={{
				color: '#fff',
				backgroundColor: theme.palette.primary.dark,
			}}>
			<Box
				component="footer"
				sx={{
					py: { xs: '32px', md: '50px' },
				}}>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} md={4.8}>
							<Box column>
								<SvgIcon
									sx={{
										height: { md: '50px', xl: '70px' },

										width: '120px',
										filter: !xtenants.landingIcon ? 'brightness(0) invert(1)' : '',
									}}
									inheritViewBox>
									{xtenants?.landingIcon || xtenants.dashboardIcon}
								</SvgIcon>

								<Text
									s={14}
									bold
									sx={{
										color: '#fff',
										mt: { xs: '12px', md: '40px' },
										width: { xs: '220px', md: '227px' },
									}}>
									{description}
								</Text>
								<Box row gap={1} sx={{ mt: '24px', display: { xs: 'none', md: 'flex' } }}>
									{logos.map((item, index) => (
										<Link key={index} href={item.link} color="inherit" sx={{ mr: '10px' }} target="_blank">
											{item.icon}
										</Link>
									))}
								</Box>
							</Box>
						</Grid>
						{columns.map((column, index) => (
							<Grid item xs={5} md={1.9} key={index}>
								<Text variant="label" color="inherit" sx={{ mb: '16px', fontSize: '18px' }}>
									{column.title}
								</Text>
								{column.resources.map((item, index) => (
									<Link
										href={item.link}
										target="_blank"
										color="inherit"
										key={index}
										sx={{
											textDecoration: 'none',
										}}>
										<Text
											key={index}
											variant="small"
											light
											color="inherit"
											sx={{ display: 'block', mb: { xs: '12px', md: '16px' } }}>
											{item.name}
										</Text>
									</Link>
								))}
							</Grid>
						))}
						<Grid item xs={10} md={3.4}>
							<Text variant="label" color="inherit" sx={{ mb: '16px', fontSize: '18px' }}>
								Contact Us
							</Text>
							{contactUs.map((item, index) => (
								<Link
									href={item.link}
									target="_blank"
									color="inherit"
									key={index}
									sx={{
										textDecoration: 'none',
									}}>
									<Text key={item?.name} variant="small" color="inherit" sx={{ mb: { xs: '12px', md: '16px' } }}>
										{item?.name}
									</Text>
								</Link>
							))}
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Divider variant="fullWidth" sx={{ backgroundColor: '#CACACA' }} />
			<Box sx={{ py: '24px' }}>
				<Box>
					<Text variant="body2" color="#fff" align="center">
						{'©  '}
						<Link target="_blank" color="inherit" href="https://www.atarcloud.com/" sx={{ textDecoration: 'none' }}>
							Atarcloud
						</Link>
						. All Right Reserved {new Date().getFullYear()}
					</Text>
				</Box>
				<Box row xcenter gap={1} sx={{ mt: '20px', display: { xs: 'flex', md: 'none' } }}>
					{logos.map((item, index) => (
						<Link
							key={index}
							target="_blank"
							href={item.link}
							color="inherit"
							sx={{
								mr: '10px',
							}}>
							{item.icon}
						</Link>
					))}
				</Box>
			</Box>
		</Box>
	);
}
