import * as React from 'react';
import ThemeRegistry from '@/ThemeRegistry/ThemeRegistry';
import { Box } from '@/wrappers';
// import { Footer, Navbar, LoginModal } from '@/component';
import AppLayout from '@/component/loggedInLayout/AppLayout';

export const metadata = {
  title: 'Atar Market place',
  description:
    'Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* Looged In layout */}
          <AppLayout>{children}</AppLayout>

          {/* Looged Out layout */}
          {/* <Navbar/>
					<Box component='main'>{children}</Box>
					<Footer /> */}

          {/* // TODO: move the login modal, and create Context API to mange its state away from layout because we can't handle state management here  */}
          {/* <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} /> */}
        </ThemeRegistry>
      </body>
    </html>
  );
}
