import { Box, Text } from "@/wrappers";
import { Avatar, Grid, Icon } from "@mui/material";
import Image from "next/image";
import BuildingSchemeIcons from "./BuildingSchemeIcons";

interface Props {
  img: string;
  name: string;
  area: string;
  floorFeatures: any;
}
export default function FloorCard({ name, img, area, floorFeatures }: Props) {
  return (
    <>
      <Box
        column
        sx={{
          borderRadius: "16px",
          backgroundColor: "#fff",
          width: { xs: "100%", md: "372px" },
          //maxWidth: "372px",
          color: "red",
          p: "24px",
          mr:"15px"
        }}
      >
        <Box center>
          <Image src={img} alt="logo" width="197" height="236" />
        </Box>
        <Box column xcenter mt={"50px"}>
          <Text variant="h5"> {name}</Text>
          <Text variant="small" gray>
            {area} Sqm
          </Text>
        </Box>
        <Grid container mt={"25px"}>
          {floorFeatures?.map((item: any, index: any) => (
            <Grid item xs={6} key={index}>
              <BuildingSchemeIcons title={item.title} icon={item.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
