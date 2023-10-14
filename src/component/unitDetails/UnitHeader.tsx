import { Favorite, Share } from '@/assets';
import { useAuth } from '@/contexts/AuthContext';
import { Box, Button, Text } from '@/wrappers';
import { IconButton } from '@mui/material';

interface Props {
  logo: any;
  title: string;
  location: string;
}
export default function UnitHeader({ logo, title, location }: Props) {
  const { isAuthed, openLoginModal } = useAuth();

  const handleButton = () => {
    if (!isAuthed) {
			openLoginModal();
			return;
		}
  }
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
          <Share />
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
          <Favorite />
        </IconButton>
        <Button
          variant="outlined"
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: '42px',
            width: '100%',
            color: '#002A37',
            padding: '12px 24px 12px 24px',
            borderRadius: '8px',
            borderColor: '#E3E3E3',
          }}
          startIcon={<Share size="small" />}>
          Share
        </Button>

        <Button
          variant="outlined"
          onClick={handleButton}
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: '42px',
            width: '100%',
            color: '#002A37',
            padding: '12px 24px 12px 24px',
            borderRadius: '8px',
            borderColor: '#E3E3E3',
          }}
          startIcon={<Favorite />}
        >
          Favorite
        </Button>
      </Box>
    </Box>
  );
}
