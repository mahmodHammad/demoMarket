// import { Box, Button, Typography } from "@/Shared/layout";
import LocationIcon from "@/assets/icons/LocationIcon";
import { Box, Button, Text } from "@/wrappers";
import { SvgIcon } from "@mui/material";


function MapAdress({ title, body, mapsLink }) {
  return (
    <Box
      style={{
        padding: "12px",
        paddingTop: "24px",
        paddingBottom: "0px",
      }}
    >
      <Box row>
        <LocationIcon sx={{ mr: "8px" }} />
        <Box column>
          <Text
            variant="body"
          >
            {title}
          </Text>

          <Text
            variant="small"
          >
            {body}
          </Text>
        </Box>
      </Box>
      <Button component="a" href={mapsLink} target="_blank" fullWidth sx={{ mt: "12px" }}>
        View on Google Maps
      </Button>
    </Box>
  );
}

export default MapAdress;
