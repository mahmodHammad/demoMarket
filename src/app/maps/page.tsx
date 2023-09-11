import {
  AtarColoredLogo,
  AtarWhiteLogo,
  FrontSide,
  GroundFloor,
  Room,
} from "@/assets";
import {
  AboutUnit,
  BuildingSchemeIcons,
  BuyNowCard,
  ConstructionStatus,
  Features,
  FeaturesAndAmenities,
  FloorPlans,
  Neighbourhoods,
  OwnerCard,
  QuiltedImageList,
  UnitHeader,
  UnitMap,
} from "@/component";
import { Box, Button, Item } from "@/wrappers";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import logocolored from "@/assets/images/logocolored.png";
import floor from "@/assets/images/floor.png";
import PhotoAlbum from "react-photo-album";
import MapContainer from "@/component/Maps/Maps";

const photos = [{ src: "@/assets/images/photo1.png", width: 800, height: 600 }];

const floorFeatures = [
  { icon: <Room />, title: "3 room" },
  { icon: <FrontSide />, title: "Front Side" },
  { icon: <GroundFloor />, title: "Ground Floor" },
  { icon: <Room />, title: "3 room" },
  { icon: <Room />, title: "5 beds" },
];

interface Props {
  id?: string;
  photos?: any;
  propertyName?: string;
  logo?: any;
  location?: string;
  constructionStatus?: string;
  managedBy?: string;
  rentPrice?: string;
  rentType?: string;
  aboutUnit?: string;
  floorPlansCard?: any;
  area?: string;
  featuresAmenities?: any;
  floorFeatures?: any;
  map?: string;
}
export default function page({
  id,
  logo,
  photos,
  propertyName,
  location,
  constructionStatus,
  managedBy,
  rentPrice,
  rentType,
  aboutUnit,
  floorPlansCard,
  featuresAmenities,
  floorFeatures,
  map,
}: Props) {
  return (
    <>
      <Grid container>
        <Item sx={{
          position: 'relative',
          height: '500px',
          width: '100%'
        }}>
          <MapContainer />

        </Item>
        <Item>
          <Neighbourhoods />

        </Item>
      </Grid>
      {/* <Container maxWidth="xl" id="#shreyas"> */}
      {/* <Box sx={{ mt: "30px" }}> */}
      {/* <MapContainer /> */}
      {/* </Box> */}
      {/* <Neighbourhoods /> */}
      {/* </Container> */}
    </>
  );
}

{
  /* <OwnerCard
              avatar={"t"}
              title={"name"}
              body={"Property Name / Location"}
            ></OwnerCard> */
}
