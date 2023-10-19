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
						// height: '471px',
						p: '12px',
						borderRadius: '16px',
						boxShadow: '0px 25px 60px -10px rgba(28, 39, 49, 0.12)',
						mb: '120px',
					}}>
					<Text variant="h4" mt={'40px'} mb={'16px'}>
						Map
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
						<MapReadOnly viewOnly={true} latLng={{ lat: location?.latitude, lng: location?.longitude }} />
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
					{/* <MapAdress
				title={'Riyadh saudi arabia'}
				body={'As Sahafah, Olaya St. 6531, 3059 Riyadh 13321'}
				mapsLink={'unitData?.maps?.mapsLink'}
			/> */}
				</Box>
			)}
		</>
	);
};

export default LocationCard;
