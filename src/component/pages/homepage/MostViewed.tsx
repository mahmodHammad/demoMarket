'use client';
import React from 'react';
import HomeCardsContainer from './HomeCardsContainer';
import { GET } from '@/utils/http';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { keys } from '@/utils/keys';
import { useAuth } from '@/contexts/AuthContext';

const getMostViewed = () => GET(`/properties/most-view`);

export default function MostViewed() {
	const { isAuthed, openLoginModal } = useAuth();
	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: [keys.MOSTVIEWED],
		queryFn: getMostViewed,
	});

	const handleToggleLike = (id: any) => {
		if (!isAuthed) {
			openLoginModal();
			return;
		}
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
			isLoading={isLoading}
		/>
	);
}
