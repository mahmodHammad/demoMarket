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
	console.log("response",response?.data?.list)
	const dataArray = response?.data?.list; // Get the array of objects

  
	return <HomeCardsContainer data={dataArray} title="Recently Added" body="Check out our latest Properties " 
	link="/listingpage?sort=3"
	
	/>;
}
