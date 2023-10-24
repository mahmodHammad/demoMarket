import React from 'react';
import { Container, Item, Text } from '@/wrappers';
import { EmptyFavPage } from '@/assets';

export default function EmptyFavList() {
	return (
		<Container
			sx={{
				width: '100%',
				borderRadius: '16px',
				padding: '50px 31px',
				mb: '90px',
			}}>
			<Item xs={12} center>
				<EmptyFavPage sx={{ height: '190px', width: '100%' }} />
			</Item>
			<Item xs={12} center mt={'36px'}>
				<Text variant="h4">No favourites yet</Text>
			</Item>
			<Item xs={12} center sx={{ textAlign: 'center' }} mt={'8px'}>
				<Text variant="body">Tap on the heart to add to your favourites! Add activities to your favorites.</Text>
			</Item>
		</Container>
	);
}
