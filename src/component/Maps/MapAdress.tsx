import LocationIcon from '@/assets/icons/LocationIcon';
import { Box, Button, Text } from '@/wrappers';

function MapAdress({ title, body, mapsLink }) {
  return (
    <Box
      sx={{
        mt: '25px',
        py: '12px',
      }}>
      <Box row center>
        <LocationIcon sx={{ mr: '8px' }} />
        <Box column>
          <Text variant="label">{title}</Text>

          <Text variant="small">{body}</Text>
        </Box>
      </Box>
      <Button component="a" href={mapsLink} target="_blank" fullWidth sx={{ mt: '12px' }}>
        View on Google Maps
      </Button>
    </Box>
  );
}

export default MapAdress;
