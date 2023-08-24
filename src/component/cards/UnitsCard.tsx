import React from "react";
import { Box, Button, Text } from "@/wrappers";
import Image from "next/image";
import { ThreeD } from "@/assets";

interface proptypes {
  img: string;
  title: string;
  link: string;
  price: string;
  area: string;
  location: string;
}
export default function UnitsCard({
  img,
  title,
  link,
  price,
  area,
  location,
}: proptypes) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", md: "447px" },
        // position: "relative",
        // overflow: "hidden",
        borderRadius: "16px",

        boxShadow: "0px 6px 12px 0px rgba(28, 39, 49, 0.05)",
      }}
    >
      <Box
        center
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: { xs: "26px", md: "36px" },
          height: { xs: "26px", md: "36px" },

          backgroundColor: "rgba(52, 52, 52, 0.2)",
          borderRadius: 100,
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "150px", md: "237px" },
          borderRadius: "16px 16px 0 0",
        }}
        component={Image}
        alt="houses and properties for rent"
        src={img}
      />
      <Box
        column
        sx={{
          width: "100%",
          height: { xs: "80px", md: "136px" },
          py: "12px",
          px: "16px",
        }}
      >
        <Box column>
          <Text
            variant="h5"
            sx={{
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            {title}
          </Text>
          <Text
            variant="small"
            sx={{
              // fontSize: { xs: "14px", md: "18px" },
              display: { xs: "flex", md: "none" },
            }}
          >
            location
            {location}
          </Text>
        </Box>

        <Box
          column
          sx={{
            mt: { xs: "15px", md: "22px" },
            display: { xs: "none", md: "flex" },
          }}
        >
          <Text
            variant="caption"
            sx={{
              fontSize: { xs: "8px", md: "10px" },
            }}
          >
            Location
          </Text>
          <Text
            variant="label"
            sx={
              {
                // fontSize: { xs: "14px", md: "14px" },
              }
            }
          >
            {location}
            Location
          </Text>
        </Box>
        <Box row center xbetween sx={{ mt: { xs: "8px", md: "12px" } }}>
          <Box column>
            <Text
              variant="caption"
              sx={{
                fontSize: { xs: "8px", md: "10px" },
                display: { xs: "none", md: "flex" },
              }}
            >
              Price
            </Text>
            <Text
              variant="small"
              bold
              sx={
                {
                  // fontSize: { xs: "14px", md: "24px" },
                }
              }
            >
              {price}
              SAR 25,000.00
            </Text>
          </Box>

          {/* <Box row center>
            <ThreeD
              sx={{ mr: "8px", fontSize: { xs: "16px", md: "30px" } }}
            ></ThreeD>

            <Text
              variant="label"
              sx={{
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              3D view
            </Text>
          </Box> */}
          <Box
            center
            sx={{
              backgroundColor: "rgba(42, 43, 45, 0.08) ",
              borderRadius: "32px",
              height: "26px",
              py: "8px",
              px: "12px",
            }}
          >
            <Text
              center
              variant="body"
              s={16}
              sx={{
                fontSize: { xs: "10px", md: "16px" },
              }}
            >
              {area}
              23 Sqm
            </Text>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: "16px", px: "24px" }}>
        <Button
          variant="outlined"
          sx={{
            display: "dlex",
            height: "20px",
            padding: "16px 24px",
            justifyContent: " center",
            alignItems: "center",

            fontSize: { xs: "12px", md: "16px" },
          }}
          href={"/unitdetails"}
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
}
