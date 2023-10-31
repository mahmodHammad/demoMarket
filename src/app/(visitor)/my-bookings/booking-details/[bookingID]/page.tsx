'use client';

import {
	BookingDetails_timedate,
	BookingDetails_uhitHeader,
	BookingDetailsInfo,
	LocationCard,
	QuiltedImageList,
} from '@/component';
import { Box, Button, Loading } from '@/wrappers';
import { Container, Grid, SvgIcon } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Text } from '@/wrappers';
import { cancelBooking, editBooking, getMyBooking } from '../../booking-service';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { useParams } from 'next/navigation';
import dayjs from 'dayjs';
import DateTimeModal from '@/component/modals/DateTimeModal';
import ConfirmAction from '@/component/modals/ConfirmAction';
import { globalToast } from '@/utils/toast';
import ReturnQrCode from '@/component/ReturnQrCode';
import { generateImgList } from '@/app/(landing)/unitdetails/[unitId]/page';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import xtenant from '@/utils/xtenant';

const page = () => {
	const { push } = useRouter();
	const params = useParams();
	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.MYBOOKING + params?.bookingID],
		queryFn: () => getMyBooking(params?.bookingID),
	});
	const [isOpen, setIsOpen] = useState(false);
	const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
	const [bookingDate, setBookingDate] = useState(null);
	const [index, setIndex] = useState(-1);

	const cancelBookings = async () => {
		await cancelBooking(params?.bookingID)
			.then((response) => {
				globalToast('Booking Cancelled Successful', 'success');
				setCancelConfirmOpen(false);
				push('/my-bookings');
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			});
	};
	const editBookings = async () => {
		if (bookingDate) {
			let payload = {
				day: dayjs(bookingDate, 'MM/DD/YYYY HH:mm:ss').format('L'),
				time: dayjs(bookingDate, 'MM/DD/YYYY HH:mm:ss').format('HH:mm:ss'),
				message: 'Static message',
			};
			await editBooking(params?.bookingID, payload)
				.then((response) => {
					globalToast('Booking Edited Successful', 'success');
					setIsOpen(false);
					refetch();
				})
				.catch((err) => {
					globalToast('Please try later', 'error');
				});
		}
	};
	const images = data?.unit?.images;
	const liteBoxImages = images?.map((img) => {
		return {
			src: img.url,
		};
	});
	const imagesList = generateImgList(data?.unit?.images) || [];
	if (isLoading) {
		return <Loading />;
	} else
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
								<QuiltedImageList
									imagesList={imagesList}
									onClick={(index) => {
										setIndex(index);
									}}
								/>

								{/* unit?.images && unit.images?.url ? unit.images.url : */}
								{index !== -1 ? (
									<Lightbox
										styles={{
											container: { backgroundColor: 'rgba(0, 0, 0, .8)' },
										}}
										plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
										index={index}
										slides={liteBoxImages}
										open={true}
										close={() => setIndex(-1)}
									/>
								) : null}
								<BookingDetails_uhitHeader
									logo={
										<SvgIcon
											sx={{
												height: '52px',
												width: { xs: '75px', md: xtenant.smallLogo?.width || '121px' },
											}}
											inheritViewBox>
											{xtenant?.smallLogo?.url || xtenant?.landingIcon?.url || xtenant.dashboardIcon?.url}
										</SvgIcon>
									}
									title={data?.unit?.name || 'Property Name'}
									location={`${data?.unit?.city?.name || ''} , ${data?.unit?.complex?.name || ''}`}
								/>
								<BookingDetails_timedate
									logo={
										<SvgIcon
											sx={{
												height: '14px',
												width: '35px',
											}}
											inheritViewBox>
											{xtenant.dashboardIcon?.url}
										</SvgIcon>
									}
									title={data?.unit?.name}
									description={data?.unit?.info}
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
										}}>
										<ReturnQrCode
											text={`https://atarmarket.vercel.app/my-bookings/booking-details/${params?.bookingID}`}
										/>
									</Box>
								</Box>
								<Grid item contaier xs={12} md={4} display={{ xs: 'flex', md: 'none' }}>
									<LocationCard location={data?.unit?.map} />
								</Grid>
								{data?.booking_status !== 'cancel' && (
									<Box row gap={'40px'} my="25px">
										<Button
											variant="dangerOutlined"
											onClick={() => setCancelConfirmOpen(true)}
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
								)}
							</Grid>
							<Grid item contaier xs={12} md={4} display={{ xs: 'none', md: 'flex' }}>
								<LocationCard location={data?.unit?.map} hasLayout />
							</Grid>
						</Grid>
						<DateTimeModal
							setDate={setBookingDate}
							date={bookingDate}
							setIsOpen={setIsOpen}
							isOpen={isOpen}
							successFunc={editBookings}
						/>
						<ConfirmAction
							handleClose={() => setCancelConfirmOpen(false)}
							title={'Confirm Cancel Action'}
							body={'Please confirm to cancel this booking.'}
							isOpen={cancelConfirmOpen}
							isPrimary={false}
							confirmFunc={cancelBookings}
						/>
					</Container>
				</>
			</>
		);
};

export default page;
