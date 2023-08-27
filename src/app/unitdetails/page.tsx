import { AtarColoredLogo } from "@/assets";
import {
  AboutUnit,
  BuildingSchemeIcons,
  BuyNowCard,
  ConstructionStatus,
  Features,
  FeaturesAndAmenities,
  FloorPlans,
  OwnerCard,
  UnitHeader,
  UnitMap,
} from "@/component";
import { Box, Button, Item } from "@/wrappers";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import logocolored from "@/assets/images/logocolored.png";
import floor from "@/assets/images/floor.png";

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
                    backgroundColor: "#faa3",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                >
                  photos 1
                </Item>
              </Grid>
              <Grid container item xs={12} md={4} height={"500px"} spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box
                    sx={{
                      backgroundColor: "blue",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  >
                    photos 2
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
                    photos 3
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={8} height={"100hv"}>
            <UnitHeader
              logo={logocolored}
              title={"Property Name"}
              location={"Location"}
            />
            <ConstructionStatus
              logo={<AtarColoredLogo />}
              title={""}
              status={"Ready To Move"}
              managedBy={"Atar"}
            />
            <AboutUnit
              description={
                "Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa  street in the Palm Harbor neighborhood of Texas. Well cared for with tons of upgrades! Newer stainless steel appliances will stay with the unit, including dishwasher, fridge, stove, microwave, and washer and dryer. Tenant pays electricity and gas bills. Water, Sewer, and Trash are covered by Landlord. Tenant is responsible for lawncare and snow removal. Landlord provides lawn mower. Minimum one year lease."
              }
            />

            <Grid
              item
              xs={12}
              md={4}
              display={{ xs: "flex", md: "none" }}
              mt={3}
            >
              <BuyNowCard price={"SAR 50000"} PriceType={"monthly"} />
            </Grid>
            <FloorPlans
              name={"Property Name"}
              area={"120 Sqf"}
              f={undefined}
              img={floor}
            />
            <Features Feature={""} />
            <UnitMap location={undefined} />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            height={"518px"}
            display={{ xs: "none", md: "flex" }}
          >
            <BuyNowCard price={"SAR 50000"} PriceType={"monthly"} />
          </Grid>
        </Grid>
      </Container>
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
