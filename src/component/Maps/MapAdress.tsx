// import { Box, Button, Typography } from "@/Shared/layout";
import { Box, Button } from "@/wrappers";
import { SvgIcon, Typography } from "@mui/material";


function MapAdress({ title, body, mapsLink }) {
  const LocationIcon = (props) => (
    <SvgIcon {...props} inheritViewBox>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_25204_65446)">
          <path
            d="M12 23.7279L5.636 17.3639C4.37734 16.1052 3.52019 14.5016 3.17293 12.7558C2.82567 11.0099 3.00391 9.20035 3.6851 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639L12 23.7279ZM16.95 15.9499C17.9289 14.9709 18.5955 13.7236 18.8656 12.3658C19.1356 11.0079 18.9969 9.60052 18.4671 8.32148C17.9373 7.04244 17.04 5.94923 15.8889 5.18009C14.7378 4.41095 13.3844 4.00043 12 4.00043C10.6156 4.00043 9.26222 4.41095 8.11109 5.18009C6.95996 5.94923 6.06275 7.04244 5.53292 8.32148C5.00308 9.60052 4.86442 11.0079 5.13445 12.3658C5.40449 13.7236 6.07111 14.9709 7.05 15.9499L12 20.8999L16.95 15.9499ZM12 12.9999C11.4696 12.9999 10.9609 12.7892 10.5858 12.4141C10.2107 12.0391 10 11.5304 10 10.9999C10 10.4695 10.2107 9.96078 10.5858 9.58571C10.9609 9.21064 11.4696 8.99992 12 8.99992C12.5304 8.99992 13.0391 9.21064 13.4142 9.58571C13.7893 9.96078 14 10.4695 14 10.9999C14 11.5304 13.7893 12.0391 13.4142 12.4141C13.0391 12.7892 12.5304 12.9999 12 12.9999Z"
            fill="#969798"
          />
        </g>
        <defs>
          <clipPath id="clip0_25204_65446">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
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
