import { Rating as MUIRating, RatingProps } from '@mui/material';
import { Box, Text } from '@/wrappers';

const Rating = (props: RatingProps) => {
	// TODO: customize style
	return (
		<Box
			sx={{
				'& > legend': { mt: 2 },
			}}>
			<Text component="legend">Rating</Text>
			<MUIRating {...props} />
		</Box>
	);
};

export default Rating;
