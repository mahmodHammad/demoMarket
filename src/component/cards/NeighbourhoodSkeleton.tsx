import { Box, Skeleton } from '@/wrappers';

const NeighbourhoodSkeleton = ({ height }: any) => {
	return (
		<Box fullWidth height={height}>
			<Skeleton variant="rounded" width={'100%'} height={240} />
		</Box>
	);
};

export default NeighbourhoodSkeleton;
