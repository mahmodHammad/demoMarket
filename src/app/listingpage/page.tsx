"use client";
import Link from "next/link";
import { Box, Container, Container as GridContainer, Text } from "@/wrappers";
import { Grid } from "@mui/material";

import React from "react";

import HomeCardsContainer from "@/component/pages/homepage/HomeCardsContainer";

export default function Home() {
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
          ></Box>
        </Grid>

        <Grid item xs={8} md={8} display={{ xs: "none", md: "flex" }}>
          <Box width={"100%"} height={"100hv"}>
            <Text variant="h4">Property in Saudi for rent </Text>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
