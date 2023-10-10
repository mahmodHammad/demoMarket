import { Hero, Neighbourhoods } from '@/component';
import MostViewed from '@/component/pages/homepage/MostViewed';
import RecentlyAdded from '@/component/pages/homepage/RecentlyAdded';
import { Box } from '@/wrappers';
import { Container } from '@mui/material';

export default async function Home() {
	return (
		<Box>
			<Hero />
			<Container maxWidth="xl" sx={{ pb: { xs: '90px', md: '164px' } }}>
				<Neighbourhoods />
				<RecentlyAdded />
				<MostViewed />
			</Container>
		</Box>
	);
}
