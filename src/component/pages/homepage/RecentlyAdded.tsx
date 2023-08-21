"use client";
import { Box, Container, Item } from "@/wrappers";
import React from "react";

import HomeTitleBody from "./HomeTitleBody";
import NeighbourhoodCard from "@/component/cards/NeighbourhoodCard";
import neigbourhoodCover from "@/assets/images/neigbourhoodCover.png";
import neibourhoodcover2 from "@/assets/images/neibourhoodcover2.png";
import Carousel from "@/component/Carousel";
import HomeCardsContainer from "./HomeCardsContainer";

export default function RecentlyAdded() {
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
    <HomeCardsContainer
      data={data}
      title="Recently Added"
      body="Discover our exclusive selection "
      link="/"
    />
  );
}
