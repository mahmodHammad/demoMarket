'use client';

import { Box, Text } from '@/wrappers';

import React, { useEffect, useState } from 'react';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';

import { Button } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllProperties } from './properties-service';
import { DELETE } from '@/utils/http';
import { globalToast } from '@/utils/toast';
import { Plus } from '@/assets';
import Link from 'next/link';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const DeleteUnit = (id: number | string) => DELETE(`/dashboard/properties/${id}`);

export default function Properties() {
	const [renderedList, setRenderedList] = useState<any>([]);

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

	const handleDeleteUnit = (row: any) => {
		DeleteUnit(row?.id)
			.then((response) => {
				globalToast('Unit Deleted Successful', 'success');
				queryClient.invalidateQueries({ queryKey: ['LISTEDPROPERTIES'] });
				queryClient.invalidateQueries({ queryKey: ['PROPERTIES'] });
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			});
	};

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	
	const { data, isLoading: filtersLoading } = useQuery({
		queryKey: ['LISTEDPROPERTIES', { search, currentPage, status, filter, sort }],
		queryFn: () => getAllProperties({ search, currentPage, status, filter, sort }),
	});

	useEffect(() => {
		if (!!data?.list.length)
			setRenderedList(
				data?.list.map((i: any) => ({
					...i,
					statusName: i?.status?.description || '',
					statusValue: i?.status?.value || '',
					complexName: i?.complex?.name || '',
					buildingName: i?.building?.name || '',
				})),
			);
	}, [data]);

	const queryClient = useQueryClient();

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

	const CELLS_TYPES = [
		{
			type: TYPES.STRING, // Type of cell
			dataKey: 'name', // data access key of cell
		},
		{
			type: TYPES.STRING,
			dataKey: 'complexName',
		},
		{
			type: TYPES.STRING,
			dataKey: 'buildingName',
		},
		{
			type: TYPES.LABEL,
			dataKey: 'statusName',
			options: {
				// label colors based on value, key is the label text (from data column), value is the colors
				// TODO: map new labels colors
				colorPalette: {
					Leased: { color: '#0A9458', bg: '#EDFAF4' },
					Renovation: { color: '#0A9458', bg: '#EDFAF4' },
					Sold: { color: '#0A9458', bg: '#EDFAF4' },
					Vacant: { color: '#FF4242', bg: '#FFE5E5' },
					Unavailable: { color: '#FF4242', bg: '#FFE5E5' },
					'Sold and lease': { color: 'rgba(0, 142, 165, 1)', bg: 'rgba(0, 142, 165, 0.08)' },
				},
			},
		},
		{
			type: TYPES.NUMBER,
			dataKey: 'noFavProperty',
		},
		{
			type: TYPES.NUMBER,
			dataKey: 'noBooking',
		},
		{
			type: TYPES.BUTTON,
			options: {
				title: 'View Details',
				variant: 'text', // OPTIONAL: buttons variants, default is text
				textColor: 'primary', // OPTIONAL, either semantic or hexa, default is black
				isLink: true, // OPTIONAL: pass it with true value if you want the button to be a link
				href: '/unitdetails', // OPTIONAL: pass it in case it's link,
				appendID: true, // OPTIONAL: pass it with true value if you want the button to be a link
				sx: { py: 2 },
			},
		},
		{
			type: TYPES.BUTTON,
			options: {
				title: 'Remove ',
				variant: 'text', // OPTIONAL: buttons variants, default is text
				textColor: '#FF4242', // OPTIONAL, either semantic or hexa, default is black
				onClick: (row: any) => handleDeleteUnit(row), // pass it in case it's not link,
				sx: { py: 2 },
			},
		},
	];
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
					<Text variant="h4">My Properties</Text>
					<Button
						component={Link}
						href="/properties/addUnit"
						addUnit
						startIcon={<Plus sx={{ fill: '#fff' }} />}
						variant="contained"
						sx={{ mr: '40px' }}>
						Add unit to market place
					</Button>
				</Box>
				<Box>
					<CustomTabPanel value={value} index={0}>
						<Table
							headers={HEADERS}
							cellsTypes={CELLS_TYPES}
							data={renderedList}
							filterValues={FilterValues}
							loading={filtersLoading}
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
							lastPage={data?.paginator?.last_page}
						/>
					</CustomTabPanel>
				</Box>
				{/* <ConfirmAction
					handleClose={() => setIsOpen(false)}
					title={'Delete Advertisement.'}
					body={'Are you sure you want to delete this Advertisement.'}
					isOpen={isOpen}
					isPrimary={false}
					confirmFunc={handleDeleteUnit}
				/> */}
			</Box>
		</>
	);
}

// -------------------HOW TO DESCRIBE THE TABLE AND ITS FUNCTIONALITY---------------------------

const HEADERS = [
	'Unit Number',
	'Community',
	'Building',
	'Status',
	'No. of Favourites',
	'No. of Bookings',
	'',
	'',
];

//Filter values for filtering Requests. 1st level is accordion name. 2nd level is key-value for filters.
const FilterValues = {
	'Filter by status': [
		{ name: 'Pay Down', value: true, id: 'Pay Down', status: 18 },
		{ name: 'Pending', value: true, id: 'Completed', status: 3 },
	],
};
