import React from "react";
import { Box, Button, Text } from "@/wrappers";
import Link from "next/link";
import { Divider } from "@mui/material";
import { BuyNowIcon } from "@/assets";

interface proptypes {
  price: string;
  PriceType: string;
}
export default function BuyNowCard({ price, PriceType }: proptypes) {
  return (
    <Box
      column
      sx={{
        p: "24px",
        width: "100%",
        height: { xs: "350px", md: "360px" },
        borderRadius: "8px",
        border: "solid",
        borderWidth: "0px, 0px, 0px, 0px",
        borderStyle: "solid",
        borderColor: "rgba(227, 227, 227, 1)",
      }}
    >
      <Text variant="caption">Rent price</Text>
      <Text variant="h5">
        {price}
        <Text variant="caption" display={"inline"}>
          /{PriceType}
        </Text>
      </Text>

      <Button
        variant="contained"
        component={Link}
        href="/"
        sx={{ mt: "24px", height: "52px", width: "100%" }}
        startIcon={<BuyNowIcon />}
      >
        Buy Now
      </Button>
      <Divider sx={{ mt: "24px" }}></Divider>
      <Text bold s={18} sx={{ mt: "24px" }}>
        Request home tour
      </Text>

      <Button
        variant="outlined"
        component={Link}
        href="/"
        sx={{
          mt: "24px",
          height: "52px",
          width: "100%",
          borderRadius: "8px",
          border: "2px solid var(--atar-primary-main, #008EA5)",
        }}
      >
        Book a Visit
      </Button>

      <Text mt={"24px"} gray s={14}>
        It's free, with no obligation - cancel anytime.
      </Text>
    </Box>
  );
}
