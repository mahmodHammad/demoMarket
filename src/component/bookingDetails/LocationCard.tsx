import { Box, Button, Text } from '@/wrappers';
import React from 'react';
import MapReadOnly from '../Maps/MapReadOnly';
import { LocationIcon } from '@/assets';
import Link from 'next/link';

const LocationCard = ({ location, hasLayout = false }: { location: any; hasLayout?: boolean }) => {
	console.log('location', location)
	return (
		<>
			{location && (
				<Box
					sx={{
						mt: '26px',
						width: { xs: '300px', md: '100%' },
						borderRadius: '16px',
						mb: '120px',
					}}>
					<Box
						sx={{
							width: '100%',
							height: !hasLayout ? '400px' : null,
							position: 'relative',
							mt: '12px',
							borderRadius: '16px',
						}}>
						<LocationCardLayout hasLayout={hasLayout} location={location}>
							<MapReadOnly viewOnly latLng={{ lat: Number(location?.latitude), lng: Number(location?.longitude) }} />
							{!hasLayout && (
								<Button
									size="small"
									variant="contained"
									component={Link}
									target="_blank"
									href={location?.mapsLink}
									sx={{ position: 'absolute', mt: '-32px' }}>
									Open in Google Map
								</Button>
							)}
						</LocationCardLayout>
					</Box>
				</Box>
			)}
		</>
	);
};

const LocationCardLayout = ({
	children,
	location,
	hasLayout = false,
}: {
	children: React.ReactNode;
	location: any;
	hasLayout: boolean;
}) => {
	if (!hasLayout) return <>{children}</>;
	return (
		<Box
			column
			ycenter
			sx={{
				padding: '16px',
				boxShadow: '0px 25px 60px -10px rgba(28, 39, 49, 0.12)',
				borderRadius: '16px',
			}}>
			<Text variant="h5" mb={'12px'} alignSelf={'flex-start'}>
				Location
			</Text>
			<Box fullWidth height={'245px'} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
				{children}
			</Box>
			<Box fullWidth row ycenter mt={'37px'}>
				<LocationIcon sx={{ width: '24px', height: '24px', marginRight: '8px' }} />
				<Box column>
					<Text variant="h6">{location?.districtName}</Text>
					<Text variant="body1">{location?.formattedAddress}</Text>
				</Box>
			</Box>

			<Button
				size="large"
				variant="text"
				component="a"
				target="_blank"
				href={location?.mapsLink}
				sx={{ marginTop: '16px' }}>
				View on Google Maps
			</Button>
		</Box>
	);
};

export default LocationCard;
