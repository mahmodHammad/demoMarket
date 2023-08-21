import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Button, Container } from "@mui/material";
import { Text } from "@/wrappers";
import { Hero, Neighbourhoods } from "@/component";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Container maxWidth="xl" sx={{ pb: "164px" }}>
        <Neighbourhoods />
      </Container>
    </Box>
  );
}
