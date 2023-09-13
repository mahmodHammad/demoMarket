
'use client'
// import Languages from "@/Shared/Languages";
import { CssBaseline, InputAdornment, TextField, Toolbar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import SearchIcon from '@mui/icons-material/Search'

import DrawerContainer from "./Drawer";
import Notifications from "./Notifications";
import ProfileDropDown from "./ProfileDropDown";
import { Box, Container } from "@/wrappers/layouts";
import Button from "@/wrappers/Button";
import MarketPlace from "@/assets/icons/MarketPlace";

const drawerWidth: number = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  boxShadow: "none",
  minHeight: "90px",
  maxHeight: "200px",
  justifyContent: "center",
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: "100px",
    width: `calc(100% - 100px)`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  padding: "0 1rem 1rem 2rem",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: "none",
  overflowX: "hidden",
  width: `100px`,
  padding: "2rem",
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    width: drawerWidth,
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    width: "100px",
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
  currentLang?: any;
  changeLang?: Function;
}

export default function AppLayout(props: Props) {

  // const { t, i18n } = useTranslation();



  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const closeDrawer = () => {
    setMobileOpen(false);
    setOpen(false);
  };
  // if (isFetchingProfile) return <LoadingPage />
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            backgroundColor: "#fff",
            flexWrap: "wrap",
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              size="small"
              sx={{
                width: '366px'
              }}
              variant="outlined"
              placeholder="Search"
              // onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: '#969798' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              // gap: 5,
              alignItems: "center",
              justifyContent: "flex-end",
              // justifyContent: "space-around",
              // flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                // backgroundColor: "gray",
                justifyContent: "flex-end",
                display: "flex",
                mr: "48px",
              }}
            >
              <Button variant="contained" endIcon={<MarketPlace />}>
                Marketplace
              </Button>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: '48px'
              }}
            >
              {/* <Box sx={{ mr: "28px" }}>
                <Languages />
              </Box> */}
              <Box
                xcenter
                sx={{
                  mr: "20px",
                  alignItems: "end",
                }}
              >
                <Notifications />
              </Box>

              <Box>
                <ProfileDropDown />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* <DrawerMobile
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerContainer open={mobileOpen} handleDrawerToggle={closeDrawer} />
      </DrawerMobile> */}

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <DrawerContainer open={open} handleDrawerToggle={closeDrawer} />
      </Drawer>

      <Box
        component="main"
        sx={{
          // backgroundColor: "#F346F9",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // minHeight: "calc(100vh )",
          // height: "100%",
          // background: "red",
          borderRadius: "4px",
          marginTop: { xs: "70px", sm: "70px", md: "70px" },
          overflow: "auto",
          position: "relative",
          // paddingBottom:"30px",
        }}
      >
        <Container
          sx={{
            // backgroundColor: "#fff",
            alignItems: "center",
            mb: 4,
            borderRadius: "4px",
          }}
        >
          {/* <Breadcrumbs
            routes={
              [
                ...routes.filter((r) => r?.children).map((r) => r.children),
              ].flat() as unknown as RoutePathDefinition[]
            }
          /> */}
        </Container>
        <div style={{ backgroundColor: '#FAFCFD', height: '100%' }}>
          {props.children}
        </div>
        {/* <Outlet /> */}
      </Box>
    </Box>
  );
}
