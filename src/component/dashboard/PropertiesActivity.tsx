'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, Tab, Tabs } from '@mui/material';
import { Box, Container, Item, Text } from '@/wrappers';
import SaleIcon from '@/assets/icons/SaleIcon';
import PropertiesSaleIcon from '@/assets/icons/PropertiesSaleIcon';
import RentIcon from '@/assets/icons/RentIcon';

export default function App() {
	const [currentFilter, setCurrentFilter] = useState('details');

	const chartData = [
		{
			title: 'Properties for Sale',
			value: '31,242',
			icon: PropertiesSaleIcon,
		},
		{
			title: 'Sales',
			value: '$15,567.62',
			icon: SaleIcon,
		},
		{
			title: 'Properties for Rent',
			value: '72,816',
			icon: PropertiesSaleIcon,
		},
		{
			title: 'Rent',
			value: '$7.45',
			icon: RentIcon,
		},
	];

	function handleChange(tab): void {
		setCurrentFilter(tab);
	}
	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}
	return (
		<Box sx={{ height: '100%' }}>
			<Card sx={{ p: '12px 8px', height: '100%' }}>
				<CardHeader
					title={
						<>
							<Container alignItems="center" justifyContent="space-between">
								<Item xs={5}>
									<Box>
										<Text variant="title">Properties Activity</Text>
										<Text variant="caption" gray>
											Total No. of Properties: 134.351
										</Text>
									</Box>
								</Item>
								<Item xs={7} display={'flex'} justifyContent={'flex-end'}>
									<Tabs
										sx={{
											fontSize: '14px !important',
											'& .Mui-selected': {
												color: '#004256 !important',
												fontWeight: '700 !important',
											},
										}}
										variant="standard"
										value={currentFilter}
										onChange={handleChange}
										aria-label="nav tabs example">
										<Tab
											value="details"
											sx={{ fontSize: '12px !important', minWidth: '70px' }}
											label={'Details'}
											onClick={() => setCurrentFilter('details')}
											{...a11yProps(0)}
										/>
										<Tab
											value="activity"
											sx={{ fontSize: '12px !important', minWidth: '70px' }}
											label={'Activity'}
											onClick={() => setCurrentFilter('activity')}
											{...a11yProps(1)}
										/>
									</Tabs>
								</Item>
							</Container>
							{/* <Divider /> */}
						</>
					}></CardHeader>
				<CardContent
					sx={{
						height: '100%',
					}}>
					<Container
						sx={{
							height: '100%',
							display: 'flex',
							alignItems: 'center',
						}}>
						{chartData?.map(({ title, value, icon: Icon }, index) => {
							return (
								<Item xs={6} key={index}>
									<Container alignItems="center" spacing={'16px'} justifyContent="space-between">
										<Item xs={2}>
											<Icon
												color="primary"
												sx={{
													color: (theme) => theme.palette.primary.main,
													stroke: (theme) => theme.palette.primary.main,
												}}
											/>
										</Item>
										<Item xs={9}>
											<Box>
												<Text fontWeight={400} variant="caption">
													{title}
												</Text>
												<Text
													variant="h5"
													sx={{
														color: '#232425',
														fontWeight: 700,
													}}>
													{value}
												</Text>
											</Box>
										</Item>
									</Container>
								</Item>
							);
						})}
						<Item xs={12} sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
							{/* <Text variant="title" sx={{ color: (theme) => theme.palette.primary.main }}>
								Export Data {'>'}
							</Text> */}
						</Item>
					</Container>
				</CardContent>
			</Card>
		</Box>
	);
}
