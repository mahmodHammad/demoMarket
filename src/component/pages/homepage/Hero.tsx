import { Box, Text } from '@/wrappers';
import React from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

import { xtenants } from '@/utils/xtenants';
export default function Hero() {
	return (
		<Box
			// height: { xl: '100px', md: '82px', xs: '72px' },
			sx={{
				height: { xs: 'calc(100vh )', md: 'calc(100vh)' },
				position: 'relative',
				mt: { xl: '-100px', md: '-82px', xs: '-72px' },
			}}>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
					position: 'absolute',
					filter: 'brightness(0.7)',
				}}
				component={Image}
				priority
				alt="houses and properties for rent"
				src={xtenants?.landingBackground}
				quality={100}
				placeholder="blur"
			/>

			<Box
				sx={{
					position: 'absolute',
					zIndex: 100,
					width: '100%',
					height: '100%',
				}}
				center
				column>
				<Box
					sx={{
						mt: { xl: '100px', md: '85px' },
						maxWidth: { xl: '720px', md: '60%', xs: '90%' },
					}}>
					<Text variant="h2" align="center" sx={{ color: '#fff', fontSize: { md: '48px', xs: '38px' } }} component="h1">
						{xtenants.sloganTitle || 'Buy, rent, or sell your property easily'}
					</Text>
					<Text
						variant="body"
						align="center"
						sx={{
							mt: { md: '26px', xs: '16px' },
							color: '#fff',
							textAlign: 'center',
						}}>
						{xtenants.sloganBody ||
							'Discover properties available for sale and rent, view all property details, book a visit with a sales consultant, and complete the payment process with ease and flexibility in one platform.'}
					</Text>
				</Box>
				<Box center width={'100%'} px={1}>
					<SearchBar />
				</Box>
			</Box>
		</Box>
	);
}
