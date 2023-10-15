import React from 'react';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import HomeCardsContainer from './HomeCardsContainer';
import { get } from '@/utils/http';

export default async function MostViewed() {
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
			price: item?.data?.price || '--',
			link: '/',
		};
	});
	return (
		<HomeCardsContainer
			data={data}
			title="Most Viewed Properties"
			body="Discover our most viewed exclusive selection in properties  "
			link="/"
		/>
	);
}
