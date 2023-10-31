'use client';

import React, { useEffect, useState } from 'react';
import { Box, Text } from '@/wrappers';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';

interface props {
	data: [];
}

const AdminVisitors = ({ data }: props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [status, setStatus] = useState({});
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
			<Table
				headers={HEADERS}
				cellsTypes={CELLS_TYPES}
				data={data}
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
		</>
	);
};

const HEADERS = ['name', 'Phone Number', 'Register Time', 'Interest'];

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

export default AdminVisitors;
