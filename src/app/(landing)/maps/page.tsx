'use client';
import { Item } from '@/wrappers';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import MapContainer from '@/component/Maps/Maps';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getNerabyPlaces } from './maps-service';

export default function page() {
	const [center, setCenter] = useState({ lat: 24.71811100316436, lng: 46.68666506186128 });
	const [radius, setRadius] = useState(5);
	const [markersList, setMarkersList] = useState([]);
	useQuery({
		queryKey: [keys.NEARBYPOINTERS, { center, radius }],
		queryFn: () =>
			getNerabyPlaces({ latitude: center?.lat, longitude: center?.lng, radius: radius || 5 }).then((response) => {
				setMarkersList(response);
				return response;
			}),
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
					<MapContainer center={center} setCenter={setCenter} setRadius={setRadius} markersList={markersList} />
				</Item>
			</Grid>
		</>
	);
}
