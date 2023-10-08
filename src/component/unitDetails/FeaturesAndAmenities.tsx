import theme from '@/ThemeRegistry/theme';
import { Box, Text } from '@/wrappers';

interface Props {
  icon: any;
  title: string;
  value?: string | number | boolean
}
export default function FeaturesAndAmenities({ icon, title, value }: Props) {
  return (
    <Box
      center
      row
      gap={'8px'}
      sx={{
        mt: { xs: '5px', md: '16px' },
        mr: { xs: '5px', md: '16px' },
        height: { xs: '72px', md: '96px' },
        width: { xs: '72px', md: '96px' },
        borderRadius: '8px',
        // background: theme.palette.primary.main + '77',
        // bgcolor: theme.palette.primary.main + '77',
        backgroundColor: 'rgba(0, 142, 165, 0.08)',
      }}>
      <Box column center>
        {icon}
        <Text variant="small" bold>
          {title}
        </Text>
      </Box>
    </Box>
  );
}
