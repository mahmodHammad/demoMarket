'use client';
import React from 'react';
import HomeCardsContainer from './HomeCardsContainer';
import { GET } from '@/utils/http';
import { toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { useAuth } from '@/contexts/AuthContext';

const getRecentlyAdded = () => GET(`/properties`);

export default function RecentlyAdded() {
	const { isAuthed, openLoginModal } = useAuth();
	const queryClient = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: [keys.RECENTLYADDED],
		queryFn: getRecentlyAdded,
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
			handleToggleLike={handleToggleLike}
			data={data?.list}
			title="Recently Added"
			body="Check out our latest Properties "
			link="/listingpage?sort=3"
			isLoading={isLoading}
		/>
	);
}
