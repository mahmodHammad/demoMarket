import * as React from 'react';
import TanstackProvider from '@/utils/TanstackProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script'

export const metadata = {
	title: 'Atar Market place',
	description:
		'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
			<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEK-oLvhO9QvNn1Ka6nWZ5NUvJqQQRMsQ&libraries=places,geometry" />
				<AuthProvider>
					<ToastContainer />
					<TanstackProvider>{children}</TanstackProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
