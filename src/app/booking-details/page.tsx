import { AtarColoredLogo } from '@/assets';
import {
  BookingDetails_timedate,
  BookingDetails_uhitHeader,
  BookingDetailsInfo,
  BuyNowCard,
  date,
  QuiltedImageList,
} from '@/component';
import { Box, Button, Item } from '@/wrappers';
import { Card, Container, Grid } from '@mui/material';
import Link from 'next/link';
import QR from '@/assets/images/QR.png';

import React from 'react';
import { Text } from '@/wrappers';
import Image from 'next/image';
import MapsView from '@/component/Maps/MapsView';
import MapAdress from '@/component/Maps/MapAdress';
const photos = [{ src: '@/assets/images/photo1.png', width: 800, height: 600 }];

interface Props {
  id?: string;
  photos?: any;
  propertyName?: string;
  logo?: any;
  location?: string;
  date?: string;
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
const page = ({
  id,
  logo,
  photos,
  propertyName,
  location,
  date,
  managedBy,
  rentPrice,
  rentType,
  aboutUnit,
  floorPlansCard,
  featuresAmenities,
  floorFeatures,
  map,
}: Props) => {
  return (
    <>
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
          <Text variant="h4">Booking Details</Text>
          <Grid container spacing={3} mb={1}>
            <Grid item xs={12} md={8} height={'100hv'}>
              <QuiltedImageList />
              <BookingDetails_uhitHeader
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
              <BookingDetails_timedate
                logo={
                  <AtarColoredLogo
                    sx={{
                      height: '14px',
                      width: '35px',
                    }}
                  />
                }
                title={''}
                date={date || 'Today at 11:00 PM'}
              />
              <BookingDetailsInfo />
              <Box column mt={'24px'}>
                <Text variant="h5">QR Code</Text>
                <Text variant="body1">Scan QR Code to get booking details</Text>
                <Box
                  mt={'16px'}
                  sx={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                  component={Image}
                  src={QR}
                />
              </Box>
              <Box row gap={'40px'} m="25px">
                <Button
                  variant="outlined"
                  component={Link}
                  color="error"
                  href="/"
                  sx={{
                    mt: '24px',
                    height: '52px',
                    padding: '12px 24px',
                    width: '255px',
                    borderRadius: '8px',
                  }}>
                  Cancel Booking
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  href="/"
                  sx={{
                    mt: '24px',
                    height: '52px',
                    padding: '12px 24px',
                    width: '255px',
                    borderRadius: '8px',
                  }}>
                  Edit Booking
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} height={'518px'} display={{ xs: 'none', md: 'flex' }}>
              <Card
                sx={{
                  padding: '12px',
                }}>
                <Text s={24}>{'Location Details'}</Text>
                <Box
                  sx={{
                    height: '240px',
                    width: '100%',
                    position: 'relative',
                    mt: '8px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}>
                  <MapsView mapData={unitData?.maps} viewOnly={true} />
                </Box>
                <MapAdress
                  title={unitData?.maps?.districtName}
                  body={unitData?.maps?.formattedAddress}
                  mapsLink={unitData?.maps?.mapsLink}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default page;
