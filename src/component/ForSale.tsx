import { Box, Button, Text } from '@/wrappers';
import Image from 'next/image';
import neibourhoodcover1 from '@/assets/images/Rectangle 4535.png';
import ReactSwipe from 'react-swipe';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import photo3 from '@/assets/images/photo3.png';
import { useQuery } from '@tanstack/react-query';
import { getAdvertisements } from '@/app/(dash)/advertisement/advertisement-service';
import { keys } from '@/utils/keys';

export default function ForSale() {
	let reactSwipeEl;
	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.ADVERTISEMENT],
		queryFn: () => getAdvertisements(),
		refetchInterval: false,
		retry: false,
	});

	const images = data?.list?.map((d) => d?.image);
	return (
		<>
			<ReactSwipe
				className="carousel"
				swipeOptions={{
					auto: 5000,
					speed: 500,
					continuous: true,
					disableScroll: false,
					// widthOfSiblingSlidePreview: 60,
				}}
				ref={(el) => (reactSwipeEl = el)}>
				{images?.map((img) => (
					<Box
						sx={{
							width: '100%',
							objectFit: 'cover',
							height: '290px',
							borderRadius:"8px"
						}}
						component="img"
						alt="houses and properties for rent"
						src={img}
					/>
				))}
			</ReactSwipe>
		</>
	);
}


