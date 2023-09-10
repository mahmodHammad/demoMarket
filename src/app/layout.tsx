'use client';

import React, { useState } from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import { Box } from '@/wrappers';
import { Footer, Navbar, LoginModal } from '@/component';

export const metadata = {
	title: 'Atar Market place',
	description:
		'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loginModalOpen, setLoginModalOpen] = useState(false);

	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>
					<Navbar setLoginModalOpen={setLoginModalOpen} />
					<Box component='main'>{children}</Box>
					<Footer />

					<LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
				</ThemeRegistry>
			</body>
		</html>
	);
}
