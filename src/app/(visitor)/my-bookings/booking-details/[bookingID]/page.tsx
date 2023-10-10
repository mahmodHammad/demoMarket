'use client';

import { AtarColoredLogo } from '@/assets';
import {
	BookingDetails_timedate,
	BookingDetails_uhitHeader,
	BookingDetailsInfo,
	LocationCard,
	QuiltedImageList,
} from '@/component';
import { Box, Button } from '@/wrappers';
import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import QR from '@/assets/images/QR.png';
import React, { useState } from 'react';
import { Text } from '@/wrappers';
import Image from 'next/image';
import { editBooking, getMyBooking } from '../../booking-service';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { useParams } from 'next/navigation';
import dayjs from 'dayjs';
import DateTimeModal from '@/component/modals/DateTimeModal';

const page = () => {
	const params = useParams();
	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.MYBOOKING],
		queryFn: () => getMyBooking(params?.bookingID),
	});
	const [isOpen, setIsOpen] = useState(false);
	const [bookingDate, setBookingDate] = useState(null);

	const editBookings = async () => {
		if (bookingDate) {
			let payload = {
				day: dayjs(bookingDate).format('L'),
				time: dayjs(bookingDate).format('h:mm:ss'),
				message: 'Static message',
			};
			await editBooking(params?.bookingID, payload);
		}
	};
	return (
		<>
			<>
				<Container maxWidth="xl" sx={{ mt: '20px' }}>
					{/* <Box sx={{ mt: "30px" }}>
          <Button
            component={Link}
            href="/"
            size="large"
            sx={{
              color: "#CACACA",
            }}
          >
            Back
          </Button>
        </Box> */}
					<Text variant="h4">Booking Details</Text>
					<Grid container spacing={3} mb={1}>
						<Grid item xs={12} md={8} height={'100hv'}>
							<QuiltedImageList />
							<BookingDetails_uhitHeader
								logo={
									<AtarColoredLogo
										sx={{
											height: '52px',
											width: { xs: '75px', md: '121px' },
										}}
									/>
								}
								title={data?.unit?.name || 'Property Name'}
								location={data?.unit?.locationable?.name_en || 'Location'}
							/>
							<BookingDetails_timedate
								logo={
									<AtarColoredLogo
										sx={{
											height: '14px',
											width: '35px',
										}}
									/>
								}
								title={''}
								date={dayjs(data?.booking_date).format('llll')}
							/>
							<BookingDetailsInfo data={data} />
							<Box column mt={'24px'}>
								<Text variant="h5">QR Code</Text>
								<Text variant="body1">Scan QR Code to get booking details</Text>
								<Box
									mt={'16px'}
									sx={{
										width: '200px',
										height: '200px',
										objectFit: 'cover',
									}}
									component={Image}
									src={QR}
								/>
							</Box>
							<Grid item contaier xs={12} md={4} display={{ xs: 'flex', md: 'none' }}>
								<LocationCard data={data} />
							</Grid>
							<Box row gap={'40px'} my="25px">
								<Button
									variant="dangerOutlined"
									component={Link}
									href="/"
									sx={{
										mt: '24px',
										height: '52px',
										padding: '12px 24px',
										width: '255px',
										borderRadius: '8px',
									}}>
									Cancel Booking
								</Button>
								<Button
									variant="contained"
									onClick={() => setIsOpen(true)}
									sx={{
										mt: '24px',
										height: '52px',
										padding: '12px 24px',
										width: '255px',
										borderRadius: '8px',
									}}>
									Edit Booking
								</Button>
							</Box>
						</Grid>
						<Grid item contaier xs={12} md={4} display={{ xs: 'none', md: 'flex' }}>
							<LocationCard data={data} />
						</Grid>
					</Grid>
					<DateTimeModal
						setDate={setBookingDate}
						date={bookingDate}
						setIsOpen={setIsOpen}
						isOpen={isOpen}
						successFunc={editBookings}
					/>
				</Container>
			</>
		</>
	);
};

export default page;
