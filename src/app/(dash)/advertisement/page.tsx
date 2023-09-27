'use client';
import { Box, Button, Text } from '@/wrappers';
import { Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { Calendar, Plus } from '@/assets';
import { AdvertisementsCard } from '@/component';
import photo1 from '@/assets/images/photo1.png';
import photo2 from '@/assets/images/photo2.png';
import photo3 from '@/assets/images/photo3.png';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const data = [
	{ title: '15% on cash ', img: photo1, duration: '16 Nov -17 Nov, 2021' },
	{ title: '15% on cash ', img: photo2, duration: '16 Nov -17 Nov, 2021' },
	{ title: '15% on cash ', img: photo3, duration: '16 Nov -17 Nov, 2021' },
	{ title: '15% on cash ', img: photo1, duration: '16 Nov -17 Nov, 2021' },
	{ title: '15% on cash ', img: photo2, duration: '16 Nov -17 Nov, 2021' },
	{ title: '15% on cash ', img: photo1, duration: '16 Nov -17 Nov, 2021' },
	{ title: '15% on cash ', img: photo3, duration: '16 Nov -17 Nov, 2021' },
];

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Text>{children}</Text>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Advertisement = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<>
			<Box column p={'35px'} width={'100%'}>
				<Box center width={'100%'} xbetween row>
					<Text variant="h4">Advertisements </Text>

					<Button variant="contained" component={Link} href="/properties" startIcon={<Plus sx={{fill:"#fff"}}/>}>
						Create New
					</Button>
				</Box>

				<Box sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
							<Tab label="On going" {...a11yProps(0)} />
							<Tab label="history" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<Grid container mt={'25px'} spacing={'28px'}>
							{data?.map((d, index) => (
								<Grid item xs={6} key={index}>
									<AdvertisementsCard title={d?.title} duration={d?.duration} img={d?.img} />
								</Grid>
							))}
						</Grid>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<Grid container mt={'25px'} spacing={'28px'}>
							{data?.map((d, index) => (
								<Grid item xs={6} key={index}>
									<AdvertisementsCard title={d?.title} duration={d?.duration} img={d?.img} />
								</Grid>
							))}
						</Grid>
					</CustomTabPanel>
				</Box>
			</Box>
		</>
	);
};

export default Advertisement;
