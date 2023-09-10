'use client';

import React from 'react';
import { Box, Text, Button } from '@/wrappers';
import { Grid, Container } from '@mui/material';
import Link from 'next/link';
import { PropertyFilters } from '@/component';

import HomeCardsContainer from '@/component/pages/homepage/HomeCardsContainer';

interface Props {}

export default function page(props: Props) {
	return (
		<>
			<Container maxWidth='xl'>
				<Grid
					container
					spacing={3}
					sx={{ mt: '5px', pt: '26px' }}
					mb={15}
				>
					{/* Abdulrahman */}

					<Grid
						item
						xs={12}
						md={4}
						display={{ xs: 'none', md: 'flex' }}
					>
						<PropertyFilters />
					</Grid>

					{/* Abdullah */}

					<Grid
						item
						xs={12}
						md={8}
						height={'100hv'}
						display={{ xs: 'none', md: 'flex' }}
					></Grid>
				</Grid>
			</Container>
		</>
	);
}
