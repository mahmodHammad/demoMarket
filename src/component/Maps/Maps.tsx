'use client';
import React, { useState } from "react";
import MapsView from "./MapsView";

const GeocodingAPIBase = "https://maps.googleapis.com/maps/api/geocode/json";
const GoogleMapsLinkBase = "https://www.google.com/maps/search/?api=1";

// MapContainer will require 2 props: toogle for rendering map and setting location obj at submit.
const MapContainer = ({setShowMap, handleMapSubmit}) => {
  const [latLng, setLatLng] = useState({ lat: 24.774265, lng: 46.738586 });
  const [SelectedMarker, setSelectedMarker] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(true);
  const [address, setAddress] = useState('');
  const [returnObj, setReturnObj] = useState({});

  const handleMapClick = (props, marker, event) => {
    // Handle marker click event here
    setLatLng({ lat: props?.geometry?.location?.lat() || event.latLng.lat(), lng: props?.geometry?.location?.lng() || event.latLng.lng() });
    setShowingInfoWindow(true);
    setSelectedMarker(marker);
    if (props?.formatted_address) {
      props?.formatted_address.includes("،")
        ? setAddress(props?.formatted_address.split("،").slice(1).toString())
        : setAddress(props?.formatted_address);
      const districtName =
        props?.address_components[1].long_name +
        " ," +
        props.address_components[2].long_name;
      setReturnObj({
        "latitude": props?.geometry?.location?.lat(),
        "longitude": props?.geometry?.location?.lng(),
        "latitudeDelta": process.env.LATITUDE_DELTA,
        "longitudeDelta": process.env.LONGITUDE_DELTA,
        "formattedAddress": props?.formatted_address,
        "districtName": districtName,
        "mapsLink": `${GoogleMapsLinkBase}&query=${props?.geometry?.location?.lat()},${props?.geometry?.location?.lng()}`,
        "place_id": props?.place_id
      })
    } else {
      onPlaceSelected(props?.geometry?.location?.lat() ? props : marker);
    }
  };
  const handleSubmit = () => {
    handleMapSubmit(returnObj);
  }
  const handleInfoWindowClosed = () => {
    setShowingInfoWindow(false);
  };

  const onPlaceSelected = (details) => {
    fetch(
      `${GeocodingAPIBase}?latlng=${latLng.lat},${latLng.lng}&key=${process.env.VITE_MAPS_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedAddress = data?.results[0]?.formatted_address;
        const place_id = data.results[0].place_id;
        const mapsLink = `${GoogleMapsLinkBase}&query=${latLng.lat},${latLng.lng}`;
        const districtName =
          data.results[0].address_components[1].long_name +
          " ," +
          data.results[0].address_components[2].long_name;
        setReturnObj({
          "latitude": latLng.lat,
          "longitude": latLng.lng,
          "latitudeDelta": process.env.LATITUDE_DELTA,
          "longitudeDelta": process.env.LONGITUDE_DELTA,
          "formattedAddress": formattedAddress,
          "districtName": districtName,
          "mapsLink": mapsLink,
          "place_id": place_id
        })

        formattedAddress.includes("،")
          ? setAddress(formattedAddress.split("،").slice(1).toString())
          : setAddress(formattedAddress);
      })
      .catch((error) => console.error(error));
  };
  return (
    // <Box
    //   sx={{
    //     background: "gray",
    //     position: "absolute",
    //     width: "calc(100% - 60px)",
    //     height: "calc(100% - 120px)",
    //     borderRadius: "6px",
    //     overflow: "hidden",
    //   }}
    // >
    <div className="google-map">
      {/* <MapsAutoComplete handleMapClick={handleMapClick} address={address} /> */}

      <MapsView handleSubmit={handleSubmit} address={address} handleMapClick={handleMapClick} latLng={latLng} />
    {/* // </Box> */}
    </div>
  );
};

export default MapContainer;
