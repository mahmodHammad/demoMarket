"use client";
import { Box, Container, Item } from "@/wrappers";
import React from "react";

import HomeTitleBody from "./HomeTitleBody";
import NeighbourhoodCard from "@/component/cards/NeighbourhoodCard";
import neigbourhoodCover from "@/assets/images/neigbourhoodCover.png";
import neibourhoodcover2 from "@/assets/images/neibourhoodcover2.png";
import Carousel from "@/component/Carousel";

export default function Neighbourhoods() {
  const data = [
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
    { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
  ];
  return (
    <Box
      sx={{
        mt: "200px",
      }}
    >
      <HomeTitleBody
        title="Neighbourhoods"
        body="There is something everyday"
        link="/"
      />
      <Carousel
        items={data.map((d, index) => (
          <Box
            key={index}
            sx={{
              pr: "20px",
              display: "flex",
              width: { xs: "230px", md: "400px" },
            }}
          >
            <NeighbourhoodCard title={d.title} img={d.img} link={d.link} />
          </Box>
        ))}
      />
    </Box>
  );
}
