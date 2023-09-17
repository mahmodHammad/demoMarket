import * as React from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import { Box } from '@/wrappers';
import { Footer, Navbar, LoginModal } from '@/component';
import AppLayout from '@/component/loggedInLayout/AppLayout';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
  title: 'Atar Market place',
  description:
    'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AuthProvider>
            {false ? (
              <AppLayout children={children} />
            ) : (
              <>
                <Navbar />
                <Box component="main">{children}</Box>
                <Footer />

                <LoginModal />
              </>
            )}
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
