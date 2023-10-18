'use client';
import { Box, Container, Item } from '@/wrappers';
import React from 'react';
import HomeTitleBody from './HomeTitleBody';
import NeighbourhoodCard from '@/component/cards/NeighbourhoodCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import HomeCardsContainer from './HomeCardsContainer';
import { GET, get } from '@/utils/http';
import { toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { keys } from '@/utils/keys';

const getRecentlyAdded = (payload: any = {}) => {
	return GET(`/properties`);
};

export default function RecentlyAdded() {
	// const url = '/properties';
	// const response = await get(url);
	// console.log("response",response?.data?.list)
	// const dataArray = response?.data?.list; // Get the array of objects
	const queryClient = useQueryClient();
	const { data, isLoading: filtersLoading } = useQuery({
		queryKey: [keys.RECENTLYADDED],
		queryFn: getRecentlyAdded,
	});
	const handleToggleLike = (id) => {
		toggleLike({
			property_id: id,
		});
		queryClient.invalidateQueries({ queryKey: [keys.FAV] });
		queryClient.invalidateQueries({ queryKey: [keys.MOSTVIEWED] });
		queryClient.invalidateQueries({ queryKey: [keys.RECENTLYADDED] });
	};

	return (
		<HomeCardsContainer
			handleToggleLike={handleToggleLike}
			data={data?.list}
			title="Recently Added"
			body="Check out our latest Properties "
			link="/listingpage?sort=3"
		/>
	);
}
