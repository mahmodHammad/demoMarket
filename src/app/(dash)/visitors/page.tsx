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
				<Text variant="h4" mb="24px">
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
		name: 'Mahmoud',
		phoneNumber: '+966 5678 98 ',
		RegisterTime: '2021-2-2 / 8:00PM',
		Progress: 'Progress state1',
	},
	{
		id: 1,
		name: 'Mahmoud',
		phoneNumber: '+966 5678 98 ',
		RegisterTime: '2021-2-2 / 8:00PM',
		Progress: 'Progress state2',
	},
	{
		id: 1,
		name: 'Mahmoud',
		phoneNumber: '+966 5678 98 ',
		RegisterTime: '2021-2-2 / 8:00PM',
		Progress: 'Progress state4524',
	},
	{
		id: 1,
		name: 'Mahmoud',
		phoneNumber: '+966 5678 98 ',
		RegisterTime: '2021-2-2 / 8:00PM',
		Progress: 'Progress state1321',
	},
	{
		id: 1,
		name: 'Mahmoud',
		phoneNumber: '+966 5678 98 ',
		RegisterTime: '2021-2-2 / 8:00PM',
		Progress: 'Progress state1012',
	},
	{
		id: 1,
		name: 'Mahmoud',
		phoneNumber: '+966 5678 98 ',
		RegisterTime: '2021-2-2 / 8:00PM',
		Progress: 'Progress state6643',
	},
];

const HEADERS = ['name', 'Phone Number', 'Register Time', 'Progress'];

const CELLS_TYPES = [
	{
		type: TYPES.STRING, // Type of cell
		dataKey: 'name', // data access key of cell
	},
	{
		type: TYPES.STRING,
		dataKey: 'phoneNumber',
	},
	{
		type: TYPES.STRING,
		dataKey: 'RegisterTime',
	},

	{
		type: TYPES.STRING,
		dataKey: 'Progress',
	},
];

//Filter values for filtering Requests. 1st level is accordion name. 2nd level is key-value for filters.
const FilterValues = {
	'Filter by status': [
		{ name: 'Pay Down', value: true, id: 'Pay Down', status: 18 },
		{ name: 'Pending', value: true, id: 'Completed', status: 3 },
	],
};
