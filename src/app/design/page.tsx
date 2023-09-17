import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { Box } from "@mui/material";
import { Text, Button } from "@/wrappers";

export default function Home() {
  return (
    <Box>
            <br />
      <br />

      <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px', ml: 5}} >
      <Button variant="contained">
        Contained
      </Button>

      <Button variant="outlined">
        Outlined
      </Button>

      <Button variant="text">
        text
      </Button>

      <Button variant="hover">
        Hover
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button variant="success">
        Success
      </Button>

      </Box>


      <br />
      <br />
      <Button variant="contained" size="small">
        small s
      </Button>
      <br />
      <br />
      <Button variant="contained" size="medium">
        medium
      </Button>
      <br />
      <br />
      <Button variant="contained" size="large">
        large
      </Button>
      <br />
      <br />
      <Text variant="h1">Helo typo h1</Text>
      <Text variant="h2">Helo typo h2</Text>
      <Text variant="h3">Helo typo h3</Text>
      <Text variant="h4">Helo typo h4</Text>
      <Text variant="h5">Helo typo h5</Text>
      <Text variant="body">Helo body</Text>
      <br />
      <Text variant="label">label</Text>
      <br />
      <Text variant="small">small</Text>
      <br />
      <Text variant="caption">caption</Text> <br />
    </Box>
  );
}
