'use client';
import React, { useState, useEffect } from 'react';
import HomeCardsContainer from './HomeCardsContainer';
import { get } from '@/utils/http';

function Neighbourhoods() {
	const [dataArray, setDataArray] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = '/complexes';
				const response = await get(url);
				const data = response?.data?.list;
				setDataArray(data);
				setIsLoading(false);
			} catch (error) {
				// Handle errors, e.g., log the error
				console.error('Error fetching data:', error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);
	console.log('isLoadong', isLoading);
	return (
		<HomeCardsContainer
			data={dataArray}
			title="Neighbourhoods"
			body="Explore properties in different neighborhoods and regions"
			link="/neighbourhoods"
			isLoading={isLoading}
			hasneighbourhoods
		/>
	);
	
}

export default Neighbourhoods;
