import { BookingDetails, Hero, Neighbourhoods } from '@/component';
import MostViewed from '@/component/pages/homepage/MostViewed';
import RecentlyAdded from '@/component/pages/homepage/RecentlyAdded';
import { Box, Container } from '@/wrappers';

export default function Home() {
  return (
    <Box>
      {/* Logged In component */}
      <BookingDetails />
      {/* <MyBookings/> */}

      {/* Logged out component */}
      <Hero />
      <Container maxWidth="xl" sx={{ pb: { xs: '90px', md: '164px' } }}>
        <Neighbourhoods />
        <RecentlyAdded />
        <MostViewed />
      </Container>
    </Box>
  );
}
