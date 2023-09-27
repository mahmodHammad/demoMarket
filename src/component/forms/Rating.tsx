import { Rating as MUIRating, RatingProps } from '@mui/material';
import { Box, Text } from '@/wrappers';

const Rating = (props: RatingProps) => {
	// TODO: customize style
	return (
		<Box
			sx={{
				'& > legend': { mt: 2 },
			}}>
			<Text component="legend" variant="caption" sx={{ pb: '8px' }}>
				Rating
			</Text>
			<MUIRating {...props} />
		</Box>
	);
};

export default Rating;
