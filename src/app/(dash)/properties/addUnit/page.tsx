'use client';
import { Box, Button, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { get } from '@/utils/http';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import React, { useState } from 'react';
import { AdminPropertiesList, PopUpCard, UnitsCard } from '@/component';
import Succesgreen from '@/assets/icons/Succesgreen';

const data = [
	{
		title: 'Yarmouk Neighbourhood',
		location: 'AL-khobar',
		area: '132',
		price: '250000',
		img: neibourhoodcover2,
		link: '/',
	},
	{
		title: 'Yarmouk Neighbourhood',
		location: 'AL-khobar',
		area: '132',
		price: '250000',
		img: neibourhoodcover2,
		link: '/',
	},
	{
		title: 'Yarmouk Neighbourhood',
		location: 'AL-khobar',
		area: '132',
		price: '250000',
		img: neibourhoodcover2,
		link: '/',
	},
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
	{ title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
];
export default function Properties() {
	const [openPopup, setopenPopup] = useState(false);
	const handleClickOpen = () => {
		setopenPopup(true);
	};

	const handleClose = () => {
		setopenPopup(false);
	};

	return (
		<>
			<PopUpCard
				color={'green'}
				icon={<Succesgreen />}
				title={'title'}
				body={'body'}
				button1={'hi'}
				button2={'hi2'}
				openPopup={openPopup}
			/>
			<Box column p={'35px'} width={'100%'}>
				<Box center width={'100%'} xbetween row>
					<Text variant="h4">Properties List</Text>
					<Box row>
						{/* <Button variant="outlined" component={Link} href="/properties">
							Select Multiple
						</Button> */}
					</Box>
				</Box>

				<Grid container mt={'25px'} spacing={'28px'}>
					{/* <AdminPropertiesList /> */}
					{data?.map((d, index) => (
						<Grid item xs={4} key={index}>
							<UnitsCard
								title={d?.title || '--'}
								img={d?.img}
								// link={d?.link}
								price={d?.price || '--'}
								area={d?.area || '--'}
								location={d?.location || '--'}
								buttonName="add"
								onClick={handleClickOpen}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}
