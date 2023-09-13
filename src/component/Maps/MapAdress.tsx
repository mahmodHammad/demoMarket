// import { Box, Button, Typography } from "@/Shared/layout";
import LocationIcon from "@/assets/icons/LocationIcon";
import { Box, Button } from "@/wrappers";
import { SvgIcon, Typography } from "@mui/material";


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
          <Typography
            variant="body"
          >
            {title}
          </Typography>

          <Typography
            variant="small"
          >
            {body}
          </Typography>
        </Box>
      </Box>
      <Button component="a" href={mapsLink} target="_blank" fullWidth sx={{ mt: "12px" }}>
        View on Google Maps
      </Button>
    </Box>
  );
}

export default MapAdress;
