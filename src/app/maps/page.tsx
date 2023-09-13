import {
  FrontSide,
  GroundFloor,
  Room,
} from "@/assets";
import {
  Neighbourhoods,
} from "@/component";
import { Item } from "@/wrappers";
import { Grid } from "@mui/material";
import React from "react";
import MapContainer from "@/component/Maps/Maps";


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
        {/* <Item>
          <Neighbourhoods />

        </Item> */}
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
