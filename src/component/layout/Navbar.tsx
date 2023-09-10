"use client";
import { AtarWhiteLogo, Menu as MenuIcon } from "@/assets";
import { Button, Text } from "@/wrappers";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = ["Login", "Signup"];

type PropsTypes = {
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ResponsiveAppBar({ setLoginModalOpen }: PropsTypes) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            height: { md: "100px", xs: "72px" },
          }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <AtarWhiteLogo
              sx={{
                height: "52px",
                width: "133px",
              }}
            />
          </Box>

          <Box
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            <AtarWhiteLogo
              sx={{
                height: "40px",
                width: "103px",
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box>
              <Button
                component={Link}
                href="/login"
                onClick={() => {
                  setLoginModalOpen(true);
                  handleCloseNavMenu()
                }}
                sx={{ color: "#fff", fontSize: "20px", mr: "12px" }}
                size="medium"
              >
                Login
              </Button>
              <Button
                component={Link}
                href="/signup"
                onClick={handleCloseNavMenu}
                size="medium"
                variant="outlined"
                whiteborder
                sx={{ fontSize: "20px" }}
              >
                Signup
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Login or signup user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Text textAlign="center">{page}</Text>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
