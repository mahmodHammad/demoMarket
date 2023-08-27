import React from "react";
import { Box, Button, Text } from "@/wrappers";
import Image from "next/image";
import { ThreeD } from "@/assets";

interface proptypes {
  description: string;
}
export default function AboutUnit({ description }: proptypes) {
  return (
    <Box
      column
      sx={{
        width: "100%",
        mt: "40px",
        gap: "20px",
      }}
    >
      <Text variant="h4" s={24}>
        About this home
      </Text>
      <Text variant="body"> {description}</Text>
    </Box>
  );
}
