'use client';
import { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Box, Container, Item, Text } from '@/wrappers';
import DoughnutChart from '../charts/doughnutChart';

const Colors = ['#002A37', '#2a5b6a', '#008EA5', '#CCE8ED', '#83c4d0', '#CCD9DD'];
export default function UserDemographics() {
	const data = {
		nationality: {
			'Saudi Arabia': 75,
			Qatar: 30,
			Egypt: 1,
			'United Arab Emirates': 3,
		},
		age: {
			'0_19': 23,
			'20_29': 1,
			'30_39': 1,
			'40_49': 0,
			'50_59': 0,
			'60_more': 0,
		},
		gender: {
			female: 13,
			male: 137,
		},
	};
	const [currentFilter, setCurrentFilter] = useState('nationality');
	const [total, setTotal] = useState(0);
	const [datavalues, setDatavalues] = useState([]);
	useEffect(() => {
		if (data) {
			let tempTotal: number = Object.values(data[currentFilter]).reduce((a, b) => a + b, 0) || 0;
			let temp = [
				...Object.keys(data[currentFilter])?.map((key, index) => {
					return {
						name: key,
						value: Math.ceil((100 * data[currentFilter][key]) / tempTotal) || 0,
						color: Colors[index],
					};
				}),
			];
			setDatavalues(temp);
			setTotal(tempTotal);
		}
	}, [currentFilter]);

	const ChartData = ({ title, color, value }: { title: string; color: string; value: number }) => (
		<Box row ycenter sx={{ mb: '10px' }}>
			<Box
				sx={{
					background: color,
					width: '18px',
					height: '8px',
					borderRadius: '8px',
					mr: '8px',
				}}></Box>
			<Box row sx={{ justifyContent: 'space-between', flex: 1 }}>
				<Text
                    gray
                    variant='caption'
					sx={{
						textTransform: 'capitalize',
					}}>
					{title}
				</Text>
				<Text sx={{ fontWeight: 400 }}>{value}%</Text>
			</Box>
		</Box>
	);

	function handleChange(tab): void {
		setCurrentFilter(tab);
	}
	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}
	const header = (
		<Container alignItems="center" justifyContent="space-between" mb={'32px'}>
			<Box>
				<Text variant="title">User Demographics</Text>
				<Text
					variant="caption"
					gray>
					All Users
				</Text>
			</Box>

			<Tabs
				variant="standard"
				value={currentFilter}
				onChange={handleChange}
				aria-label="nav tabs example"
				sx={{
					fontSize: '14px !important',
					'& .Mui-selected': {
						color: '#004256',
                        fontWeight:700
					},
				}}>
				<Tab
					value="nationality"
					sx={{ fontSize: '12px !important', minWidth: '70px' }}
					label={'Nationality'}
					onClick={() => setCurrentFilter('nationality')}
					{...a11yProps(0)}
				/>
				<Tab
					value="age"
					sx={{ fontSize: '12px !important', minWidth: '70px' }}
					label={'Age'}
					onClick={() => setCurrentFilter('age')}
					{...a11yProps(1)}
				/>
				<Tab
					value="gender"
					sx={{ fontSize: '12px !important', minWidth: '70px' }}
					label={'Gender'}
					onClick={() => setCurrentFilter('gender')}
					{...a11yProps(2)}
				/>
			</Tabs>
		</Container>
	);
	const infoBar = datavalues.map((d) => <ChartData title={d.name} color={d.color} value={d.value} />);

	const footer = (
		<Item mt={'32px'} xs={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
			<Text variant='title' sx={{ color: (theme) => theme.palette.primary.main }}>
				Export Data {'>'}
			</Text>
		</Item>
	);
	return (
		<DoughnutChart
			footer={footer}
			chartData={datavalues}
			total={total}
			header={header}
			infoBar={infoBar}
			title="Total"
		/>
	);
}
