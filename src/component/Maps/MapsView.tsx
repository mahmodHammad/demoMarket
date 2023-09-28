'use client';

import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { CircularProgress } from '@mui/material';
import ReactDOM from 'react-dom';
import UnitsCard from '../cards/UnitsCard';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import './maps.css';

type Props = {};
const MapsView = ({
	viewOnly = true,
	google,
	mapData,
	latLng,
	handleSubmit,
	// handleMarkerClick = () => { },
	handleMapClick = () => {},
	address,
}: Props) => {
	const fetchPlaces = (mapProps, map) => {
		// const { google } = mapProps;
		// const service = new google.maps.places.PlacesService(map);
		// console.log("service",service)
		// // ...
	};
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedMarker, setSelectedMarker] = useState({ lat: 24.774265, lng: 46.738586 });
	const [markers, setMarkers] = useState([
		{ lat: 24.774265, lng: 46.738586, isSelected: true },
		{ lat: 24.776135337799865, lng: 46.76248846413293, isSelected: false },
		{ lat: 24.783772258002134, lng: 46.702664474264765, isSelected: false },
		{ lat: 24.757430691966952, lng: 46.739916375671385, isSelected: false },
	]);
	const handleMarkerClick = (newIndex) => {
		let temp = markers;
		temp[currentIndex].isSelected = false;
		temp[newIndex].isSelected = true;
		setMarkers([...temp]);
		setSelectedMarker(temp[newIndex]);
		setCurrentIndex(newIndex);
	};
	const ReyadCenter = { lat: 24.774265, lng: 46.738586 };
	const initialCenter = viewOnly ? { lat: mapData?.latitude, lng: mapData?.longitude } : ReyadCenter;
	return (
		selectedMarker?.lat &&
		selectedMarker?.lng && (
			<Map
				onReady={fetchPlaces}
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
				google={google}
				center={{ lat: selectedMarker?.lat, lng: selectedMarker?.lng }}
				mapTypeControlOptions={{
					style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
					position: google.maps.ControlPosition.TOP_RIGHT,
				}}
				zoom={14} // Initial zoom level
				initialCenter={ReyadCenter} // Initial map center coordinates
				// onClick={handleMapClick}
			>
				{selectedMarker?.lat && selectedMarker?.lng && (
					<InfoWindowEx
						pixelOffset={new window.google.maps.Size(0, -50)}
						position={{ lat: selectedMarker?.lat, lng: selectedMarker?.lng }}
						visible={true}>
						<UnitsCard
							imgHeight="180px"
							height="400px"
							width="250px"
							title={'Shreyas'}
							img={neigbourhoodCover}
							link={'/'}
							price={''}
							area={''}
							location={''}
						/>
					</InfoWindowEx>
				)}
				{markers?.map((item, index) => (
					<Marker
						lat={item?.lat}
						lng={item?.lng}
						position={{ lat: item?.lat, lng: item?.lng }}
						icon={{
							url: `${
								item?.isSelected
									? 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg'
									: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/bzrfeed.svg'
							}`,
							anchor: new google.maps.Point(17, 46),
							scaledSize: new google.maps.Size(37, 37),
						}}
						onClick={() => handleMarkerClick(index)}
						id={index}
						draggable={true}
						key={index}></Marker>
				))}
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
})(MapsView);

export function InfoWindowEx(props) {
	const infoWindowRef = React.createRef();
	const contentElement = document.createElement(`div`);
	useEffect(() => {
		ReactDOM.render(React.Children.only(props.children), contentElement);
		infoWindowRef.current.infowindow.setContent(contentElement);
	}, [props.children]);
	return <InfoWindow ref={infoWindowRef} {...props} />;
}
