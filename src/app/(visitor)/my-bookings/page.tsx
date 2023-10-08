'use client';

import React, { useEffect, useState } from 'react';
import { Box, Text } from '@/wrappers';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';
import ForSale from '@/component/ForSale';
import neibourhoodcover2 from '@/assets/images/Rectangle 45351.png';
import UpcomingVisitPlaceholder from '@/assets/icons/UpcomingVisitPlaceholder';
import UpcomingVisitsCard from '@/component/cards/UpcomingVisitsCard';
import { data } from './mock'

export default function MyBookings() {
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
		console.log('bookings table state changed', {
			search,
			currentPage,
			status,
			filter,
			sort,
		});
	}, [search, currentPage, status, filter, sort]);

	return (
		<>
			<Box pb={8}>
				<Text variant="h4"  >
					My Bookings
				</Text>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '2fr 1fr',
						columnGap: '30px',
						padding: '25px 36px 36px 0',
					}}>
					<ForSale />
					<Box>
						<Text variant="h5" sx={{ mb: '10px' }}>
							Upcoming Visits
						</Text>
						<UpcomingVisitsCard
							title={'Property 1'}
							img={neibourhoodcover2}
							dateTime={'01/01/2023,10:00 AM'}
							location={'Pune'}
						/>
					</Box>
				</Box>
				<Table
					headers={HEADERS}
					cellsTypes={CELLS_TYPES}
					data={data?.data?.data}
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
	{ id: 1, type: 'Buy Unit', method: 'Cash', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 12100' },
	{ id: 1, type: 'Rent Unit', method: 'Card', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 12100' },
	{ id: 1, type: 'Buy Unit', method: 'UPI', date: '12-10-2022', status: 'Pay Down', amount: 'SAR 12100' },
	{ id: 1, type: 'Pay down', method: 'Net Banking', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
	{ id: 1, type: 'Buy Unit', method: 'UPI', date: '12-10-2022', status: 'Pending', amount: 'SAR 12100' },
];

const HEADERS = ['Property Name', 'Visit Type', 'Visit Date & Time', 'Status', ''];

const CELLS_TYPES = [
	{
		type: TYPES.STRING, // Type of cell
		dataKey: 'tenant', // data access key of cell
	},
	{
		type: TYPES.STRING,
		dataKey: 'visit_type',
	},
	{
		type: TYPES.DATE,
		dataKey: 'day', // need to add 'time'
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
			href: '/my-bookings/booking-details', // OPTIONAL: pass it in case it's link,
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
