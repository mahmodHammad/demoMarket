'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import UnitsCard from '../cards/UnitsCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import ReactDOM from 'react-dom';

const containerStyle = {
	width: '100%',
	height: '100%',
};

interface Props {
	center: {};
	setCenter: any;
	markersList: [];
}
function MyComponent({ center, setCenter, markersList }: Props) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ',
	});
	const [isMapLoaded, setIsMapLoaded] = useState(false);

	useEffect(() => {
		// Check if the google.maps library is available
		if (window.google && window.google.maps) {
			setIsMapLoaded(true);
		}
	}, []);
	const [map, setMap] = useState(null);
	const [currentMarker, setCurrentMarker] = useState(0);
	const [infoWindowPosition, setInfoWindowPosition] = useState(null);

	const onLoad = useCallback(function callback(map) {
		// const bounds = new window.google.maps.LatLngBounds(center);
		// map.fitBounds(bounds);
		// setMap(map);
	}, []);
	const customMarkerIcon = {
		url: neigbourhoodCover, // Replace with the path to your custom marker image
		// scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
	};
	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);
	const infoWindowOffset = {
		lat: 0.00020, // Latitude offset to move it above the marker
		lng: 0, // Keep the longitude unchanged
	};
	// const handleDrag = (map) => {
	// 	console.log(map, 'shreyas');

	// 	// setMapCenter(map.getCenter().toJSON());
	// };

	// function handleZoomChanged(map) {
	// 	// setZoom(map.getZoom());
	// 	console.log(map, 'shreyas');
	// }
	return (
		<LoadScript googleMapsApiKey="AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ">
			{isMapLoaded ? (
				<GoogleMap
					// onZoomChanged={ handleZoomChanged}
					// onDragEnd={ handleDrag}
					mapContainerStyle={containerStyle}
					center={center}
					zoom={14}
					options={{
						// gestureHandling:'greedy',
						zoomControlOptions: { position: 9 },
						streetViewControl: false,
						fullscreenControl: false,
					}}
					onLoad={onLoad}
					onUnmount={onUnmount}>
					{markersList?.map(
						(item, index) =>
							item?.map && (
								<Marker
									key={index}
									position={{
										lat: item?.map?.latitude,
										lng: item?.map?.longitude,
										// lat: center?.lat + infoWindowOffset.lat,
										// lng: center?.lng + infoWindowOffset.lng,
									}}
									icon={{
										// path: google.maps.SymbolPath.CIRCLE,
										// url: (require('@/assets/images/neigbourhoodCover.png')),
										url: `${
											infoWindowPosition?.id === item?.id
												? 'http://193.122.88.9/static/activemap.svg'
												: 'http://193.122.88.9/static/notactivemap.svg'
										}`,
										scaledSize: new window.google.maps.Size(25, 25),
									}}
									// icon={customMarkerIcon}
									onClick={() => setInfoWindowPosition(item)}
									draggable={false} // Set draggable to false to make it view-only
								/>
							),
					)}
					{infoWindowPosition && (
						<InfoWindow
							position={{
								lat: infoWindowPosition?.map?.latitude + infoWindowOffset.lat,
								lng: infoWindowPosition?.map?.longitude + infoWindowOffset.lng,
							}}
							pixelOffset={new window.google.maps.Size(0, -50)}
							onCloseClick={() => setInfoWindowPosition(null)}>
							<UnitsCard
								imgHeight="180px"
								height="400px"
								width="250px"
								title={infoWindowPosition?.name}
								img={infoWindowPosition?.images?.length ? infoWindowPosition?.images[0]?.url : neigbourhoodCover}
								id={infoWindowPosition?.id}
								price={infoWindowPosition?.price}
								area={infoWindowPosition?.unit_size}
								location={infoWindowPosition?.city?.name}
							/>
						</InfoWindow>
					)}
				</GoogleMap>
			) : (
				<></>
			)}
		</LoadScript>
	);
}
export default React.memo(MyComponent);
