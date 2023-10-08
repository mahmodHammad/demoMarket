import { Hero, Neighbourhoods } from '@/component';
import MostViewed from '@/component/pages/homepage/MostViewed';
import RecentlyAdded from '@/component/pages/homepage/RecentlyAdded';
import { Box } from '@/wrappers';
import { Container } from '@mui/material';

export default async function Home() {

	const res = await fetch('http://193.122.88.9/api/property',{
		headers: { "X-Tenant":"nagyTest" },
	})
	const jsonss = await res.json()
	console.log("res*******jsononn",res)
	console.log("resjsononn",jsonss)

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

