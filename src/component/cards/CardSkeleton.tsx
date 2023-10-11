import { Box, Skeleton } from '@/wrappers';

const CardSkeleton = ({ height }: any) => {
	return (
		<Box fullWidth height={height}>
			<Skeleton variant="rounded" width={'100%'} height={240} />
			<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
			<Skeleton variant="rounded" width={'100%'} height={50} />
		</Box>
	);
};

export default CardSkeleton;
