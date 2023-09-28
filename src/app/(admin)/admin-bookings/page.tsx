'use client';

import React, { useEffect, useState } from 'react';
import { Box, Text } from '@/wrappers';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';

export default function AdminBookings() {
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

	useEffect(() => {
		console.log('payment table state changed', {
			search,
			currentPage,
			status,
			filter,
			sort,
		});
	}, [search, currentPage, status, filter, sort]);

	return (
		<>
			<Box>
				<Text variant="h4" sx={{ padding: '35px 0px 24px 36px' }}>
					Booking Visit Requests List
				</Text>
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
			</Box>
		</>
	);
}

// -------------------HOW TO DESCRIBE THE TABLE AND ITS FUNCTIONALITY---------------------------

// actual table data
const DATA = [
	{
		id: 1,
		type: 'U001',
		user: 'Mahmoud',
		date: '12-10-2022',
		RequestType: 'In person',
		BookingDate: 'Tomorrow at 11:00 AM',
	},
	{
		id: 1,
		type: 'U052301',
		user: 'Abdo',
		date: '12-10-2022',
		RequestType: 'In person',
		BookingDate: 'Tomorrow at 11:00 AM',
	},
	{
		id: 1,
		type: 'U0231',
		user: 'Banda',
		date: '12-10-2022',
		RequestType: 'In person',
		BookingDate: 'Tomorrow at 11:00 AM',
	},
	{
		id: 1,
		type: 'U041',
		user: 'Ali',
		date: '12-10-2022',
		RequestType: 'In person',
		BookingDate: 'Tomorrow at 11:00 AM',
	},
];

const HEADERS = ['Unit Number', 'User', 'Request Type', 'Booking Date', '', ''];

const CELLS_TYPES = [
	{
		type: TYPES.STRING, // Type of cell
		dataKey: 'type', // data access key of cell
	},
	{
		type: TYPES.STRING,
		dataKey: 'user',
	},
  {
		type: TYPES.STRING,
		dataKey: 'RequestType',
	},
 
	{
		type: TYPES.STRING,
		dataKey: 'BookingDate',
	},
	

	{
		type: TYPES.BUTTON,
		options: {
			title: 'Accept',
			variant: 'contained', // OPTIONAL: buttons variants, default is text
			textColor: '#fff', // OPTIONAL, either semantic or hexa, default is black

			// isLink: true, // OPTIONAL: pass it with true value if you want the button to be a link
			// href: '/payment-details', // OPTIONAL: pass it in case it's link,
			onClick: () => console.log('clicked'), // pass it in case it's not link,
			sx: { py: 2 },
		},
	},
	{
		type: TYPES.BUTTON,
		options: {
			title: 'Reject',
			variant: 'text', // OPTIONAL: buttons variants, default is text
			textColor: '#FF4242', // OPTIONAL, either semantic or hexa, default is black
			// isLink: true, // OPTIONAL: pass it with true value if you want the button to be a link
			// href: '/payment-details', // OPTIONAL: pass it in case it's link,
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
