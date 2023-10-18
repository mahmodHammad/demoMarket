import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import Image from 'next/image';
import { Room, ThreeD } from '@/assets';
import { Card, Grid } from '@mui/material';
import FeaturesAndAmenities from './FeaturesAndAmenities';
import BuildingSchemeIcons from './BuildingSchemeIcons';

interface proptypes {
	Feature: [{ title: string; icon: React.ElementType; value?: string | number | boolean | null }];
}
// React.ReactNode;
export default function UnitSpecifications({ Feature }: proptypes) {
	return (
		<>
			<Text variant="h4" mt={'52px'} mb={'16px'}>
				Unit Specifications
			</Text>
			<Card
				sx={{
					// mt: 8,
					p:"16px",
					boxShadow: '0px 6px 12px 0px rgba(28, 39, 49, 0.05)',
				}}>
				<Grid container>
					{Feature?.map((item: any, index: any) => {
						if (item?.value === null || item?.value === 'undefined' || item?.value === undefined) return null;
						return (
							<Grid item xs={4} key={index}>
								<BuildingSchemeIcons title={item?.title} icon={item?.icon} value={item?.value!} />
							</Grid>
						);
					})}
					{/* {Feature.map((d, index) => {
					if (d?.value === null || d?.value === 'undefined' || d?.value === undefined) return null;
					return (
						<Grid item key={index}>
							<FeaturesAndAmenities title={d.title} icon={d.icon} value={d.value} />
						</Grid>
					);
				})} */}
				</Grid>
			</Card>
		</>
	);
}
