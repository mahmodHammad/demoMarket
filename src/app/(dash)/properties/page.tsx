'use client';

import { Box, Button, Text } from '@/wrappers';

import React, { useEffect, useState } from 'react';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';
import { Plus } from '@/assets';
import Link from 'next/link';
import { Tab, Tabs } from '@mui/material';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export default function Properties() {
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [status, setStatus] = useState<number[]>([]);
	const [filter, setFilter] = useState('0');
	const [sort, setSort] = useState('');

	const handleSearch = (v: string) => setSearch(v);
	const handlePagination = (v: number) => setCurrentPage(v);
	const handleStatusChange = (v: number[]) => setStatus(v);
	const handleFilter = (id: string) => setFilter(id);
	const handleSort = (id: string) => setSort(id);

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	useEffect(() => {
		console.log('properties table state changed', {
			search,
			currentPage,
			status,
			filter,
			sort,
		});
	}, [search, currentPage, status, filter, sort]);

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

	return (
		<>
			<Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						mb: '40px',
					}}>
					<Text variant="h4" sx={{ padding: '35px 0px 24px 36px' }}>
						My Properties
					</Text>
					<Button
						component={Link}
						href="/properties/addUnit"
						startIcon={<Plus sx={{ fill: '#fff' }} />}
						variant="contained"
						sx={{ mr: '40px' }}>
						Add unit to market place
					</Button>
				</Box>
				<Box sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
							<Tab label="Rent" {...a11yProps(0)} />
							<Tab label="Buy" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<Table
							headers={HEADERS}
							cellsTypes={CELLS_TYPES}
							data={DATA}
							filterValues={FilterValues}
							loading={loading}
							search={search}
							handleSearch={handleSearch}
							currentPage={currentPage}
							handlePagination={handlePagination}
							status={status}
							handleStatusChange={handleStatusChange}
							filter={filter}
							handleFilter={handleFilter}
							sort={sort}
							handleSort={handleSort}
						/>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<Table
							headers={HEADERS}
							cellsTypes={CELLS_TYPES}
							data={DATA2}
							filterValues={FilterValues}
							loading={loading}
							search={search}
							handleSearch={handleSearch}
							currentPage={currentPage}
							handlePagination={handlePagination}
							status={status}
							handleStatusChange={handleStatusChange}
							filter={filter}
							handleFilter={handleFilter}
							sort={sort}
							handleSort={handleSort}
						/>
					</CustomTabPanel>
				</Box>
			</Box>
		</>
	);
}

// -------------------HOW TO DESCRIBE THE TABLE AND ITS FUNCTIONALITY---------------------------

// actual table data
const DATA = [
	{ id: 1, type: 'Rent Unit', method: 'Cash', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 13500' },
	{ id: 1, type: 'Rent Unit', method: 'Card', date: '12-10-2024', status: 'Pay Down', amount: 'SAR 45100' },
	{ id: 1, type: 'Rent Unit', method: 'UPI', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 154100' },
	{ id: 1, type: 'Rent Unit', method: 'Net Banking', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
	{ id: 1, type: 'Rent Unit', method: 'UPI', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
];

const DATA2 = [
	{ id: 1, type: 'Buy Unit', method: 'Cash', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
	{ id: 1, type: 'Rent Unit', method: 'Card', date: '12-10-2024', status: 'Pay Down', amount: 'SAR 45100' },
	{ id: 1, type: 'Buy Unit', method: 'Cash', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 18100' },
	{ id: 1, type: 'Pay down', method: 'Cash Banking', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
	{ id: 1, type: 'Buy Unit', method: 'Cash', date: '12-10-2024', status: 'Pay Down', amount: 'SAR 5200' },
];

const HEADERS = ['Payment Type', 'Payment Method', 'Date', 'Amount', 'Status', ''];

const CELLS_TYPES = [
	{
		type: TYPES.STRING, // Type of cell
		dataKey: 'type', // data access key of cell
	},
	{
		type: TYPES.STRING,
		dataKey: 'method',
	},
	{
		type: TYPES.DATE,
		dataKey: 'date',
	},
	{
		type: TYPES.STRING,
		dataKey: 'amount',
	},
	{
		type: TYPES.LABEL,
		dataKey: 'status',
		options: {
			// label colors based on value, key is the label text (from data column), value is the colors
			colorPalette: {
				Pending: { color: '#8A6A16', bg: '#FCEDC7' },
				'Pay Down': { color: '#0A9458', bg: '#EDFAF4' },
			},
		},
	},
	{
		type: TYPES.BUTTON,
		options: {
			title: 'View Details',
			variant: 'text', // OPTIONAL: buttons variants, default is text
			textColor: 'primary', // OPTIONAL, either semantic or hexa, default is black
			isLink: true, // OPTIONAL: pass it with true value if you want the button to be a link
			href: '/admin-payments/payment-details', // OPTIONAL: pass it in case it's link,
			onClick: () => console.log('clicked'), // pass it in case it's not link,
			sx: { py: 2 },
		},
	},
];

//Filter values for filtering Requests. 1st level is accordion name. 2nd level is key-value for filters.
const FilterValues = {
	'Filter by status': [
		{ name: 'Pay Down', value: true, id: 'Pay Down', status: 18 },
		{ name: 'Pending', value: true, id: 'Completed', status: 3 },
	],
};
