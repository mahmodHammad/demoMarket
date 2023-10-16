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
// import React, { useState } from 'react';
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
import { get } from '@/utils/http';

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
export default async function page({
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
	// const [index, setIndex] = useState(-1);

	const url = '/properties/2780';
	const response = await get(url);
	const unit = response?.data; // Get the array of objects

	const amenityData = [
		{ title: 'floor', icon: <Room />, value: unit?.features?.floor },
		{ title: 'status', icon: <Room />, value: unit?.features?.status },
		{ title: 'ac_type', icon: <Room />, value: unit?.features?.ac_type },
		{ title: 'kitchen', icon: <Room />, value: unit?.features?.kitchen },
		{ title: 'lounges', icon: <Room />, value: unit?.features?.lounges },
		{ title: 'bedrooms', icon: <Room />, value: unit?.features?.bedrooms },
		{ title: 'bathrooms', icon: <Room />, value: unit?.features?.bathrooms },
		{ title: 'floor', icon: <Room />, value: unit?.features?.floor },
		{ title: 'guest rooms', icon: <FrontSide />, value: unit?.features?.guest_rooms },
		{ title: 'unit size', icon: <GroundFloor />, value: unit?.features?.unit_size },
		{ title: 'year built', icon: <GroundFloor />, value: unit?.features?.year_built },
		{ title: 'is furnished', icon: <GroundFloor />, value: unit?.features?.is_furnished },
	];
	return (
		<>
			<Container maxWidth="xl">
				<Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={1}>
					<Box column>
						<QuiltedImageList />

						{/* <PhotoAlbum
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
						/> */}
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
							title={unit?.name || '--'}
							location={unit?.city.name || '--'}
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
							status={unit?.status.description || '--'}
							managedBy={unit?.managed_by || '--'}
						/>
						<AboutUnit description={aboutUnit || '--'} />

						<Grid item xs={12} md={4} display={{ xs: 'flex', md: 'none' }} mt={3}>
							<BuyNowCard price={'SAR ' + unit?.price || '--'} PriceType={rentType || 'monthly'} />
						</Grid>

						<FloorPlans floorFeatures={amenityData} area={unit?.features?.unit_size} />
						<Features Feature={amenityData} />
						<UnitMap location={location} />
					</Grid>

					<Grid item xs={12} md={4} height={'518px'} display={{ xs: 'none', md: 'flex' }}>
						<BuyNowCard unitId={unit?.id || undefined} price={'SAR ' + unit?.price || '--'} PriceType={rentType || 'monthly'} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
