'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Item, Text } from '@/wrappers';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { get } from '@/utils/http';
import ConfirmAction from '@/component/modals/ConfirmAction';
import { globalToast } from '@/utils/toast';
import { getMyBookings, changeStatusBooking } from './booking-service';
import dayjs from 'dayjs';
import Link from 'next/link';
import Pencilline from '@/assets/icons/Pencilline';

export default function AdminBookings() {
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [status, setStatus] = useState<number[]>([]);
	const [filter, setFilter] = useState('0');
	const [sort, setSort] = useState('');
	// useEffect( ()=>{
	// 	 get('bookings');
	// },[])
	const handleSearch = (v: string) => setSearch(v);
	const handlePagination = (v: number) => setCurrentPage(v);
	const handleStatusChange = (v: number[]) => setStatus(v);
	const handleFilter = (id: string) => setFilter(id);
	const handleSort = (id: string) => setSort(id);
	const [isOpen, setIsOpen] = useState(false);
	const [modalOptions, setModalOptions] = useState({});

	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.ADMINBOOKINGS],
		queryFn: () => getMyBookings(),
	});
	useEffect(() => {
		console.log('payment table state changed', {
			search,
			currentPage,
			status,
			filter,
			sort,
		});
	}, [search, currentPage, status, filter, sort]);

	const acceptOrReject = (id: number, type: string) => {
		setModalOptions({
			id,
			type,
			title: `${type} Booking`,
			body: `Please confirm to ${type} this Booking.`,
		});
		setIsOpen(true);
	};

	const acceptOrRejectBookings = async () => {
		await changeStatusBooking(modalOptions?.id, { status: modalOptions?.type === 'Accept' ? 'approved' : 'reject' })
			.then((response) => {
				globalToast(`Booking ${modalOptions?.type === 'Accept' ? 'Approved' : 'Rejected'} Successful`, 'success');
				setIsOpen(false);
				refetch();
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			});
	};
	const CELLS_TYPES = [
		{
			type: TYPES.STRING, // Type of cell
			dataKey: 'unit.id', // data access key of cell
		},
		{
			type: TYPES.STRING,
			dataKey: 'user.name',
		},
		{
			type: TYPES.ENUM_STRING,
			dataKey: 'visit_type',
			options: {
				in_person: 'In Person',
			},
		},
		{
			type: TYPES.STRING,
			dataKey: 'booking_date',
		},
		{
			type: TYPES.BUTTON,
			options: {
				title: 'Accept',
				variant: 'contained', // OPTIONAL: buttons variants, default is text
				textColor: '#fff', // OPTIONAL, either semantic or hexa, default is black
				passParams: true, // Optional, if true then onclick function will be passed the id and title of button.
				onClick: acceptOrReject, // pass it in case it's not link,
				sx: { py: 2 },
			},
		},
		{
			type: TYPES.BUTTON,
			options: {
				title: 'Reject',
				variant: 'text', // OPTIONAL: buttons variants, default is text
				textColor: '#FF4242', // OPTIONAL, either semantic or hexa, default is black
				passParams: true, // Optional, if true then onclick function will be passed the id and title of button.
				onClick: acceptOrReject, // pass it in case it's not link,
				sx: { py: 2 },
			},
		},
	];
	return (
		<>
			<Box>
				<Box row justifyContent={'space-between'}>
					<Item>
						<Text variant="h4" mb="4px">
							Booking Visit Requests List
						</Text>
						<Text variant="caption" mb="24px">
							Today {dayjs().format('LL')}
						</Text>
					</Item>
					<Item>
						<Button variant="outlined" component={Link} href="admin-bookings/availability" startIcon={<Pencilline />}>
							Edit Visit Time
						</Button>
					</Item>
				</Box>
				<Table
					headers={HEADERS}
					cellsTypes={CELLS_TYPES}
					data={data?.list}
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
			<ConfirmAction
				handleClose={() => setIsOpen(false)}
				title={modalOptions?.title}
				body={modalOptions?.body}
				isOpen={isOpen}
				confirmFunc={acceptOrRejectBookings}
			/>
		</>
	);
}

// -------------------HOW TO DESCRIBE THE TABLE AND ITS FUNCTIONALITY---------------------------

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
