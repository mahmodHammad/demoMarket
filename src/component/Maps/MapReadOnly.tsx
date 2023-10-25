'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, Marker } from '@react-google-maps/api';
import { Loading } from '@/wrappers';

const containerStyle = {
	width: '100%',
	height: '100%',
};

function MapReadOnly({ latLng }: any) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ',
		libraries: ['places', 'geometry'],
	});
	return isLoaded && latLng?.lat ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			options={{ draggable: false }}
			center={{ lat: latLng?.lat, lng: latLng?.lng }}
			zoom={17}>
			<MarkerF
				position={{ lat: latLng?.lat, lng: latLng?.lng }}
				icon={{
					url: 'https://marketplace.goatar.com/static/activemap.svg',
					scaledSize: new window.google.maps.Size(40, 40),
				}}
				draggable={false} // Set draggable to false to make it view-only
			/>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(MapReadOnly);
