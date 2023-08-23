import {
  BuildingSchemeIcons,
  BuyNowCard,
  FeaturesAndAmenities,
  OwnerCard,
} from "@/component";
import { Box, Button, Item } from "@/wrappers";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: "30px" }}>
          <Button
            component={Link}
            href="/"
            size="large"
            sx={{
              color: "#CACACA",
            }}
          >
            Back
          </Button>
        </Box>
        <Grid container spacing={3} sx={{ mt: "5px" }}>
          <Grid item container xs={12} md={12}>
            <Grid container item xs={12} md={12} height={"500px"} spacing={3}>
              <Grid item xs={12} md={8}>
                <Item
                  sx={{
                    backgroundColor: "red",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                >
                  photos
                </Item>
              </Grid>
              <Grid container item xs={12} md={4} height={"500px"} spacing={3}>
                <Grid item xs={12} md={12}>
                  <Box
                    sx={{
                      backgroundColor: "blue",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  >
                    photos
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item
                    sx={{
                      backgroundColor: "green",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  >
                    photos
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={8} height={"100hv"}>
            <Item sx={{ backgroundColor: "red", height: "100%" }}>555</Item>
          </Grid>
          <Grid item xs={12} md={4} height={"518px"}>
            <Item sx={{ height: "100%" }}>
              <BuyNowCard price={"SAR 50000"} PriceType={"monthly"} />
            </Item>
          </Grid>
        </Grid>
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
    </>
  );
}
