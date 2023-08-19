import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { Text } from "@/common";
import { Hero } from "@/component";

export default function Home() {
  return (
    <Box>
      <Hero/>
    </Box>
  );
}
