import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import { Button } from "@/common";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const DRAWER_WIDTH = 240;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar
              sx={{
                backgroundColor: "background.primary",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" noWrap component="div" color="white">
                Logo
              </Typography>

              <Box>
                <Button sx={{ color: "#fff" }} size="large">
                  Login
                </Button>
                <Button size="large" variant="outlined" whiteborder>
                  Signup
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Box
            component="main"
            sx={{
              pt: "80px",
              pl:"20px"
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
