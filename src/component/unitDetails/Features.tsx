import React from "react";
import { Box, Button, Text } from "@/wrappers";
import Image from "next/image";
import { Room, ThreeD } from "@/assets";
import { Grid } from "@mui/material";
import FeaturesAndAmenities from "./FeaturesAndAmenities";

interface proptypes {
  Feature: [{ title: string; icon: React.ElementType }];
}
// React.ReactNode;
export default function Features({ Feature }: proptypes) {
  return (
    <>
      <Text variant="h5" mt={"40px"}>
        Features & amenities
      </Text>
      <Grid container>
        {Feature.map((d, index) => (
          <Grid item key={index}>
            <FeaturesAndAmenities title={d.title} icon={d.icon} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
