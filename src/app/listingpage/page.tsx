"use client";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Container as GridContainer,
  Item,
  Text,
} from "@/wrappers";
import SearchIcon from "@mui/icons-material/Search";
import {
  Collapse,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Slider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function valuetext(value: number) {
  return `${value}°C`;
}
export default function Home() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} sx={{ mt: "5px", p: "26px" }}>
        <Grid item xs={4} md={4} display={{ xs: "none", md: "flex" }}>
          <Box
            sx={{
              width: "400px",
              height: "2173px",
              top: "160px",
              left: "100px",
              padding: "16px",
              borderRadius: " 16px",
              gap: "16px",
              boxShadow: "0px 25px 60px -10px #1C27311F",
            }}
          >
            <Box row xbetween>
              {" "}
              <Text variant="h5">Filter</Text>
              <Button> Apply Filter</Button>
            </Box>
            <Paper
              component="form"
              sx={{
                mt: "10px",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search "
                inputProps={{}}
              />
            </Paper>

            <List
              sx={{
                width: "100%",

                bgcolor: "background.paper",
                mt: "10px",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Budget" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Box sx={{ width: "300px" }}>
                    {" "}
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </Box>
                </List>
              </Collapse>
            </List>
          </Box>
        </Grid>

        <Grid item xs={8} md={8} display={{ xs: "none", md: "flex" }}>
          <Box width={"100%"} height={"100hv"}>
            <Text variant="h4">Property in Saudi for rent </Text>
          </Box>
        </Grid>
      </Grid>
    </Container>

    // <Box xcenter>
    //   <Container maxWidth="xl" column xstart>
    //     <Box sx={{ mt: "30px" }}>
    //       <Button
    //         component={Link}
    //         href="/"
    //         size="large"
    //         sx={{
    //           color: "#CACACA",
    //         }}
    //       >
    //         Back
    //       </Button>
    //     </Box>
    //     <Box xbetween sx={{ mt: "25px" }}>
    //       <Text variant="h3">
    //         Neighbourhoods
    //         <Text variant="body" component="span" sx={{ display: "inline" }}>
    //           ({data.length})
    //         </Text>
    //       </Text>
    //       <Button
    //         variant="outlined"
    //         sx={{
    //           borderColor: "#E3E3E3",
    //           color: "#232425",
    //         }}
    //       >
    //         Sort By
    //       </Button>
    //     </Box>
    //     <GridContainer
    //       xstart
    //       spacing={4}
    //       sx={{ pb: { xs: "90px", md: "164px" }, mt: "53px" }}
    //     >
    //       {data.map((d, index) => (
    //         <Item xs={4} key={index}>
    //           <NeighbourhoodCard title={d.title} img={d.img} link={d.link} />
    //         </Item>
    //       ))}
    //     </GridContainer>
    //   </Container>
    // </Box>
  );
}
