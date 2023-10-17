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
	return (
		<HomeCardsContainer
			data={data}
			title="Most Viewed Properties"
			body="Discover our most viewed exclusive selection in properties  "
			link="/listingpage?sort=5"
		/>
	);
}
