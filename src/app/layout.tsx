import * as React from "react";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import { Box } from "@/common";
import { Footer, Navbar } from "@/component";

export const metadata = {
  title: "Atar Market place",
  description:
    "Property Portal Explore Our Wide Range of Properties for Sale and Rentals in Saudi arabia, Golf, and middle east and more Verified Listings: Apartments, Villas, Houses Find Your Perfect Appartment their",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Box
            component="main"
            sx={{
              pt: "80px",
              pl: "20px",
            }}
          >
            {children}
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
