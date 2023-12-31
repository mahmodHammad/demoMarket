'use client';
import { FrontSide, GroundFloor, Room } from '@/assets';
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
import { Container, Grid, SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';

import { Box, Button, Loading } from '@/wrappers';
import { DELETE, GET } from '@/utils/http';
import { AcTypes, FurnishedTypes, ParkingTypes, stringifyNumber } from '@/component/unitDetails/PropertySpecification';
import { useParams } from 'next/navigation';
import { keys } from '@/utils/keys';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Delete from '@/assets/icons/Delete';
import { toggleLike } from '../../../(landing)/listingpage/listing-service';
import { globalToast } from '@/utils/toast';
import { useRouter } from 'next/navigation';
import xtenant from '@/utils/xtenant';

export const generateImgList = (images: any) => {
	if (images?.length === 1) {
		return [
			{
				img: images[0].url,
				rows: 4,
				cols: 12,
			},
		];
	} else if (images?.length === 2) {
		return [
			{
				img: images[0].url,
				rows: 3,
				cols: 6,
			},
			{
				img: images[1].url,
				rows: 3,
				cols: 6,
			},
		];
	} else if (images?.length >= 3) {
		return [
			{
				img: images[0].url,
				rows: 4,
				cols: 6,
			},
			{
				img: images[1].url,
				rows: 2,
				cols: 6,
			},
			{
				img: images[2].url,
				rows: 2,
				cols: 6,
			},
		];
	}
};

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

const deleteUnit = (id: number | string) => DELETE(`/dashboard/properties/${id}`);

export default function Unitdetails({ location, rentType }: Props) {
	const { push } = useRouter();

	const photos = [
		{ src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', width: 800, height: 600 },
		{ src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', width: 1600, height: 900 },
	];
	const [index, setIndex] = useState(-1);
	const queryClient = useQueryClient();

	const params = useParams();
	console.log('params', params);
	const unitID = params?.unitId;
	const url = `/properties/${unitID}`;

	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.UNITDETAILS + unitID],
		queryFn: () => GET(url),
	});

	const unit = data; // Get the array of objects

	const handleToggleLike = () => {
		toggleLike({
			property_id: unit?.id,
		});
		queryClient.invalidateQueries({ queryKey: [keys.FAV] });
		queryClient.invalidateQueries({ queryKey: [keys.MOSTVIEWED] });
		queryClient.invalidateQueries({ queryKey: [keys.RECENTLYADDED] });
		queryClient.invalidateQueries({ queryKey: [keys.PROPERTIES] });
		queryClient.invalidateQueries({ queryKey: [keys.UNITDETAILS + unitID] });
	};

	const renderLocation = [unit?.city?.name, unit?.district?.name];
	const newlocation = unit?.city ? renderLocation?.join(', ') : '';

	const amenityData = [
		{ title: 'Kitchens', icon: <Room />, value: unit?.features?.kitchen && unit?.features?.kitchen + ' ' + '' },
		{ title: 'Lounges', icon: <Room />, value: unit?.features?.lounges && unit?.features?.lounges + ' ' + '' },
		{ title: 'bedrooms', icon: <Room />, value: unit?.features?.bedrooms && unit?.features?.bedrooms + ' ' + '' },
		{ title: 'bathrooms', icon: <Room />, value: unit?.features?.bathrooms && unit?.features?.bathrooms + ' ' + '' },
		{
			title: 'guest rooms',
			icon: <FrontSide />,
			value: unit?.features?.guest_rooms && unit?.features?.guest_rooms + ' ' + '',
		},
		{
			title: 'Floor',
			icon: <Room />,
			value: unit?.features?.floor?.toString() && stringifyNumber(unit?.features?.floor) + ' ' + 'Floor',
		},

		{ title: 'AC type', icon: <Room />, value: unit?.features?.ac_type && AcTypes[unit?.features?.ac_type] + ' ' + '' },

		{
			title: 'Parking',
			icon: <GroundFloor />,
			value: unit?.features?.parking?.toString() && ParkingTypes[unit?.features?.parking] + ' ' + '',
		},

		{ title: 'unit size', icon: <GroundFloor />, value: unit?.features?.unit_size },
		{
			title: 'year built',
			icon: <GroundFloor />,
			value: unit?.features?.year_built && unit?.features?.year_built + ' ' + '',
		},
		{
			title: 'Furnished Type',
			icon: <GroundFloor />,
			value: unit?.features?.is_furnished?.toString() && FurnishedTypes[unit?.features?.is_furnished] + ' ' + '',
		},
	];
	const amenities = [
		{
			title: 'Parking',
			icon: <GroundFloor />,
			value: true,
		},
		{
			title: 'Fireplace',
			icon: <FrontSide />,
			value: true,
		},
		{
			title: 'BBq Grill',
			icon: <FrontSide />,
			value: true,
		},
		{
			title: 'Shower',
			icon: <FrontSide />,
			value: true,
		},
		{
			title: 'Patio',
			icon: <FrontSide />,
			value: true,
		},
		{
			title: 'Pool',
			icon: <Room />,
			value: true,
		},
	];

	const images = unit?.images;

	const liteBoxImages = images?.map((img) => {
		return {
			src: img.url,
		};
	});

	const imagesList = generateImgList(images) || [];

	const handleDeleteUnit = () => {
		deleteUnit(unitID as string)
			.then(() => {
				globalToast('Unit Deleted Successful', 'success');
				queryClient.invalidateQueries({ queryKey: ['LISTEDPROPERTIES'] });
				queryClient.invalidateQueries({ queryKey: ['PROPERTIES'] });
				push('/properties');
			})
			.catch(() => {
				globalToast('Please try later', 'error');
			});
	};

	if (isLoading) {
		return <Loading />;
	} else
		return (
			<>
				<Container maxWidth="xl">
					<Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={1}>
						<Box column center width={'100%'}>
							<QuiltedImageList
								imagesList={imagesList}
								onClick={(index: number) => {
									setIndex(index);
								}}
							/>

							{index !== -1 ? (
								<Lightbox
									styles={{
										container: { backgroundColor: 'rgba(0, 0, 0, .8)' },
									}}
									plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
									index={index}
									slides={liteBoxImages}
									open={true}
									close={() => setIndex(-1)}
								/>
							) : null}
						</Box>

						<Grid item xs={12} md={8} height={'100hv'}>
							<UnitHeader
								id={unit?.id}
								handleToggleLike={handleToggleLike}
								liked={unit?.is_fav}
								logo={
									<SvgIcon
										sx={{
											height: '52px',
											width: { xs: '75px', md: '121px' },
										}}
										inheritViewBox>
										{xtenant.dashboardIcon?.url}
									</SvgIcon>
								}
								title={unit?.name || '--'}
								location={newlocation}
							/>
							<ConstructionStatus
								logo={
									<SvgIcon
										sx={{
											height: '14px',
											width: '35px',
										}}
										inheritViewBox>
										{xtenant.dashboardIcon?.url}
									</SvgIcon>
								}
								title={''}
								status={'Ready To Move'}
								managedBy={unit?.managed_by || '--'}
							/>
							<AboutUnit description={unit?.info || '--'} />

							<Grid item xs={12} md={4} display={{ xs: 'flex', md: 'none' }} mt={3}>
								<BuyNowCard price={'SAR ' + unit?.price || '--'} PriceType={rentType || 'monthly'} />
							</Grid>

							<FloorPlans floorFeatures={amenityData} area={unit?.features?.unit_size || '--'} />
							<Features Feature={amenities} />
							<UnitMap location={unit?.map} />
						</Grid>

						<Grid item xs={12} md={4} display={{ xs: 'none', md: 'flex', position: 'relative' }}>
							<Box sx={{ position: 'absolute', top: '30px', right: '10px' }}>
								<Button
									onClick={handleDeleteUnit}
									startIcon={<Delete sx={{ fill: '#FF4242' }} />}
									variant="outlined"
									color="error">
									Remove from Marketplace
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</>
		);
}
