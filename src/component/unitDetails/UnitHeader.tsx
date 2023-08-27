import { Favorite, Share } from "@/assets";
import { Box, Button, Text } from "@/wrappers";
import { Avatar } from "@mui/material";
import Link from "next/link";

interface Props {
  logo: any;
  title: string;
  location: string;
}
export default function UnitHeader({ logo, title, location }: Props) {
  return (
    <Box row xbetween>
      <Box center row gap={"19px"}>
        <Box center style={{ width: 36 }}>
          {logo}
        </Box>
        <Box column xcenter>
          <Text variant="h4"> {title}</Text>
          <Text variant="small" gray>
            {location}
          </Text>
        </Box>
      </Box>

      <Box gap={"8px"} row>
        <Button
          variant="outlined"
          component={Link}
          href="/"
          sx={{
            height: "42px",
            width: "100%",
            padding: "12px 24px 12px 24px",
            borderColor: "#E3E3E3",
            color: "#002A37",
          }}
          startIcon={<Share size="small" />}
        >
          Share
        </Button>

        <Button
          variant="outlined"
          component={Link}
          href="/"
          sx={{
            height: "42px",
            width: "100%",
            color: "#002A37",
            padding: "12px 24px 12px 24px",
            borderRadius: "8px",
            borderColor: "#E3E3E3",
          }}
          startIcon={<Favorite />}

          //   color="black"
        >
          Favorite
        </Button>
      </Box>
    </Box>
  );
}
