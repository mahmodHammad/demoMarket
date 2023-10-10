'use client';
import { Box, Container, Item } from '@/wrappers';
import React from 'react';

import HomeTitleBody from './HomeTitleBody';
import NeighbourhoodCard from '@/component/cards/NeighbourhoodCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import Carousel from '@/component/Carousel';
import HomeCardsContainer from './HomeCardsContainer';
import { get } from '@/utils/http';

export default function Neighbourhoods() {
	async function fetchData() {
		try {
			const url = '/complexes'; // Replace with your API endpoint
			const response = await get(url);
			console.log('Data from server:', response);
		} catch (error) {
			console.log('error');
			console.error('Error fetching data:', error);
		}
	}

	const dd = fetchData();
	console.log(dd);

	// async function fetchData() {
	// 	try {
	// 		const url = '/complexes'; // Replace with your API endpoint
	// 		const response = await fetch(url); // Use fetch to make the HTTP request
	// 		const data = await response.json(); // Parse the response JSON
	// 		console.log('Data from server:', data);
	// 		return data; // Return the data
	// 	} catch (error) {
	// 		console.error('Error fetching data:', error);
	// 		throw error; // Rethrow the error if needed
	// 	}
	// }

	// async function main() {
	// 	try {
	// 		const dd = await fetchData(); // Wait for fetchData to complete
	// 		console.log(dd);
	// 	} catch (error) {
	// 		console.log('Error in main:', error);
	// 	}
	// }

	// main(); //

	const data = [
		{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
		{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
		{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
		{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
		{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
		{ title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
		{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
		{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	];
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
