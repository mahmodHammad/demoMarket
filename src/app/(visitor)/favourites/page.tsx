import { Box, Button, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import React from 'react';
import Link from 'next/link';

import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { UnitsCard } from '@/component';
import { Delete } from '@/assets';

const data = [
	{
		title: 'Al-Arid District',
		img: neibourhoodcover2,
		link: '/',
		price: 'SAR 60,000',
		area: '120 sqm',
		location: 'Riyadh',
		liked: true,
	},
	{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/', liked: true },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/', liked: true },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/', liked: true },
	{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/', liked: true },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/', liked: true },
	{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/', liked: true },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/', liked: true },
];

// interface proptypes {
//   data: [
//     {
//       title: string;
//       img: string;
//       link: string;
//       price: string;
//       area: string;
//       location: string;
//     }
//   ];
// }
// const listingBodey = ({ data }: proptypes) => {
const favourites = () => {
	return (
		<>
			<Box column p={'35px'} width={'100%'}>
				<Box center width={'100%'} xbetween row>
					<Text variant="h4">Favourites</Text>
					<Box>
						<Button
							startIcon={<Delete />}
							variant="dangerOutlined"
							component={Link}
							color="warning"
							href="/favourites"
							sx={{
								height: '40px',
								padding: '10px 20px',

								borderRadius: '9px',
							}}>
							Remove All
						</Button>
					</Box>
				</Box>

				<Grid container mt={'25px'} spacing={'28px'}>
					{data?.map((d, index) => (
						<Grid item xs={4} key={index}>
							<UnitsCard
								title={d?.title}
								img={d?.img}
								// link={d?.link}
								price={d?.price}
								area={d?.area}
								location={d?.location}
								liked={d?.liked}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default favourites;
