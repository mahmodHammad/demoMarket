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


	return (
		<HomeCardsContainer
			data={dataArray}
			title="Neighbourhoods"
			body="Explore properties in different neighborhoods and regions"
			link="/neighbourhoods"
			hasneighbourhoods
		/>
	);
}
