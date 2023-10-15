'use client';

import React from 'react';
import { get } from '@/utils/http';
import { Grid } from '@mui/material';
import UnitsCard from '../cards/UnitsCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';

export default async function AdminPropertiesList() {
	const url = '/properties/most-view';
	const response = await get(url);
	const dataArray = response?.data?.list; // Get the array of objects

	const slicedDataArray = dataArray;
	const data = slicedDataArray?.map((item) => {
		return {
			title: item?.name || '--',
			location: (item?.data?.city_id && item?.data?.city_id?.name) || '--',
			img: neigbourhoodCover,
			area: item?.data?.unit_size || '--',
			price: '--',
			link: '/',
		};
	});
	return (
		<>
			{data?.map((d, index) => (
				<Grid item xs={4} key={index}>
					<UnitsCard
						title={d?.title || '--'}
						img={d?.img}
						// link={d?.link}
						price={d?.price || '--'}
						area={d?.area || '--'}
						location={d?.location || '--'}
						buttonName="add"
						// onClick={handleClickOpen}
					/>
				</Grid>
			))}
		</>
	);
}
