import { Room } from "@/assets";
import { Box, Text } from "@/wrappers";
import { Avatar, Grid, Icon } from "@mui/material";
import Carousel from "../Carousel";
import Image from "next/image";
import BuildingSchemeIcons from "./BuildingSchemeIcons";

interface Props {
  img: string;
  name: string;
  area: string;
  f: any;
}
export default function FloorPlans({ name, img, area, f }: Props) {
  return (
    <>
      <Text variant="h5" mt={"40px"}>
        Floor Plans & Pricing (Units)
      </Text>

      <Box
        row
        center
        p={"18px"}
        gap={"18px"}
        sx={{
          borderRadius: "16px",
          backgroundColor: "#1F448B14",
          my: "24px",
          width: "100%",
        }}
      >
        <Box
          column
          sx={{
            borderRadius: "16px",
            backgroundColor: "#fff",
            width: "100%",
            color: "red",
            p: "24px",
          }}
        >
          <Box center>
            <Image src={img} alt="logo" width="197" height="236" />
          </Box>
          <Box column xcenter my={2}>
            <Text variant="h5"> {name}</Text>
            <Text variant="small" gray>
              {area}
            </Text>
          </Box>
          <Grid container>
            <Grid item xs={6}>
              <BuildingSchemeIcons title={"3 Rooms"} />
            </Grid>
            <Grid item xs={6}>
              <BuildingSchemeIcons title={"3 Rooms"} />
            </Grid>{" "}
            <Grid item xs={6}>
              <BuildingSchemeIcons title={"3 Rooms"} />
            </Grid>
          </Grid>
        </Box>

        <Box
          column
          sx={{
            borderRadius: "16px",
            backgroundColor: "#fff",
            width: "100%",
            color: "red",
            p: "24px",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box center>
            <Image src={img} alt="logo" width="197" height="236" />
          </Box>
          <Box column xcenter my={2}>
            <Text variant="h5"> {name}</Text>
            <Text variant="small" gray>
              {area}
            </Text>
          </Box>
          <Grid container>
            <Grid item xs={6}>
              <BuildingSchemeIcons title={"3 Rooms"} />
            </Grid>
            <Grid item xs={6}>
              <BuildingSchemeIcons title={"3 Rooms"} />
            </Grid>{" "}
            <Grid item xs={6}>
              <BuildingSchemeIcons title={"3 Rooms"} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
