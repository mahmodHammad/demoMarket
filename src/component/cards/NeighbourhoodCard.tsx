import React from "react";
import { Box, Text } from "@/wrappers";
import Image from "next/image";

interface proptypes {
  img: string;
  title: string;
  link: string;
}
export default function NeighbourhoodCard({ img, title, link }: proptypes) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "157px", md: "273px" },
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "bottom",
          position: "absolute",
        }}
        component={Image}
        alt="houses and properties for rent"
        src={img}
      />
      <Text
        variant="h5"
        sx={{
          color: "#fff",
          bottom: "20px",
          left: "20px",
          position: "absolute",
          fontSize: { xs: "14px", md: "24px" },
        }}
      >
        {title}
      </Text>
    </Box>
  );
}
