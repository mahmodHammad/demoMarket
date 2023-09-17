import theme from '@/ThemeRegistry/theme';
import { Box, Button, Text } from '@/wrappers';

interface Props {
  logo: any;
  title: string;
  date: string;
}

function BookingDetails_timedate({ logo, date }: Props) {
  return (
    <Box
      row
      xbetween
      center
      sx={{
        borderRadius: '16px',
        backgroundColor: '#008EA514',
        mt: '25px',
        px: '24px',
        py: '20px',
      }}>
      <Box row>
        <Box column>
          <Text variant="small" gray fontSize={'12px'}>
            Booking Date & Time
          </Text>
          <Text variant="h5" s={16} fontSize={'24'}>
            {date}
          </Text>
        </Box>
      </Box>

      <Box column>
        <Button variant="outlined">Add to calendar</Button>
      </Box>
    </Box>
  );
}
export default BookingDetails_timedate;
