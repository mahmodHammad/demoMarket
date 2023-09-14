import { useRef, useState } from "react";

import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
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
