'use client';
import React, { useState } from 'react';
import MapsView from './MapsView';

const GeocodingAPIBase = 'https://maps.googleapis.com/maps/api/geocode/json';
const GoogleMapsLinkBase = 'https://www.google.com/maps/search/?api=1';

// MapContainer will require 2 props: toogle for rendering map and setting location obj at submit.
const MapContainer = ({ setShowMap, handleMapSubmit }) => {
	const [latLng, setLatLng] = useState({ lat: 24.774265, lng: 46.738586 });
	const [SelectedMarker, setSelectedMarker] = useState(null);
	const [showingInfoWindow, setShowingInfoWindow] = useState(true);
	const [address, setAddress] = useState('');
	const [returnObj, setReturnObj] = useState({});

	const handleMapClick = (props, marker, event) => {
		// Handle marker click event here
		setLatLng({
			lat: props?.geometry?.location?.lat() || event.latLng.lat(),
			lng: props?.geometry?.location?.lng() || event.latLng.lng(),
		});
		setShowingInfoWindow(true);
		setSelectedMarker(marker);
	};
	const handleSubmit = () => {
		handleMapSubmit(returnObj);
	};
	const handleInfoWindowClosed = () => {
		setShowingInfoWindow(false);
	};
	return (
		<div className="google-map">
			<MapsView handleSubmit={handleSubmit} address={address} handleMapClick={handleMapClick} latLng={latLng} />
		</div>
	);
};

export default MapContainer;
