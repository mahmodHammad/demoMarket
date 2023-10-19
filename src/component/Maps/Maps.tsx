'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import UnitsCard from '../cards/UnitsCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import { Loading } from '@/wrappers';

const containerStyle = {
	width: '100%',
	height: '100%',
};

function debounce(func: { (nextValue: any): void; apply?: any }, timeout = 300) {
	let timer: string | number | NodeJS.Timeout | undefined;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
interface Props {
	center: {};
	setCenter: any;
	markersList: [];
	setRadius: any;
}

const infoWindowOffset = {
	lat: 0.00022, // Latitude offset to move it above the marker
	lng: 0, // Keep the longitude unchanged
};

function MyComponent({ center, setCenter, markersList, setRadius, inLandingPage }: Props) {
	let mapRef = null;
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ',
	});
	const [isMapLoaded, setIsMapLoaded] = useState(false);

	useEffect(() => {
		if (window.google && window.google.maps) {
			setIsMapLoaded(true);
		}
	}, []);

	const [infoWindowPosition, setInfoWindowPosition] = useState(null);

	const calculateViewportRadius = debounce(() => {
		if (mapRef) {
			const bounds = mapRef?.getBounds();
			if (bounds) {
				const sw = bounds?.getSouthWest()?.toJSON();
				const center = bounds?.getCenter()?.toJSON();
				const ne = bounds?.getNorthEast()?.toJSON();
				const newRadius = window?.google?.maps?.geometry?.spherical?.computeDistanceBetween(sw, ne);
				const radiusInKilometers = newRadius / 1000;
				setRadius(Math.ceil(radiusInKilometers));
				setCenter(center);
			}
		}
	}, 1000);

	const onLoad = useCallback(function callback(map) {
		mapRef = map;
		// keep this commented. this keeps on calling function as bounds changes internally.
		// window.google.maps.event.addListener(mapRef, 'bounds_changed', () => {
		// 	calculateViewportRadius();
		// });
		mapRef?.addListener('zoom_changed', calculateViewportRadius);
		mapRef?.addListener('dragend', calculateViewportRadius);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		if (mapRef?.removeListener) {
			// window.google.maps.event.removeListener(mapRef, 'bounds_changed');
			mapRef?.removeListener('zoom_changed', calculateViewportRadius);
			mapRef?.removeListener('dragend', calculateViewportRadius);
		}
	}, []);

	return (
		<LoadScript googleMapsApiKey="AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ" loadingElement={<Loading />}>
			{isMapLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					defa
					center={center}
					zoom={14}
					options={{
						gestureHandling: inLandingPage ? null : 'greedy',
						zoomControlOptions: { position: 9 },
						streetViewControl: false,
						fullscreenControl: false,
					}}
					onLoad={onLoad}
					onUnmount={onUnmount}>
					{typeof markersList === 'object' &&
						markersList?.length &&
						markersList?.map(
							(item, index) =>
								item?.map && (
									<Marker
										key={index}
										position={{
											lat: item?.map?.latitude,
											lng: item?.map?.longitude,
										}}
										icon={{
											url: `${
												infoWindowPosition?.id === item?.id
													? 'http://193.122.88.9/static/activemap.svg'
													: 'http://193.122.88.9/static/notactivemap.svg'
											}`,
											scaledSize: new window.google.maps.Size(25, 25),
										}}
										onClick={() => setInfoWindowPosition(item)}
										draggable={false} // Set draggable to false to make it view-only
									/>
								),
						)}
					{infoWindowPosition && (
						<InfoWindow
							position={{
								lat: infoWindowPosition?.map?.latitude,
								lng: infoWindowPosition?.map?.longitude,
							}}
							options={{
								pixelOffset: new window.google.maps.Size(0, -20),
							}}
							onCloseClick={() => setInfoWindowPosition(null)}>
							<UnitsCard
								imgHeight="180px"
								height="400px"
								width="250px"
								data={infoWindowPosition}
								// title={infoWindowPosition?.name}
								// img={infoWindowPosition?.images?.length ? infoWindowPosition?.images[0]?.url : neigbourhoodCover}
								// id={infoWindowPosition?.id}
								// price={infoWindowPosition?.price}
								// area={infoWindowPosition?.unit_size}
								// location={infoWindowPosition?.city?.name}
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
