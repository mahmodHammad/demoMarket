import { useRef, useState } from "react";

import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { Input, SvgIcon, TextField } from "@mui/material";
import './maps.css'
const MapsAutoComplete = ({ handleMapClick, address }) => {
  const inputRef = useRef(null);
  const antInputRef = useRef(null);
  const [country, setCountry] = useState("us");
  const { ref: materialRef } = usePlacesWidget({
    apiKey:  process.env.GOOGLE_MAP_KEY,
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
            apiKey={ process.env.GOOGLE_MAP_KEY}
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
