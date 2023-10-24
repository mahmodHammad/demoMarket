import React from 'react';
import { Container, Item, Text } from '@/wrappers';
import { NoSearchResults } from '@/assets';

export default function EmptyListingPage() {
	return (
		<Container
			sx={{
				width: '100%',
				borderRadius: '16px',
				padding: '60px 31px',
				mb: '90px',
			}}>
			<Item xs={12} center>
				<NoSearchResults sx={{ height: '190px', width: '100%', filter:"grayscale(1)" }} />
			</Item>
			<Item xs={12} center mt={'36px'}>
				<Text variant="h4">No result found</Text>
			</Item>
			<Item xs={12} center sx={{ textAlign: 'center' }} mt={'8px'}>
				<Text variant="body">Couldn't find anything.Try searching for something else</Text>
			</Item>
		</Container>
	);
}
