import {
  BuildingSchemeIcons,
  FeaturesAndAmenities,
  OwnerCard,
} from "@/component";
import { Container } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Container maxWidth="xl">
      user details page user details page
      <OwnerCard
        avatar={"t"}
        title={"name"}
        body={"Property Name / Location"}
      ></OwnerCard>
      <BuildingSchemeIcons title={"3 Rooms"} />
      <BuildingSchemeIcons title={"3 Rooms"} />
      <BuildingSchemeIcons title={"3 Rooms"} />
      <BuildingSchemeIcons title={"3 Rooms"} />
      <FeaturesAndAmenities title={"Pool"} />
      <FeaturesAndAmenities title={"Pool"} />
      <FeaturesAndAmenities title={"Pool"} />
      <FeaturesAndAmenities title={"Pool"} />
    </Container>
  );
}
