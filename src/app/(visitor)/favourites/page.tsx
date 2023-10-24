'use client';
import { Box, Button, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import React from 'react';
import Link from 'next/link';

import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { UnitsCard } from '@/component';
import { Delete } from '@/assets';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getFav, toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { keys } from '@/utils/keys';
import EmptyFavList from '@/component/favourite/EmptyFavList';



const favourites = () => {
	const { data, isLoading } = useQuery({
		queryKey: [keys.FAV],
		queryFn: getFav,
	});
	const queryClient = useQueryClient();
	const handleToggleLike = (id) => {
		toggleLike({
			property_id: id,
		});
		queryClient.invalidateQueries({ queryKey: [keys.FAV] });
		queryClient.invalidateQueries({ queryKey: [keys.MOSTVIEWED] });
		queryClient.invalidateQueries({ queryKey: [keys.RECENTLYADDED] });
	};
	console.log('datadatadata', data);
	return (
		<>
			<Box column p={'35px'} width={'100%'}>
				<Box center width={'100%'} xbetween row>
					<Text variant="h4">Favourites</Text>
					{/* <Box>
						<Button
							startIcon={<Delete sx={{ fill: '#FF4242' }} />}
							variant="dangerOutlined"
							component={Link}
							color="warning"
							href="/favourites"
							sx={{
								height: '40px',
								padding: '10px 20px',

								borderRadius: '9px',
							}}>
							Remove All
						</Button>
					</Box> */}
				</Box>

				<Grid container mt={'25px'} spacing={'28px'}>
					{data?.list?.length ? (
						data?.list?.map((d, index) => (
							<Grid item xs={4} key={index}>
								<UnitsCard data={d} toggleLike={handleToggleLike} />
							</Grid>
						))
					) : (
						<EmptyFavList />
					)}
				</Grid>
			</Box>
		</>
	);
};

export default favourites;
