import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import Image from 'next/image';
import { ThreeD } from '@/assets';
import { Grid, Link } from '@mui/material';
import FeaturesAndAmenities from './FeaturesAndAmenities';
import LocationCard from '../bookingDetails/LocationCard';

interface proptypes {
	location?: any;
}
export default function UnitMap({ location }: proptypes) {
	return (
		<Box
			sx={{
				borderRadius: '16px',
				mt: '44px',
			}}>
			<LocationCard location={location} />
		</Box>
	);
}
