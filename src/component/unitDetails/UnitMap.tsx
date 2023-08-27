import React from "react";
import { Box, Button, Text } from "@/wrappers";
import Image from "next/image";
import { ThreeD } from "@/assets";
import { Grid, Link } from "@mui/material";
import FeaturesAndAmenities from "./FeaturesAndAmenities";

interface proptypes {
  location: any;
}
export default function UnitMap({ location }: proptypes) {
  return (
    <>
      <Text variant="h5" mt={"40px"}>
        Map
      </Text>

      <Box
        sx={{
          borderRadius: "16px",
          backgroundColor: "#1F448B14",
          mt: "24px",
          height: "276px",
        }}
      >
        <Button variant="contained" component={Link} href="/" sx={{}}>
          Open in Google Map
        </Button>
      </Box>
    </>
  );
}
