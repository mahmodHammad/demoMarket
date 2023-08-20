"use client";
import theme from "@/ThemeRegistry/theme";
import { Box } from "@/common";
import { Container } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        color: "#fff",
        height: "100px",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">This is footer</Container>

      <Box column></Box>
    </Box>
  );
}
