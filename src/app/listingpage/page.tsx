'use client';

import React from 'react';
import { Box, Text } from '@/wrappers';
import { Grid, Container } from '@mui/material';
import Link from 'next/link';
import { PropertyFilters } from '@/component';

import HomeCardsContainer from '@/component/pages/homepage/HomeCardsContainer';

export default function Home() {
	return (
		<Container maxWidth='xl'>
			<Grid
				container
				spacing={3}
				sx={{ mt: '5px', p: '26px' }}
			>
				{/* Abdulrahman */}
				<Grid
					item
					xs={12}
					md={4}
				>
					<PropertyFilters />
				</Grid>

				{/* Abdullah */}
				<Grid
					item
					xs={8}
					md={8}
					display={{ xs: 'none', md: 'flex' }}
				>
					<Box
						width={'100%'}
						height={'100hv'}
					>
						<Text variant='h4'>Property in Saudi for rent </Text>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
