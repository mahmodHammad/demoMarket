import { AtarColoredLogo, AtarWhiteLogo, FrontSide, GroundFloor, Room } from '@/assets';
import {
  AboutUnit,
  BuildingSchemeIcons,
  BuyNowCard,
  ConstructionStatus,
  Features,
  FeaturesAndAmenities,
  FloorPlans,
  OwnerCard,
  QuiltedImageList,
  UnitHeader,
  UnitMap,
} from '@/component';
import { Box, Button, Item } from '@/wrappers';
import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import logocolored from '@/assets/images/logocolored.png';
import floor from '@/assets/images/floor.png';
import PhotoAlbum from 'react-photo-album';

const photos = [{ src: '@/assets/images/photo1.png', width: 800, height: 600 }];

const floorFeatures = [
  { icon: <Room />, title: '3 room' },
  { icon: <FrontSide />, title: 'Front Side' },
  { icon: <GroundFloor />, title: 'Ground Floor' },
  { icon: <Room />, title: '3 room' },
  { icon: <Room />, title: '5 beds' },
];

const data = [
  { title: 'Pool', icon: <Room /> },
  { title: 'Room', icon: <FrontSide /> },
  { title: 'Front Side', icon: <GroundFloor /> },
  { title: 'Pool', icon: <Room /> },
  { title: 'Pool', icon: <Room /> },
];

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
  return (
    <>
      <Container maxWidth="xl">
        {/* <Box sx={{ mt: "30px" }}>
          <Button
            component={Link}
            href="/"
            size="large"
            sx={{
              color: "#CACACA",
            }}
          >
            Back
          </Button>
        </Box> */}

        <Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={1}>
          <QuiltedImageList />

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

{
  /* <OwnerCard
              avatar={"t"}
              title={"name"}
              body={"Property Name / Location"}
            ></OwnerCard> */
}
