import { Favorite, Share } from "@/assets";
import { Box, Button, Text } from "@/wrappers";
import { Avatar, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface Props {
  logo: string;
  title: string;
  location: string;
}
export default function UnitHeader({ logo, title, location }: Props) {
  return (
    <Box row xbetween mt={2}>
      <Box center row gap={"19px"}>
        <Box center style={{ width: 110 }}>
          <Image src={logo} alt="logo" width="115" height="45" />
        </Box>
        <Box column xcenter>
          <Text variant="h4"> {title}</Text>
          <Text variant="small" gray>
            {location}
          </Text>
        </Box>
      </Box>

      <Box gap={"8px"} row>
        <IconButton
          color="primary"
          aria-label="delete"
          sx={{
            display: { xs: "flexs", md: "none" },
          }}
          size="large"
        >
          <ShareOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="primary"
          sx={{
            display: { xs: "flexs", md: "none" },
          }}
          size="large"
        >
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <Button
          variant="outlined"
          component={Link}
          href="/"
          sx={{
            display: { xs: "none", md: "flex" },
            height: "42px",
            width: "100%",
            color: "#002A37",
            padding: "12px 24px 12px 24px",
            borderRadius: "8px",
            borderColor: "#E3E3E3",
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
            display: { xs: "none", md: "flex" },
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
