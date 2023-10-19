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
				// backgroundColor: '#1F448B14',
				my: '24px',
			}}>
			{/* <iframe
					src={`https://maps.google.com/maps?q='+${location?.latitude}+','+${location?.longitude}+'&hl=es&z=14&amp;output=embed`}
					// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4034982404655!2d46.5978877403667!3d24.78163324849783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee576c8376bdf%3A0x455d182b3513cd10!2zQXRhciB8INij2KrYp9ix!5e0!3m2!1sen!2ssa!4v1693150880141!5m2!1sen!2ssa"
					width="100%"
					height={'276px'}
					style={{ border: 0, borderRadius: '8px', display: 'block' }}
					// allowfullscreen=""
					loading="lazy"
					// referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			*/}
			
			<LocationCard location={location} />
		</Box>
	);
}
