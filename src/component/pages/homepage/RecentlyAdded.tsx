import { Box, Container, Item } from '@/wrappers';
import React from 'react';
import HomeTitleBody from './HomeTitleBody';
import NeighbourhoodCard from '@/component/cards/NeighbourhoodCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import HomeCardsContainer from './HomeCardsContainer';
import { get } from '@/utils/http';

export default async function RecentlyAdded() {
	const url = '/properties';
	const response = await get(url);
	const dataArray = response.data.data; // Get the array of objects
	dataArray.forEach((item, index) => {
		const name = item.name;
		const location = item.data.city_id && item.data.city_id.name;
		const area = item.data.unit_size;
	});
	const slicedDataArray = dataArray;

	const data = slicedDataArray.map((item) => {
		return {
			title: item?.name || '--',
			location: (item?.data?.city_id && item?.data?.city_id?.name) || '--',
			img: neigbourhoodCover,
			area: item?.data?.unit_size || '--',
			price: '--',
			link: '/',
		};
	});

	return <HomeCardsContainer data={data} title="Recently Added" body="Discover our exclusive selection " link="/" />;
}
