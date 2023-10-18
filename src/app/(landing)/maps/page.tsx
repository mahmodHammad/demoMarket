'use client';
import { Item } from '@/wrappers';
import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MapContainer from '@/component/Maps/Maps';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getNerabyPlaces } from './maps-service';

export default function page() {
	const [center, setCenter] = useState({ lat: 24.71811100316436, lng: 46.68666506186128 });
	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.NEARBYPOINTERS],
		queryFn: () => getNerabyPlaces({ latitude: center?.lat, longitude: center?.lng, radius: 1 }),
		refetchInterval: false,
		retry: false,
		enabled: center ? true : false,
	});
	return (
		<>
			<Grid container>
				<Item
					sx={{
						position: 'relative',
						height: '80vh',
						width: '100%',
					}}>
					<MapContainer center={center} setCenter={setCenter} markersList={data} />
				</Item>
			</Grid>
		</>
	);
}
