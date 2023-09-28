import { Item } from '@/wrappers';
import { Grid } from '@mui/material';
import React from 'react';
import MapContainer from '@/component/Maps/Maps';

export default function page() {
	return (
		<>
			<Grid container>
				<Item
					sx={{
						position: 'relative',
						height: '80vh',
						width: '100%',
					}}>
					<MapContainer />
				</Item>
			</Grid>
		</>
	);
}
