import { Skeleton as MUISkeleton, SkeletonProps } from '@mui/material';

export default function Skeleton(props: SkeletonProps) {
	return <MUISkeleton variant="rounded" width={210} height={60} {...props} />;
}
