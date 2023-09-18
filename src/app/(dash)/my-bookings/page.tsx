import React from 'react';
import BookingTable from '@/component/my-booking/BookingTable';
import ForSale from '@/component/my-booking/ForSale';
import { Box, Text } from '@/wrappers';
import neibourhoodcover2 from '@/assets/images/Rectangle 45351.png';
import UpcomingVisitsCard from '@/component/cards/UpcomingVisitsCard';

interface Props {}

export default function MyBookings() {
	return (
		<>
			<Box>
				<Text variant="h4" sx={{ padding: '35px 0px 0px 36px' }}>
					My Bookings
				</Text>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '2fr 1fr',
						columnGap: '30px',
						padding: '25px 36px 36px 36px',
					}}>
					<ForSale />
					<div>
						<Text variant="h5" sx={{ mb: '10px' }}>
							Upcoming Visits
						</Text>
						<UpcomingVisitsCard
							title={'Property 1'}
							img={neibourhoodcover2}
							dateTime={'01/01/2023,10:00 AM'}
							location={'Pune'}
						/>
					</div>
				</Box>
				<BookingTable />
			</Box>
		</>
	);
}
