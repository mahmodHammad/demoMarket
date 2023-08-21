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
      <Text variant="h3" color="secondary.dark">
        {title}
      </Text>
      <Box xbetween color="secondary.dark" sx={{ mt: "16px" }}>
        <Text variant="body" gray>
          {body}
        </Text>

        <Viewmore link={link} />
      </Box>
    </Box>
  );
}
