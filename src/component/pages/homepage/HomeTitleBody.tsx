import Viewmore from "@/component/Viewmore";
import { Box, Text } from "@/wrappers";
import React from "react";

interface HomeTitleBody {
  title: string;
  body: string;
  link: string;
}
export default function HomeTitleBody({ title, body, link }: HomeTitleBody) {
  return (
    <Box>
      <Text
        variant="h3"
        color="secondary.dark"
        sx={{
          fontSize: { xs: "24px", md: "52px" },
        }}
      >
        {title}
      </Text>
      <Box
        xbetween
        ycenter
        color="secondary.dark"
        sx={{ mt: { xs: "4px", md: "8px" } }}
      >
        <Text
          variant="body"
          gray
          sx={{
            maxWidth: { md: "490px", xs: "230px" },
          }}
        >
          {body}
        </Text>

        <Viewmore link={link} />
      </Box>
    </Box>
  );
}
