'use client';

import { Box, Button, Text } from '@/wrappers';
import { Grid, Pagination } from '@mui/material';
import React, { useState } from 'react';
import UnitsCard from '../cards/UnitsCard';
import SearchBox from './SearchBox';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { Filter } from '@/assets';

const DATA = [
	{
		id: 1,
		liked: false,
		title: 'Al-Arid District',
		img: neibourhoodcover2,
		link: '/',
		price: 'SAR 60,000',
		area: '120 sqm',
		location: 'Riyadh',
	},
	{ id: 2, liked: false, title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
	{ id: 3, liked: false, title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ id: 4, liked: false, title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ id: 5, liked: false, title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
	{ id: 6, liked: false, title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ id: 7, liked: false, title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
	{ id: 8, liked: false, title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
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

type Props = {
	isMobileView?: boolean;
	openFilterOnMobileView?: () => void;
	data: any;
	isLoading: boolean;
};

const listingBody = ({ isMobileView, openFilterOnMobileView, data, isLoading }: Props) => {
	// TODO: handle loading
	if (isLoading) return <Text>Loading...</Text>;
	return (
		<Box column fullWidth>
			<Text variant="h4">Properties in Saudi Arabia</Text>
			<SearchBox />
			{isMobileView && (
				<Box fullWidth row xbetween ycenter mt={'30px'}>
					<Text>Total Properties: {data?.data?.length}</Text>
					<Button
						startIcon={<Filter />}
						sx={{ py: 0.5, px: 1.7, alignItems: 'center' }}
						grayBorder
						variant="outlined"
						onClick={openFilterOnMobileView}>
						Filter
					</Button>
				</Box>
			)}
			// TODO: map data to UI card
			<Grid container mt={isMobileView ? '0px' : '47px'} spacing={'28px'}>
				{data?.data?.map((d, index) => (
					<Grid item xs={12} md={6} key={index}>
						<UnitsCard
							id={d?.id}
							title={d?.name}
							img={neibourhoodcover2}
							// link={d?.link}
							price={d?.price}
							area={d?.maps?.districtName}
							location={d?.maps?.formattedAddress}
							liked={d?.liked}
							toggleLike={(id) => {
								// TODO: handle like and dispatch post req
								// setData((prev) => prev.map((d: any) => (d.id === id ? { ...d, liked: !d.liked } : d)))
							}}
						/>
					</Grid>
				))}
			</Grid>
			{/* // TODO: integrate pagination */}
			<Pagination count={10} color="primary" sx={{ mt: 5, alignSelf: 'center' }} />
		</Box>
	);
};

export default listingBody;
