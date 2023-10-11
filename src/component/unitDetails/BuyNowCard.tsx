'use client';

import React, { useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import Link from 'next/link';
import { Divider } from '@mui/material';
import { BuyNowIcon } from '@/assets';
import DateTimeModal from '../modals/DateTimeModal';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { createBooking } from '@/app/(visitor)/my-bookings/booking-service';

interface proptypes {
	price: string;
	PriceType: string;
}

export default function BuyNowCard({ price, PriceType }: proptypes) {
	const [bookingDateOpen, setBookingDateOpen] = useState(false);
	const [bookingDate, setBookingDate] = useState(null);
	const bookVisit = async () => {
		if (bookingDate) {
			let payload = {
				day: dayjs(bookingDate).format('L'),
				time: dayjs(bookingDate).format('HH:mm:ss'),
				message: 'Static message',
			};
			await createBooking(payload)
				.then((response) => {
					toast('Booking Edited Successful', {
						hideProgressBar: true,
						autoClose: 2000,
						type: 'success',
						position: 'top-right',
					});
					setBookingDateOpen(false);
				})
				.catch((err) => {
					toast('Please try later', {
						hideProgressBar: true,
						autoClose: 2000,
						type: 'error',
						position: 'top-right',
					});
				});
		}
	};
	return (
		<Box
			column
			sx={{
				p: '24px',
				width: '100%',
				height: { xs: '350px', md: '360px' },
				borderRadius: '8px',
				border: 'solid',
				borderWidth: '0px, 0px, 0px, 0px',
				borderStyle: 'solid',
				borderColor: 'rgba(227, 227, 227, 1)',
			}}>
			<Text variant="caption">Rent price</Text>
			<Text variant="h5">
				{price}
				<Text variant="caption" display={'inline'}>
					/{PriceType}
				</Text>
			</Text>

			<Button
				variant="contained"
				component={Link}
				href="/"
				sx={{ mt: '24px', height: '52px', width: '100%' }}
				startIcon={<BuyNowIcon />}>
				Buy Now
			</Button>
			<Divider sx={{ mt: '24px' }}></Divider>
			<Text bold s={18} sx={{ mt: '24px' }}>
				Request home tour
			</Text>

			<Button
				variant="outlined"
				onClick={() => setBookingDateOpen(true)}
				sx={{
					mt: '24px',
					height: '52px',
					width: '100%',
					borderRadius: '8px',
				}}>
				Book a Visit
			</Button>

			<Text mt={'24px'} gray s={14}>
				It's free, with no obligation - cancel anytime.
			</Text>
			<DateTimeModal
				setDate={setBookingDate}
				date={bookingDate}
				setIsOpen={setBookingDateOpen}
				isOpen={bookingDateOpen}
				successFunc={bookVisit}
			/>
		</Box>
	);
}
