'use client';
import React, { useState } from 'react';
import FilterPopup from '@/component/table/Resources/Components/FilterPopup';
import PaginationWrapper from '@/component/table/Resources/Components/PaginationWrapper';
import PaginatedResourcesTable from '@/component/table/Resources/PaginatedResourceTable';
import DataTable from '@/component/table/Resources/Components/DataTable';
import Search from '@/component/table/Resources/Components/Search';
import BookingData, { BookingFilterValues, bookingHeaders } from '@/component/my-booking/BookingData';
import { Box, Text } from '@/wrappers';

export const TableHeader = () => {
	return (
		<>
			<Text variant="h5" sx={{ pb: '24px' }}>
				All Bookings
			</Text>
		</>
	);
};

export default function BookingTable() {
	const data = [
		{ id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Visit Booked' },
		{ id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Pay Down' },
		{
			id: 1,
			name: 'Property 1',
			visitType: 'InPerson',
			dateTime: '01/01.2023 at 10:00 AM',
			status: 'Payment Completed',
		},
		{ id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Completed' },
		{ id: 1, name: 'Property 1', visitType: 'InPerson', dateTime: '01/01.2023 at 10:00 AM', status: 'Completed' },
	];
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState('');
	const [filter, setFilter] = useState('0');
	const [status, setStatus] = useState([]);
	const handleSearch = (value: string) => {
		setSearch(value);
	};

	const handleSort = (id: string) => {
		setSort(id);
	};

	const handleFilter = (id: string) => {
		setFilter(id);
	};

	return (
		<Box sx={{ pl: '16px', pr:'16px' }}>
			<PaginatedResourcesTable
				data={data}
				RenderTable={
					<DataTable
						isLoading={false}
						isEmpty={!data?.length}
						pagination={
							<PaginationWrapper page={page} count={data?.length} handler={(value: number) => setPage(value)} />
						}
						filters={
							<>
								<Search search={search} handleSearch={handleSearch} />
								<FilterPopup
									filtering={true}
									filterValues={BookingFilterValues}
									handleFilter={handleFilter}
									status={status}
									setStatus={setStatus}
								/>
							</>
						}
						headerData={bookingHeaders()}>
						<BookingData data={data} />
					</DataTable>
				}
				Header={<TableHeader />}
			/>
		</Box>
	);
}
