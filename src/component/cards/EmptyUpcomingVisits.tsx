import React from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import UpcomingVisitPlaceholder from '@/assets/icons/UpcomingVisitPlaceholder';
import Link from 'next/link';

export default function EmptyUpcomingVisits() {
	return (
		<Container
			sx={{
				width: '100%',
				borderRadius: '16px',
				boxShadow: '0px 6px 12px 0px rgba(28, 39, 49, 0.05)',
				padding: '16px 31px',
			}}>
			<Item xs={12} center>
				<UpcomingVisitPlaceholder sx={{ height: '40px', width: '55px' }} />
			</Item>
			<Item xs={12} center mt={'16px'}>
				<Text variant="label">No Upcoming Visit</Text>
			</Item>
			<Item xs={12} center sx={{ textAlign: 'center' }} mt={'8px'}>
				<Text variant="small">
					There are no upcoming visits.You can create a new visit by clicking on the Book visit button
				</Text>
			</Item>
			<Item xs={12} center sx={{ textAlign: 'center' }} mt={'16px'}>
				<Button
					variant="outlined"
					component={Link}
					href="/favourites"
					sx={{
						fontWeight: 700,
						width: '50%',
					}}>
					Book Visit
				</Button>
			</Item>
		</Container>
	);
}
