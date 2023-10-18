'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Text } from '@/wrappers';
import Image from 'next/image';
import { defaultNeighbourd2 } from '@/assets';

interface proptypes {
	img: string;
	title: string;
	link: string;
	id: string;
}
export default function NeighbourhoodCard({ data }: proptypes) {
	const { id, images, name } = data;
	const image = images && images[0]?.url ? images[0].url : defaultNeighbourd2;

	const router = useRouter();
	return (
		<Box
			onClick={() => router.push(`/listingpage?location=${id}`)}
			sx={{
				width: '100%',
				height: { xs: '150px', md: '273px' },
				position: 'relative',
				overflow: 'hidden',
				borderRadius: '16px',
			}}>
			<Box
      fill
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'bottom',
					position: 'absolute',
				}}
				component={Image}
				alt="houses and properties for rent"
				src={image}
				// placeholder="blur"
			/>
			<Text
				variant="h5"
				sx={{
					color: '#fff',
					bottom: '20px',
					left: '20px',
					position: 'absolute',
					fontSize: { xs: '14px', md: '24px' },
				}}>
				{name}
			</Text>
		</Box>
	);
}
