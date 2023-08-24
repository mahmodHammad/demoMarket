import React from "react";
import { Box, Button, Text } from "@/wrappers";
import Image from "next/image";
import { ThreeD } from "@/assets";
import { Grid } from "@mui/material";
import FeaturesAndAmenities from "./FeaturesAndAmenities";

interface proptypes {
  Feature: any;
}
export default function Features({ Feature }: proptypes) {
  return (
    <>
      <Text variant="h5" mt={"40px"}>
        Features & amenities
      </Text>
      <Grid container>
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
        <Grid item>
          <FeaturesAndAmenities title={"Pool"} />
        </Grid>{" "}
      </Grid>
    </>
  );
}
