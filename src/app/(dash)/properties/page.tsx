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
	},
	{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
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
const Properties = () => {
	return (
		<>
			<Box column p={'35px'} width={'100%'}>
				<Box center width={'100%'} xbetween row>
					<Text variant="h4">Properties List</Text>
					<Box>
						<Button variant="outlined" component={Link} href="/properties">
							Select Multiple
						</Button>
					</Box>
				</Box>

				<Grid container mt={'25px'} spacing={'28px'}>
					{data?.map((d, index) => (
						<Grid item xs={4} key={index}>
							<UnitsCard
								title={d?.title}
								img={d?.img}
								link={d?.link}
								price={d?.price}
								area={d?.area}
								location={d?.location}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Properties;
