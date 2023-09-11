import React, { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
// import atarlogo from "@/assets/atarcloud_primary.png";
import { Typography, Button, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import ReactDOM from "react-dom";

type Props = {};
const LocationIcon = (props) => (
  <SvgIcon {...props} inheritViewBox>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_28239_83568)">
        <path d="M9 15.6749L12.7125 11.9624C13.4467 11.2282 13.9466 10.2927 14.1492 9.27435C14.3517 8.25596 14.2477 7.20039 13.8503 6.24111C13.4529 5.28183 12.78 4.46192 11.9167 3.88507C11.0533 3.30821 10.0383 3.00032 9 3.00032C7.96167 3.00032 6.94666 3.30821 6.08332 3.88507C5.21997 4.46192 4.54706 5.28183 4.14969 6.24111C3.75231 7.20039 3.64831 8.25596 3.85084 9.27435C4.05337 10.2927 4.55333 11.2282 5.2875 11.9624L9 15.6749ZM9 17.7959L4.227 13.0229C3.28301 12.0789 2.64014 10.8762 2.3797 9.56683C2.11925 8.25746 2.25293 6.90026 2.76382 5.66687C3.27472 4.43347 4.13988 3.37927 5.24991 2.63757C6.35994 1.89588 7.66498 1.5 9 1.5C10.335 1.5 11.6401 1.89588 12.7501 2.63757C13.8601 3.37927 14.7253 4.43347 15.2362 5.66687C15.7471 6.90026 15.8808 8.25746 15.6203 9.56683C15.3599 10.8762 14.717 12.0789 13.773 13.0229L9 17.7959ZM9 9.74994C9.39783 9.74994 9.77936 9.59191 10.0607 9.3106C10.342 9.0293 10.5 8.64777 10.5 8.24994C10.5 7.85212 10.342 7.47059 10.0607 7.18928C9.77936 6.90798 9.39783 6.74994 9 6.74994C8.60218 6.74994 8.22065 6.90798 7.93934 7.18928C7.65804 7.47059 7.5 7.85212 7.5 8.24994C7.5 8.64777 7.65804 9.0293 7.93934 9.3106C8.22065 9.59191 8.60218 9.74994 9 9.74994ZM9 11.2499C8.20435 11.2499 7.44129 10.9339 6.87868 10.3713C6.31607 9.80865 6 9.04559 6 8.24994C6 7.45429 6.31607 6.69123 6.87868 6.12862C7.44129 5.56601 8.20435 5.24994 9 5.24994C9.79565 5.24994 10.5587 5.56601 11.1213 6.12862C11.6839 6.69123 12 7.45429 12 8.24994C12 9.04559 11.6839 9.80865 11.1213 10.3713C10.5587 10.9339 9.79565 11.2499 9 11.2499Z" fill="#969798" />
      </g>
      <defs>
        <clipPath id="clip0_28239_83568">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
);
const MapsView = ({
  viewOnly = false,
  google,
  mapData,
  latLng,
  handleSubmit,
  handleMarkerClick = () => { },
  handleMapClick = () => { },
  address
}: Props) => {
  // console.log('shreyas address',address)
  const fetchPlaces = (mapProps, map) => {
    // const { google } = mapProps;
    // const service = new google.maps.places.PlacesService(map);
    // console.log("service",service)
    // // ...
  };
  const markers = [
    { lat: 24.774265, lng: 46.738586, isSelected:true },
    { lat: 24.776135337799865, lng: 46.76248846413293, isSelected:false },
    { lat: 24.783772258002134, lng: 46.702664474264765, isSelected:false },
    { lat: 24.757430691966952, lng: 46.739916375671385, isSelected:false },
  ]
  const ReyadCenter = { lat: 24.774265, lng: 46.738586 };
  const initialCenter = viewOnly
    ? { lat: mapData.latitude, lng: mapData.longitude }
    : ReyadCenter;
  return (
    <Map
      onReady={fetchPlaces}
      bootstrapURLKeys={{ key: "AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ" }}
      style={
        {
          //   margin: "-101px -40px",
        }
      }
      google={google}
      center={latLng}
      mapTypeControlOptions={{
        'style': google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        'position': google.maps.ControlPosition.TOP_RIGHT
      }}
      zoom={14} // Initial zoom level
      initialCenter={initialCenter} // Initial map center coordinates
      onClick={handleMapClick}
    >
      {!viewOnly &&
        <InfoWindowEx
          pixelOffset={new window.google.maps.Size(0, -25)}
          position={{ lat: latLng.lat, lng: latLng.lng }}
          visible={true}
          style={{ background: "red", padding: "100px" }}
        >
          <Box
            style={{
              padding: "12px",
            }}
          >
            <Typography
              component="div"
              style={{
                fontWeight: 700,
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Add Location
            </Typography>
            <div style={{
              display: 'flex', alignItems: 'center',
              columnGap: '10px'
            }}>
              <LocationIcon />
              <div>
                <Typography component="div">Location</Typography>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#232425",
                    width: "340px",
                  }}
                >
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
      }
      {markers?.map((item, index) => <Marker
        lat={item?.lat}
        lng={item?.lng}
        position={item}
        icon={{

          url: `${item?.isSelected ? 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg': 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/bzrfeed.svg'}`,
  
          anchor: new google.maps.Point(17, 46),
  
          scaledSize: new google.maps.Size(37, 37)
  
      }}
        // icon={<LocationIcon />}
        onClick={handleMarkerClick}
        // itle="Location"
        id={1}
        draggable={true}
        key={index}
      ></Marker>
      )}

    </Map >
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ",
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