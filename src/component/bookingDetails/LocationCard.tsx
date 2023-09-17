import { Box, Text } from '@/wrappers';
import React from 'react';
import MapsView from '../Maps/MapsView';
import MapAdress from '../Maps/MapAdress';

const LocationCard = () => {
  return (
    <Box
      sx={{
        height: '471px',
        p: '12px',
        borderRadius: '16px',
        boxShadow: ' 0px 25px 60px -10px rgba(28, 39, 49, 0.12)',
      }}>
      <Text mt="12px" variant="h4" s={24}>
        {'Location '}
      </Text>
      <Box
        sx={{
          height: '245px',
          width: '100%',
          position: 'relative',
          mt: '12px',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
        <MapsView viewOnly={false} />
      </Box>
      <MapAdress
        title={'Riyadh saudi arabia'}
        body={'As Sahafah, Olaya St. 6531, 3059 Riyadh 13321'}
        mapsLink={'unitData?.maps?.mapsLink'}
      />
    </Box>
  );
};

export default LocationCard;
