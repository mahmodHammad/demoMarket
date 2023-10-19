'use client';
import React from 'react';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import HomeCardsContainer from './HomeCardsContainer';
import { GET, get } from '@/utils/http';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';

import { toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { keys } from '@/utils/keys';

const getMostViewed = (payload: any = {}) => {
	return GET(`/properties/most-view`);
};

export default function MostViewed() {
	// const url = '/properties/most-view';
	// const response = await get(url);
	// const dataArray = response?.data?.list; // Get the array of objects
	const queryClient = useQueryClient();

	const { data, isLoading: filtersLoading } = useQuery({
		queryKey: [keys.MOSTVIEWED],
		queryFn: getMostViewed,
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
			data={data?.list}
			title="Most Viewed Properties"
			body="Discover our most viewed Properties"
			link="/listingpage?sort=5"
			handleToggleLike={handleToggleLike}
		/>
	);
}
