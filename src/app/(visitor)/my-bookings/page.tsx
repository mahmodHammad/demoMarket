'use client';

import React, { useEffect, useState } from 'react';
import { Box, Text } from '@/wrappers';
import { Table } from '@/component';
import TYPES from '@/component/table/dataTypes';
import ForSale from '@/component/ForSale';
import neibourhoodcover2 from '@/assets/images/Rectangle 45351.png';
import UpcomingVisitPlaceholder from '@/assets/icons/UpcomingVisitPlaceholder';
import UpcomingVisitsCard from '@/component/cards/UpcomingVisitsCard';
import { data } from './mock';
import { bookingHistory, getMyBookings } from './booking-service';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { Tab, Tabs } from '@mui/material';
import EmptyUpcomingVisits from '@/component/cards/EmptyUpcomingVisits';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import ConfirmAction from '@/component/modals/ConfirmAction';
import { changeStatusBooking } from '@/app/(dash)/admin-bookings/booking-service';
import { globalToast } from '@/utils/toast';
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export default function MyBookings() {
	dayjs.extend(utc);
	const [search, setSearch] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [status, setStatus] = useState<number[]>([]);
	const [filter, setFilter] = useState('0');
	const [sort, setSort] = useState('');
	const [value, setValue] = React.useState(0);
	const [upcomingBooking, setUpcomingBooking] = useState(undefined);
	const handleSearch = (v: string) => setSearch(v);
	const handlePagination = (v: number) => setCurrentPage(v);
	const handleStatusChange = (v: number[]) => setStatus(v);
	const handleFilter = (id: string) => setFilter(id);
	const handleSort = (id: string) => setSort(id);
	const [isOpen, setIsOpen] = useState(false);

	const {
		data: upcomingList,
		isLoading: upcomingListLoading,
		refetch: upcomingListRefetch,
	} = useQuery({
		queryKey: [keys.MYBOOKINGS, { search, currentPage, status, filter, sort }],
		queryFn: () => getMyBookings({  query: search, currentPage, status, filter, sort }),
		refetchInterval: false,
		retry: false,
		enabled: value === 0,
	});

	const {
		data: completedList,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: [keys.MYBOOKINGSHISTORY, { search, currentPage, status, filter, sort }],
		queryFn: () => bookingHistory({ type: 'history', query: search, currentPage, status, filter, sort }),
		refetchInterval: false,
		retry: false,
		enabled: value === 1,
	});

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		setSearch('');
		setCurrentPage(1);
		setStatus([]);
		setFilter('0');
		setSort('');
		if (Number(newValue)) refetch();
		else upcomingListRefetch();
	};

	const returnUpcomingVisit = () => {
		let date: any = undefined;
		upcomingList?.list?.forEach((element) => {
			if (date) {
				if (
					dayjs(element?.booking_date, 'YYYY-MM-DD hh:mm a')
						.utc()
						?.isBefore(dayjs(date).utc())
				) {
					date = dayjs(element?.booking_date, 'YYYY-MM-DD hh:mm a').utc();
					setUpcomingBooking(element);
				}
			} else {
				date = dayjs(element?.booking_date, 'YYYY-MM-DD hh:mm a').utc();
				setUpcomingBooking(element);
			}
		});
	};

	useEffect(() => {
		returnUpcomingVisit();
	}, [upcomingList]);

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}
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
	const acceptOrRejectBookings = async () => {
		await changeStatusBooking(upcomingBooking?.id, { status: 'cancel' })
			.then((response) => {
				globalToast('Cancelled Successful', 'success');
				setIsOpen(false);
				upcomingListRefetch();
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			});
	};
	return (
		<>
			<Box pb={8}>
				<Text variant="h4">My Bookings</Text>
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
						{upcomingBooking ? (
							<UpcomingVisitsCard
								title={upcomingBooking?.unit?.name}
								img={upcomingBooking?.unit?.images[0]?.url || neibourhoodcover2}
								dateTime={upcomingBooking?.booking_date}
								location={upcomingBooking?.unit?.city?.name}
								setIsOpen={setIsOpen}
							/>
						) : (
							<EmptyUpcomingVisits />
						)}
					</Box>
				</Box>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab value={0} label="Upcoming" {...a11yProps(0)} />
						<Tab value={1} label="Completed" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					<Table
						headers={HEADERS}
						cellsTypes={CELLS_TYPES}
						data={upcomingList?.list}
						filterValues={FilterValues}
						loading={upcomingListLoading}
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
						lastPage={upcomingList?.paginator?.last_page}
					/>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<Table
						headers={HEADERS}
						cellsTypes={CELLS_TYPES}
						data={completedList?.list}
						filterValues={FilterValues}
						loading={isLoading}
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
						lastPage={completedList?.paginator?.last_page}
					/>
				</CustomTabPanel>
				<ConfirmAction
					handleClose={() => setIsOpen(false)}
					title={'Cancel Booking'}
					body={'Are you sure you want to Cancel this Booking.'}
					isOpen={isOpen}
					isPrimary={false}
					confirmFunc={acceptOrRejectBookings}
				/>
			</Box>
		</>
	);
}

// -------------------HOW TO DESCRIBE THE TABLE AND ITS FUNCTIONALITY---------------------------

const HEADERS = ['Property Name', 'Visit Type', 'Visit Date & Time', 'Status', ''];

const CELLS_TYPES = [
	{
		type: TYPES.STRING, // Type of cell
		dataKey: 'id', // data access key of cell
	},
	{
		type: TYPES.ENUM_STRING,
		dataKey: 'visit_type',
		options: {
			in_person: 'In Person',
		},
	},
	{
		type: TYPES.DATE,
		dataKey: 'booking_date', // need to add 'time'
	},
	{
		type: TYPES.LABEL,
		dataKey: 'booking_status',
		options: {
			// label colors based on value, key is the label text (from data column), value is the colors
			colorPalette: {
				pending: { color: '#8A6A16', bg: '#FCEDC7' },
				cancel: { color: '#FF4242', bg: '#FFE5E5' },
				approved: { bg: 'rgba(0, 142, 165, 0.08)', color: 'rgba(0, 142, 165, 1)' },
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
			appendID: true, // OPTIONAL: pass it in case it's link,
			onClick: () => console.log('clicked'), // pass it in case it's not link,
			sx: { py: 2 },
		},
	},
];

//Filter values for filtering Requests. 1st level is accordion name. 2nd level is key-value for filters.
const FilterValues = {
	Status: [
		{ name: 'Cancel', value: true, id: 'Cancel', status: 'cancel' },
		{ name: 'Pending', value: true, id: 'Pending', status: 'pending' },
		{ name: 'Approved', value: true, id: 'Approved', status: 'approved' },
	],
};
