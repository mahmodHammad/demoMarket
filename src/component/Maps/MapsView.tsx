'use client';
import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import atarlogo from "@/assets/atarcloud_primary.png";
import { Typography, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import ReactDOM from 'react-dom';
import LocationIcon from '@/assets/icons/LocationIcon';

type Props = {};
const MapsView = ({
  viewOnly = false,
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
    setCurrentIndex(newIndex);
  };
  const ReyadCenter = { lat: 24.774265, lng: 46.738586 };
  const initialCenter = viewOnly ? { lat: mapData?.latitude, lng: mapData?.longitude } : ReyadCenter;
  return (
    <Map
      onReady={fetchPlaces}
      bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
      style={
        {
          //   margin: "-101px -40px",
        }
      }
      loaded={<div>hei</div>}
      google={google}
      center={latLng}
      mapTypeControlOptions={{
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      }}
      zoom={14} // Initial zoom level
      initialCenter={initialCenter} // Initial map center coordinates
      // onClick={handleMapClick}
    >
      {!viewOnly && (
        <InfoWindowEx
          pixelOffset={new window.google.maps.Size(0, -25)}
          position={{ lat: latLng?.lat, lng: latLng?.lng }}
          visible={false}
          style={{ background: 'red', padding: '100px' }}>
          <Box
            style={{
              padding: '12px',
            }}>
            <Typography
              component="div"
              style={{
                fontWeight: 700,
                fontSize: '24px',
                marginBottom: '20px',
              }}>
              Add Location
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '10px',
              }}>
              <LocationIcon />
              <div>
                <Typography component="div">Location</Typography>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#232425',
                    width: '340px',
                  }}>
                  {address}
                </Typography>
              </div>
            </div>
            {/* <Button
              style={{
                padding: "12px 24px",
                gap: "8px",
                height: "45px",
                background: "#008EA5",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
                marginTop: "8px",
              }}
              onClick={() => handleSubmit()}
            >
              Confirm location
            </Button> */}
          </Box>
        </InfoWindowEx>
      )}
      {markers?.map((item, index) => (
        <Marker
          lat={item?.lat}
          lng={item?.lng}
          position={item}
          icon={{
            url: `${
              item?.isSelected
                ? 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg'
                : 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/bzrfeed.svg'
            }`,
            anchor: new google.maps.Point(17, 46),
            scaledSize: new google.maps.Size(37, 37),
          }}
          // icon={<LocationIcon />}
          onClick={() => handleMarkerClick(index)}
          // itle="Location"
          id={1}
          draggable={true}
          key={index}></Marker>
      ))}
    </Map>
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
