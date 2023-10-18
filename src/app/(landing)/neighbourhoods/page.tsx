import Link from 'next/link';
import { Box, Button, Container, Container as GridContainer, Item, Text } from '@/wrappers';
import { NeighbourhoodCard } from '@/component';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { get } from '@/utils/http';

export default async function Home() {
	const url = '/complexes';
	const response = await get(url);
	const dataArray = response?.data?.list; // Get the array of objects

	return (
		<Box xcenter p={2} sx={{minHeight:"75vh"}}>
			<Container maxWidth="xl" column xstart>
				<Box sx={{ mt: '30px' }}></Box>
				<Box xbetween sx={{ mt: '25px' }}>
					<Text variant="h3">
						Neighbourhoods
						<Text variant="body" component="span" sx={{ display: 'inline' }}>
							({dataArray?.length})
						</Text>
					</Text>
				</Box>
				<GridContainer
					xstart
					spacing={{ xs: 2, md: 4 }}
					sx={{
						pb: { xs: '90px', md: '164px' },
						mt: { md: '53px', xs: '22px' },
						px: { md: '0px', xs: '12px' },
					}}>
					{dataArray?.map((d, index) => (
						<Item md={4} xs={6} key={index}>
							<NeighbourhoodCard data={d} />
						</Item>
					))}
				</GridContainer>
			</Container>
		</Box>
	);
}
