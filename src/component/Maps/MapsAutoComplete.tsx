import { useRef, useState } from "react";

import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { Input, SvgIcon, TextField } from "@mui/material";
import './maps.css'
const MapsAutoComplete = ({ handleMapClick, address }) => {
  const SearchIcon = (props) => (
    <SvgIcon {...props} inheritViewBox>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9363 16.8871C12.2574 16.8871 13.4926 16.4405 14.4877 15.7018L17.1728 18.3902C17.5091 18.7269 18.0547 18.7269 18.3909 18.3902C18.7272 18.0535 18.7264 17.5079 18.3893 17.1721L15.7059 14.4994C16.4436 13.5031 16.8897 12.2834 16.8897 10.9436C16.8897 7.66258 14.2304 5 10.9534 5C7.67647 5 5 7.67975 5 10.9436C5 14.2074 7.67647 16.8871 10.9363 16.8871ZM11.0375 6.75C13.4078 6.75 15.325 8.60849 15.325 10.9062C15.325 13.204 13.4078 15.0625 11.0375 15.0625C8.66718 15.0625 6.75 13.204 6.75 10.9062C6.75 8.60849 8.6846 6.75 11.0375 6.75Z" fill="#232425" />
      </svg>
    </SvgIcon>
  );
  const inputRef = useRef(null);
  const antInputRef = useRef(null);
  const [country, setCountry] = useState("us");
  const { ref: materialRef } = usePlacesWidget({
    apiKey: "AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ",
    onPlaceSelected: (place) => console.log(place),
    inputAutocompleteValue: "country",
    options: {
      componentRestrictions: { country },
    },
  });
  const svg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E"
  // const handleLatLng = (place) => {
  //   console.log(place?.geometry?.location?.lat(),place?.geometry?.location?.lng(), 'place, shreyas')
  //   setLatLng({ lat: place?.geometry?.location?.lat(), lng: place?.geometry?.location?.lng() });
  // }
  return (
    <div className="App">
      <header className="App-header" style={{
        background: '#fafcfd',
        padding: '10px'
      }}>
        <label>

          <Autocomplete
            style={{
            }}
            id="search"
            ref={inputRef}
            apiKey={"AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ"}
            onPlaceSelected={handleMapClick}
            options={{
              types: ["geocode", "establishment"],
            }}
            defaultValue="Saudi Arabia"
          />

        </label>
      </header>
    </div>
  );
};

export default MapsAutoComplete;
