'use client';

import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { CircularProgress } from '@mui/material';
import './maps.css';

type Props = {};
const MapReadOnly = ({ viewOnly = true, google, latLng }: Props) => {
	const fetchPlaces = (mapProps, map) => {
		// const { google } = mapProps;
		// const service = new google.maps.places.PlacesService(map);
		// console.log("service",service)
		// // ...
	};
	const ReyadCenter = { lat: 24.774265, lng: 46.738586 };
	const initialCenter = viewOnly ? { lat: latLng?.latitude, lng: latLng?.longitude } : ReyadCenter;
	return (
		latLng?.lat &&
		latLng?.lng && (
			<Map
				onReady={fetchPlaces}
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
				google={google}
				center={{ lat: latLng?.lat, lng: latLng?.lng }}
				mapTypeControlOptions={{
					style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
					position: google.maps.ControlPosition.TOP_RIGHT,
				}}
				zoom={14} // Initial zoom level
				initialCenter={ReyadCenter} // Initial map center coordinates
				// onClick={handleMapClick}
			>
				<Marker
					lat={latLng?.lat}
					lng={latLng?.lng}
					position={{ lat: latLng?.lat, lng: latLng?.lng }}
					draggable={true}></Marker>
			</Map>
		)
	);
};
const LoadingContainer = (props) => (
	<div
		style={{
			height: '50vh',
			width: '100%',
			alignContent: 'center',
			display: 'flex',
			justifyContent: 'center',
			top: '50%',
			alignItems: 'center',
		}}>
		<CircularProgress />
	</div>
);

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ',
	LoadingContainer: LoadingContainer,
})(MapReadOnly);
