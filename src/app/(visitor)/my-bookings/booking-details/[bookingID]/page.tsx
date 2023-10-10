'use client'

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

import React from 'react';
import { Text } from '@/wrappers';
import Image from 'next/image';
import MapsView from '@/component/Maps/MapsView';
import MapAdress from '@/component/Maps/MapAdress';
import { getMyBooking } from '../../booking-service';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { useParams } from 'next/navigation';
import dayjs from 'dayjs';
import DateTimeModal from '@/component/modals/DateTimeModal';

const photos = [{ src: '@/assets/images/photo1.png', width: 800, height: 600 }];

interface Props {
	id?: string;
	photos?: any;
	propertyName?: string;
	logo?: any;
	location?: string;
	date?: string;
	managedBy?: string;
	rentPrice?: string;
	rentType?: string;
	aboutUnit?: string;
	floorPlansCard?: any;
	area?: string;
	featuresAmenities?: any;
	floorFeatures?: any;
	map?: string;
}
const page = ({
	id,
	logo,
	photos,
	propertyName,
	location,
	date,
	managedBy,
	rentPrice,
	rentType,
	aboutUnit,
	floorPlansCard,
	featuresAmenities,
	floorFeatures,
	map,
}: Props) => {
	const params = useParams()
	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.MYBOOKING],
		queryFn: () =>
		getMyBooking(params?.bookingID),
	});
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
								title={propertyName || 'Property Name'}
								location={location || 'Location'}
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
							<BookingDetailsInfo />
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
								<LocationCard />
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
									component={Link}
									href="/"
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
							<LocationCard />
						</Grid>
					</Grid>
					{/* <DateTimeModal isOpen={true}/> */}
				</Container>
			</>
		</>
	);
};

export default page;
