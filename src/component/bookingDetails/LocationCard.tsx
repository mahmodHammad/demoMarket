import { Box, Button, Text } from '@/wrappers';
import React from 'react';
import MapsView from '../Maps/MapsView';
import MapAdress from '../Maps/MapAdress';
import MapReadOnly from '../Maps/MapReadOnly';

const LocationCard = ({ location }: { location: {} }) => {
	return (
		<>
			{location && (
				<Box
					sx={{
						// height: { xs: 'inherit', md: '300px' },
						mt: '52px',
						width: { xs: '300px', md: '100%' },
						// pt: '12px',
						borderRadius: '16px',
						// boxShadow: '0px 25px 60px -10px rgba(28, 39, 49, 0.12)',
						mb: '120px',
					}}>
					<Box
						sx={{
							height: '400px',
							width: '100%',
							position: 'relative',
							mt: '12px',
							borderRadius: '16px',
							overflow: 'hidden',
						}}>
						<MapReadOnly
							viewOnly={true}
							latLng={{ lat: Number(location?.latitude), lng: Number(location?.longitude) }}
						/>
					</Box>
					<Button
						size="small"
						variant="contained"
						component="a"
						target="_blank"
						href={location?.mapsLink}
						sx={{ position: 'absolute', mt: '-32px' }}>
						Open in Google Map
					</Button>
				</Box>
			)}
		</>
	);
};

export default LocationCard;
