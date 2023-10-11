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
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';

import photo1 from '@/assets/images/photo1.png';
import photo2 from '@/assets/images/photo2.png';
import photo3 from '@/assets/images/photo3.png';

import PhotoAlbum from 'react-photo-album';

import { Box } from '@/wrappers';

import { data } from './mock';

const amenityData = [
	{ title: 'Pool', icon: <Room />, value: data?.data?.data?.ac_type },
	{ title: 'Room', icon: <FrontSide />, value: data?.data?.data?.floor },
	{ title: 'Front Side', icon: <GroundFloor />, value: data?.data?.data?.bathrooms },
	{ title: 'Pool', icon: <Room />, value: data?.data?.data?.bedrooms },
	{ title: 'Pool', icon: <Room />, value: data?.data?.data?.lounges },
];
const images = [photo1, photo2, photo3, photo3];

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
	const [index, setIndex] = React.useState(-1);

	return (
		<>
			<Container maxWidth="xl">
				<Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={1}>
					<Box column>
						<QuiltedImageList />

						<PhotoAlbum
							layout="rows"
							photos={images}
							targetRowHeight={150}
							onClick={({ index: current }) => setIndex(current)}
						/>

						<Lightbox
							styles={{
								container: { backgroundColor: 'rgba(0, 0, 0, .8)' },
							}}
							plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
							index={index}
							slides={images}
							open={index >= 0}
							close={() => setIndex(-1)}
						/>
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
							title={data?.data?.name || 'Property Name'}
							location={data?.data?.locationable?.name || 'Location'}
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
							<BuyNowCard
								price={data?.data?.active_lease?.annual_rent || 'SAR 50000'}
								PriceType={rentType || 'monthly'}
							/>
						</Grid>

						<FloorPlans />
						<Features Feature={amenityData} />
						<UnitMap location={location} />
					</Grid>

					<Grid item xs={12} md={4} height={'518px'} display={{ xs: 'none', md: 'flex' }}>
						<BuyNowCard
							price={'SAR ' + data?.data?.active_lease?.annual_rent || 'SAR 50000'}
							PriceType={rentType || 'monthly'}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
