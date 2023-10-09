import * as React from 'react';
import TanstackProvider from '@/utils/TanstackProvider';

export const metadata = {
	title: 'Atar Market place',
	description:
		'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<TanstackProvider>{children}</TanstackProvider>
			</body>
		</html>
	);
}
