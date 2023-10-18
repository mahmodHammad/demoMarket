import React from 'react';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import HomeCardsContainer from './HomeCardsContainer';
import { get } from '@/utils/http';

export default async function MostViewed() {
	const url = '/properties/most-view';
	const response = await get(url);
	const dataArray = response?.data?.list; // Get the array of objects
	const slicedDataArray = dataArray;
	 
	return (
		<HomeCardsContainer
			data={slicedDataArray}
			title="Most Viewed Properties"
			body="Discover our most viewed Properties"
			link="/listingpage?sort=5"
		/>
	);
}
