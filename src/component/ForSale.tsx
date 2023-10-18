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

	const images = data?.list?.map(d => d?.image)
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '290px',
					overflow: 'hidden',
					borderRadius: '16px',
				}}>

				{images?.length ? <ReactSwipe
					className="carousel"
					swipeOptions={{
						auto: 3000,
						speed: 2000,
						continuous: true,
						disableScroll: true,
					}}
					ref={(el) => (reactSwipeEl = el)}>
					{images?.map(img =>
						<Box
							sx={{
								width: '100%',
								objectFit: 'cover',
								background: "red"
							}}
							width="100px"
							component="img"
							alt="houses and properties for rent"
							src={img}
						/>

					)}

				</ReactSwipe> : null}


				{/* <Box
					sx={{
						// background: 'orange',
						height: '100%',
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-start',
						pl: '30px',
						width: '100%',
					}}
					column>
					{/* <Text
						variant="small"
						sx={{
							color: '#fff',
							fontSize: '14px',
						}}>
						Dream House
					</Text>
					<Text
						variant="h4"
						sx={{
							color: '#fff',
							fontSize: '68px',
							mt: '10px',
						}}>
						For Sale
					</Text>
					<Text
						variant="label"
						sx={{
							color: '#fff',
							mt: '18px',
							fontSize: '16px',
						}}>
						SAR 29,000.00
					</Text>
					<Button
						variant="contained"
						color="secondary"
						size="medium"
						sx={{
							color: '#fff',
							mt: '28px',
							fontWeight: '700',
						}}>
						Schedule a Visit
					</Button> 
				</Box> */}
			</Box>
		</>
	);
}
