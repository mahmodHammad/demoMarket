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
	const dataArray = response?.data?.list; // Get the array of objects

	const slicedDataArray = dataArray;

	const data = slicedDataArray?.map((item) => {
		const renderLocation = [item?.city?.name, item?.district?.name];
		const newlocation = item?.city ? renderLocation?.join(', ') : '';

		return {
			title: item?.name || '--',
			location: newlocation || '--',
			img: item?.images && item.images[0]?.url ? item.images[0].url : neigbourhoodCover,
			area: item?.unit_size || '--',
			price: item?.price || '--',
			link: '/',
		};
	});

	return <HomeCardsContainer data={data} title="Recently Added" body="Discover our exclusive selection " link="/" />;
}
