import { BookingDetails, Hero, Neighbourhoods } from '@/component';
import MostViewed from '@/component/pages/homepage/MostViewed';
import RecentlyAdded from '@/component/pages/homepage/RecentlyAdded';
import { Box } from '@/wrappers';
import { Container } from '@mui/material';
import MyBookings from '../(dash)/my-bookings/page';

export default function Home() {
  return (
    <Box>
      {/* Logged In component */}
      {/* <BookingDetails /> */}
      <MyBookings/>
      {/* <MyBookings/> */}
      {/* <MyPayments/> */}

      {/* Logged out component */}
      {/* <Hero />
      <Hero />
      <Container maxWidth="xl" sx={{ pb: { xs: '90px', md: '164px' } }}>
        <Neighbourhoods />
        <RecentlyAdded />
        <MostViewed />
      </Container> */}
    </Box>
  );
}
