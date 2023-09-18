import * as React from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import { Box } from '@/wrappers';
import { Footer, Navbar } from '@/component';
// import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';

export const metadata = {
	title: 'Atar Market place',
	description:
		'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
	// generator: 'marketplace',
	// applicationName: 'atar marketplace',
	// referrer: 'origin-when-cross-origin',
	// keywords: ['rent', 'property', 'house', 'saudi', 'units', 'marketplace', 'atar'],
	// authors: [{ name: 'Atar', url: 'https://atarcloud.com/' }],
	// colorScheme: 'light',
	// creator: 'Atar',
	// publisher: 'Atar dev team',
	// formatDetection: {
	// 	email: false,
	// 	address: false,
	// 	telephone: false,
	// },
	// openGraph: {
	// 	title: 'Market place',
	// 	description:
	// 		'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
	// 	url: 'https://atarmarket.vercel.app/',
	// 	siteName: 'market place',
	// 	images: [
	// 		{
	// 			url: neibourhoodcover2,
	// 			width: 800,
	// 			height: 600,
	// 		},
	// 		{
	// 			url: neibourhoodcover2,
	// 			width: 1800,
	// 			height: 1600,
	// 			alt: 'My custom alt',
	// 		},
	// 	],
	// 	locale: 'en_US',
	// 	type: 'website',
	// },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// const [loginModalOpen, setLoginModalOpen] = useState(false);

	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					{/* Looged In layout */}
					{/* <AppLayout children={children}/> */}

					{/* Looged Out layout */}
					<Navbar />
					<Box component="main">{children}</Box>
					<Footer />

					{/* // TODO: move the login modal, and create Context API to mange its state away from layout because we can't handle state management here  */}
					{/* <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} /> */}
				</ThemeRegistry>
			</body>
		</html>
	);
}
