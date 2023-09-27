'use client';

import * as React from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import AppLayout from '@/component/loggedInLayout/AppLayout';

export const metadata = {
	title: 'Visitor dashboard',
	description:
		'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeRegistry>
			<AppLayout type="visitor">{children}</AppLayout>
		</ThemeRegistry>
	);
}
