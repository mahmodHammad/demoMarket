'use client';
import { AtarColoredLogo, FrontSide, GroundFloor, Room } from '@/assets';
import {
	AboutUnit,
	BuyNowCard,
	ConstructionStatus,
	Features,
	FloorPlans,
	QuiltedImageList,
	UnitHeader,
	UnitMap,
} from '@/component';
import { Container, Grid } from '@mui/material';
import React from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import photo1 from '@/assets/images/photo1.png';
import photo2 from '@/assets/images/photo2.png';
import photo3 from '@/assets/images/photo3.png';
import Image from 'next/image';

import { Box, Button } from '@/wrappers';

const data = [
	{ title: 'Pool', icon: <Room /> },
	{ title: 'Room', icon: <FrontSide /> },
	{ title: 'Front Side', icon: <GroundFloor /> },
	{ title: 'Pool', icon: <Room /> },
	{ title: 'Pool', icon: <Room /> },
];
const images = [
	photo1,
	photo2,
	photo3,
	// ...
];

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src, size) {
	return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const slides = images.map(({ src, width, height }) => ({
	width,
	height,
	src: nextImageUrl(src, width),
	srcSet: imageSizes
		.concat(...deviceSizes)
		.filter((size) => size <= width)
		.map((size) => ({
			src: nextImageUrl(src, size),
			width: size,
			height: Math.round((height / width) * size),
		})),
}));

interface Props {
	id?: string;
	photos?: any;
	propertyName?: string;
	logo?: any;
	location?: string;
	constructionStatus?: string;
	managedBy?: string;
	rentPrice?: string;
	rentType?: string;
	aboutUnit?: string;
	floorPlansCard?: any;
	area?: string;
	featuresAmenities?: any;
	floorFeatures?: any;
	map?: string;
}
export default function page({
	id,
	logo,
	photos,
	propertyName,
	location,
	constructionStatus,
	managedBy,
	rentPrice,
	rentType,
	aboutUnit,
	floorPlansCard,
	featuresAmenities,
	floorFeatures,
	map,
}: Props) {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Container maxWidth="xl">
				<Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={1}>
					<Box column>
						<QuiltedImageList />
						<Button type="button" onClick={() => setOpen(true)}>
							Open Lightbox
						</Button>

						{/* <Lightbox
							open={open}
							close={() => setOpen(false)}
							slides={[photo1, photo1, photo1]}
							// render={{ slide: , thumbnail: NextJsImage }}
							plugins={[Thumbnails]}
						/> */}
						<Lightbox open={open} close={() => setOpen(false)} slides={slides} plugins={[Zoom, Thumbnails]} />
					</Box>

					<Grid item xs={12} md={8} height={'100hv'}>
						<UnitHeader
							logo={
								<AtarColoredLogo
									sx={{
										height: '52px',
										width: { xs: '75px', md: '121px' },
									}}
								/>
							}
							title={propertyName || 'Property Name'}
							location={location || 'Location'}
						/>
						<ConstructionStatus
							logo={
								<AtarColoredLogo
									sx={{
										height: '14px',
										width: '35px',
									}}
								/>
							}
							title={''}
							status={constructionStatus || 'Ready To Move'}
							managedBy={managedBy || 'Atar'}
						/>
						<AboutUnit
							description={
								aboutUnit ||
								'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease.'
							}
						/>

						<Grid item xs={12} md={4} display={{ xs: 'flex', md: 'none' }} mt={3}>
							<BuyNowCard price={rentPrice || 'SAR 50000'} PriceType={rentType || 'monthly'} />
						</Grid>

						<FloorPlans />
						<Features Feature={data} />
						<UnitMap location={location} />
					</Grid>

					<Grid item xs={12} md={4} height={'518px'} display={{ xs: 'none', md: 'flex' }}>
						<BuyNowCard price={rentPrice || 'SAR 50000'} PriceType={rentType || 'monthly'} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
