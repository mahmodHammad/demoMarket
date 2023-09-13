import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Button, Container } from "@mui/material";
import { Text } from "@/wrappers";
import { Hero, Neighbourhoods } from "@/component";
import RecentlyAdded from "@/component/pages/homepage/RecentlyAdded";
import MostViewed from "@/component/pages/homepage/MostViewed";

export default function Home() {
  return (
    <Box>
      {/* Logged In component */}
        {/* <div style={{}}>
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
          hello
        </div> */}

      {/* Logged out component */}
      <Hero />
      <Container maxWidth="xl" sx={{ pb: { xs: "90px", md: "164px" } }}>
        <Neighbourhoods />
        <RecentlyAdded />
        <MostViewed />
      </Container>
    </Box>
  );
}
