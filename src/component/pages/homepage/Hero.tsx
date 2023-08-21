import { Box, Text } from "@/wrappers";
import React from "react";
import Image from "next/image";
import heroBG from "@/assets/images/herobg.png";
export default function Hero() {
  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 120px)", md: "calc(100vh - 100px)" },
        position: "relative",
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
        priority
        alt="houses and properties for rent"
        src={heroBG}
        quality={100}
        placeholder="blur"
      />

      <Box
        sx={{
          position: "absolute",
          zIndex: 100,
          width: "100%",
          height: "100%",
        }}
        center
        column
      >
        <Box sx={{ maxWidth: { xl: "720px", md: "60%", xs: "90%" } }}>
          <Text
            variant="h2"
            align="center"
            sx={{ color: "#fff" }}
            component="h1"
          >
            Buy, rent, or sell your property easily
          </Text>
          <Text
            variant="body"
            align="center"
            sx={{
              mt: { md: "26px", xs: "16px" },
              color: "#fff",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Neque augue dictum nullam
            sollicitudin morbi mauris ornare bibendum condimentum.Lorem ipsum
            dolor sit amet consectetur. Neque augue dictum nullam sollicitudin
            morbi mauris ornare bibendum condimentum.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
// <Box
//   sx={{
//     mt: { md: "90px", xs: "50px" },
//     width: { xs: "85%", lg: "900px" },
//     height: {xs:"70px",lg:"102px"},
//     borderRadius: "20px 20px 20px 20px",
//     background: "rgba(255, 255, 255, 0.70)",
//     boxShadow: "0px 30px 60px -15px rgba(143, 144, 188, 0.15)",
//     backdropFilter: "blur(10px)",
//   }}
// >.</Box>
