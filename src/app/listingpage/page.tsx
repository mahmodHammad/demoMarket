"use client";

import React, { useState } from "react";
import { Box, Text, Button } from "@/wrappers";
import { Grid, Container, ButtonBase, IconButton } from "@mui/material";
import Link from "next/link";
import { PropertyFilters, SearchBox, UnitsCard } from "@/component";

import HomeCardsContainer from "@/component/pages/homepage/HomeCardsContainer";
import { Search, Location } from "@/assets";
import NeighbourhoodCard from "@/component/cards/NeighbourhoodCard";
import neigbourhoodCover from "@/assets/images/neigbourhoodCover.png";
import neibourhoodcover2 from "@/assets/images/neibourhoodcover2.png";

interface Props {}

export default function page(props: Props) {
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

          <Grid
            item
            xs={12}
            md={4}
            display={{ xs: "none", md: "flex", height: "fit-content" }}
          >
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
              <SearchBox />
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
