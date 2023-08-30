import { Favorite, Share } from "@/assets";
import { Box, Button, Text } from "@/wrappers";
import { Avatar } from "@mui/material";
import Link from "next/link";

interface Props {
  logo: any;
  title: string;
  status: string;
  managedBy: string;
}

export default function ({ logo, title, managedBy, status }: Props) {
  return (
    <Box
      row
      xbetween
      center
      sx={{
        borderRadius: "16px",
        backgroundColor: "#1F448B14",
        mt: "25px",
        px: "24px",
        py: "20px",
      }}
    >
      <Box row>
        <Box column>
          <Text variant="small" gray fontSize={"12px"}>
            Construction Status
          </Text>
          <Text variant="h4" s={24} fontSize={"24"}>
            {status}
          </Text>
        </Box>
      </Box>

      <Box column>
        <Text variant="small" fontSize={"12px"} gray>
          Managed By
        </Text>
        <Box center row gap={1}>
          {logo}

          <Text variant="h5" s={24}>
            {managedBy}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
