'use client';
import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: -3.745,
	lng: -38.523,
};

function MapReadOnly({ latLng = center }: Props) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ',
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		// const bounds = new window.google.maps.LatLngBounds(center);
		// map.fitBounds(bounds);
		// setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={latLng} zoom={17} onLoad={onLoad} onUnmount={onUnmount}>
			<Marker
				position={latLng}
				draggable={false} // Set draggable to false to make it view-only
			/>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(MapReadOnly);
