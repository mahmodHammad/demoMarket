import { Box, Text } from "@/wrappers";
import { Grid } from "@mui/material";
import React from "react";
import UnitsCard from "../cards/UnitsCard";
import SearchBox from "./SearchBox";
import neigbourhoodCover from "@/assets/images/neigbourhoodCover.png";
import neibourhoodcover2 from "@/assets/images/neibourhoodcover2.png";

const data = [
  {
    title: "Al-Arid District",
    img: neibourhoodcover2,
    link: "/",
    price: "SAR 60,000",
    area: "120 sqm",
    location: "Riyadh",
  },
  { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
  { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
  { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
  { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
  { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
  { title: "Al-Arid District", img: neibourhoodcover2, link: "/" },
  { title: "Yarmouk Neighbourhood", img: neigbourhoodCover, link: "/" },
];

// interface proptypes {
//   data: [
//     {
//       title: string;
//       img: string;
//       link: string;
//       price: string;
//       area: string;
//       location: string;
//     }
//   ];
// }
// const listingBodey = ({ data }: proptypes) => {
const listingBodey = () => {
  return (
    <>
      <Box column width={"100%"}>
        <Text variant="h4">Properties in Saudi Arabia</Text>
        <SearchBox />

        <Grid container mt={"47px"} spacing={"28px"}>
          {data?.map((d, index) => (
            <Grid item xs={6} key={index}>
              <UnitsCard
                title={d.title}
                img={d.img}
                link={d.link}
                price={d.price}
                area={d.area}
                location={d.location}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      ;
    </>
  );
};

export default listingBodey;
