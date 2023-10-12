import { Box, Container, Item } from '@/wrappers';
import React from 'react';

import HomeTitleBody from './HomeTitleBody';
import NeighbourhoodCard from '@/component/cards/NeighbourhoodCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import Carousel from '@/component/Carousel';
import HomeCardsContainer from './HomeCardsContainer';
import { get } from '@/utils/http';

export default async function Neighbourhoods() {
	const url = '/complexes';
	const response = await get(url);
	// console.log('Data from server:', response); // check data at terminal
	const dataArray = response?.data?.list; // Get the array of objects

	const slicedDataArray = dataArray?.slice(0, 6);
	const data = slicedDataArray?.map((item) => {
		return { title: item?.name, img: neigbourhoodCover, link: '/' };
	});

	return (
		<HomeCardsContainer
			data={data}
			title="Neighbourhoods"
			body="There is something everyday"
			link="/neighbourhoods"
			hasneighbourhoods
		/>
	);
}
