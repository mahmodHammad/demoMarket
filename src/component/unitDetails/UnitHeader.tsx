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
export default function UnitHeader({ logo, title, location }: Props) {
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

      <Box row ycenter gap="12px">
        <IconButton
          color="primary"
          aria-label="delete"
          sx={{
            display: { xs: 'block', md: 'none' },
            height: '30px',
            width: '30px',
            mt: '-8px',
          }}
          // size="small"
        >
          <Share color={'#008EA5D6'} />
        </IconButton>
        <IconButton
          color="primary"
          sx={{
            display: { xs: 'block', md: 'none' },
            height: '30px',
            width: '30px',
            mt: '-10px',
          }}
          size="large">
          <Favorite color={'#008EA5D6'} />
        </IconButton>
        <Button
          variant="outlined"
          component={Link}
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: '42px',
            width: '100%',
            color: '#002A37',
            padding: '12px 24px 12px 24px',
            borderRadius: '8px',
            borderColor: '#E3E3E3',
          }}
          startIcon={<Share size="small" color={'#002A37'} />}>
          Share
        </Button>

        <Button
          variant="outlined"
          component={Link}
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: '42px',
            width: '100%',
            color: '#002A37',
            padding: '12px 24px 12px 24px',
            borderRadius: '8px',
            borderColor: '#E3E3E3',
          }}
          startIcon={<Favorite color={'#002A37'} />}

          //   color="black"
        >
          Favorite
        </Button>
      </Box>
    </Box>
  );
}
