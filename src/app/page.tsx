import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { Text } from "@/common";

export default function Home() {
  return (
    <Box>
      <Button variant="contained"  size="small">small  </Button> <br/>
      <br/>
      <Button variant="contained"  size="medium">medium  </Button> 
      <br/><br/>
      <Button variant="contained"  size="large">large  </Button>
      <br/><br/>
     
      <Text variant="h1">Helo typo h1</Text>
      <Text variant="h2">Helo typo h2</Text>
      <Text variant="h3">Helo typo h3</Text>
      <Text variant="h4">Helo typo h4</Text>
      <Text variant="h5">Helo typo h5</Text>
      <Text variant="body" >Helo body</Text><br/>
      <Text variant="label">label</Text><br/>
      <Text variant="small">small</Text><br/>
      <Text variant="caption">caption</Text> <br/>
    </Box>
  );
}
