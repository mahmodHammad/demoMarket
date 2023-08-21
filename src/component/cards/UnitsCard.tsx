import React from "react";
import { Box, Text } from "@/wrappers";
import Image from "next/image";
import { Button, Link } from "@mui/material";
import { ThreeD } from "@/assets";
import Hart from "@/assets/icons/hart";

interface proptypes {
  img: string;
  title: string;
  link: string;
  price: string;
  area: string;
  location: string;
}
export default function NeighbourhoodCard({
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
        height: { xs: "340px", md: "447px" },
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
          width: { xs: "25px", md: "36px" },
          height: { xs: "25px", md: "36px" },
          backgroundColor: "rgba(52, 52, 52, 0.2)",
          borderRadius: 100,
        }}
      >
        <Hart></Hart>
      </Box>

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
          height: { xs: "150px", md: "210px" },
          p: "16px",
        }}
      >
        <Box
          row
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            height: { xs: "90px", md: "80px" },
          }}
        >
          <Box column>
            <Text
              variant="h5"
              sx={{
                fontSize: { xs: "14px", md: "24px" },
              }}
            >
              {" "}
              {title}
            </Text>

            <Text
              variant="caption"
              mt={"4px"}
              sx={{
                fontSize: { xs: "8px", md: "14px" },
              }}
            >
              {" "}
              {title}
            </Text>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(42, 43, 45, 0.08) ",
              borderRadius: "8px",
              height: "26px",
              py: "4px",
              px: "8px",
            }}
          >
            <Text
              variant="body1"
              s={16}
              sx={{
                fontSize: { xs: "8px", md: "16px" },
              }}
            >
              360 Sqm Living Area
              {area}
            </Text>
          </Box>
        </Box>

        <Box row justifyContent={"space-between"} mt={"16px"}>
          <Text
            variant="h5"
            sx={{
              fontSize: { xs: "14px", md: "24px" },
            }}
          >
            {" "}
            {price}
            $25,000
          </Text>
          <Box
            row
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeD
              sx={{ mr: "8px", fontSize: { xs: "16px", md: "30px" } }}
            ></ThreeD>

            <Text
              variant="label"
              sx={{
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              {" "}
              3D view
            </Text>
          </Box>
        </Box>

        <Button
          variant="outlined"
          sx={{
            display: "flex",
            height: "52px",
            padding: "12px 24px",
            justifyContent: " center",
            alignItems: "center",
            mt: "16px",
            fontSize: { xs: "12px", md: "16px" },
          }}
          href={link}
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
}
