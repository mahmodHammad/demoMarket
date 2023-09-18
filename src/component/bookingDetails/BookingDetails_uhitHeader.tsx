import { Favorite, Share } from '@/assets';
import { Box, Button, Text } from '@/wrappers';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  logo: any;
  title: string;
  location: string;
}
export default function BookingDetails_uhitHeader({ logo, title, location }: Props) {
  return (
    <Box row xbetween>
      <Box center row gap={'6px'}>
        <Box center>{logo}</Box>
        <Box column xcenter>
          <Text bold sx={{ fontSize: { xs: '16px !important', md: '36px !important' } }}>
            {title}
          </Text>
          <Text variant="small" gray>
            {location}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
