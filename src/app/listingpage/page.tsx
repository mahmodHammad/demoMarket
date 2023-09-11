"use client";

import React, { useState } from "react";
import { Box, Text, Button } from "@/wrappers";
import { Grid, Container, ButtonBase, IconButton } from "@mui/material";
import Link from "next/link";
import { PropertyFilters, UnitsCard } from "@/component";

import HomeCardsContainer from "@/component/pages/homepage/HomeCardsContainer";
import { Search, Location } from "@/assets";
import NeighbourhoodCard from "@/component/cards/NeighbourhoodCard";
import neigbourhoodCover from "@/assets/images/neigbourhoodCover.png";
import neibourhoodcover2 from "@/assets/images/neibourhoodcover2.png";

interface Props {}

export default function page(props: Props) {
  const [isRent, setIsRent] = useState(false);

  const handleClick = () => {
    setIsRent(false);
  };

  const handleClickRent = () => {
    setIsRent(true);
  };

  const data = [
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
  ];
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ mt: "5px", pt: "26px" }} mb={15}>
          {/* Abdulrahman */}

          <Grid item xs={12} md={4} display={{ xs: "none", md: "flex" }}>
            <PropertyFilters />
          </Grid>

          {/* Abdullah */}

          <Grid
            item
            xs={12}
            md={8}
            height={"100hv"}
            display={{ xs: "none", md: "flex" }}
          >
            <Box column width={"100%"}>
              <Text variant="h4">Properties in Saudi Arabia</Text>
              <Box row mt={"25px"}>
                <ButtonBase onClick={handleClick}>
                  <Box
                    center
                    sx={{
                      width: { xs: "50px", md: "90px" },
                      height: { xs: "25px", md: "39px" },

                      backgroundColor: isRent ? null : "#008EA5",
                      borderRadius: {
                        xs: "8px 8px 0px 0px",
                        md: "15px 15px 0px 0px",
                      },
                    }}
                  >
                    <Text
                      variant="small"
                      sx={{ color: isRent ? null : "#FFFFFF" }}
                    >
                      Buy
                    </Text>
                  </Box>
                </ButtonBase>

                <ButtonBase onClick={handleClickRent}>
                  <Box
                    center
                    sx={{
                      width: { xs: "50px", md: "90px" },
                      height: { xs: "25px", md: "39px" },
                      backgroundColor: isRent ? "#008EA5" : null,
                      borderRadius: {
                        xs: "8px 8px 0px 0px",
                        md: "15px 15px 0px 0px",
                      },
                    }}
                  >
                    <Text
                      variant="small"
                      sx={{ color: isRent ? "#FFFFFF" : null }}
                    >
                      Rent
                    </Text>
                  </Box>
                </ButtonBase>
              </Box>
              <Box
                row
                xbetween
                sx={{
                  height: "102px",
                  borderRadius: "0px, 20px, 20px, 20px",
                  boxShadow: " 0px 25px 40px -10px #1C273114",
                  px: "25px",
                  py: "28px",
                }}
              >
                <Box column>
                  <Text variant="label">Location</Text>
                </Box>
                <Box row>
                  <Box
                    width={{ md: "54px" }}
                    height={{ md: "54px" }}
                    bgcolor={"#EBF6F8"}
                    borderRadius={"15px"}
                    center
                    mr={"18px"}
                  >
                    <IconButton size="large">
                      <Location />
                    </IconButton>
                  </Box>
                  <Box
                    width={{ md: "54px" }}
                    height={{ md: "54px" }}
                    bgcolor={"#008EA5"}
                    borderRadius={"15px"}
                    center
                  >
                    <IconButton size="large">
                      <Search />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <Grid container mt={"47px"} spacing={"28px"}>
                {data.map((d, index) => (
                  <Grid item xs={6}>
                    <UnitsCard
                      title={d.title}
                      img={d.img}
                      link={d.link}
                      price={""}
                      area={""}
                      location={""}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
