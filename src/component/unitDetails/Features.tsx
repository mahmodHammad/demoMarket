import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import Image from 'next/image';
import { Room, ThreeD } from '@/assets';
import { Grid } from '@mui/material';
import FeaturesAndAmenities from './FeaturesAndAmenities';

interface proptypes {
	Feature: [{ title: string; icon: React.ElementType; value?: string | number | boolean | null }];
}
// React.ReactNode;
export default function Features({ Feature }: proptypes) {
	return (
		<>
			<Text variant="h4" mt={'40px'}>
				Features & amenities
			</Text>
			<Grid container>
				{Feature.map((d, index) => {
					if (d?.value === null || d?.value === 'undefined' || d?.value === undefined) return null;
					return (
						<Grid item key={index}>
							<FeaturesAndAmenities title={d.title} icon={d.icon} value={d.value} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}
