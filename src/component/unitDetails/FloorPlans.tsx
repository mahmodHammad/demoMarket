"use client";
import { FrontSide, GroundFloor, Room } from "@/assets";
import { Box, Text } from "@/wrappers";
import FloorCard from "../unitDetails/FloorCard";
import floor from "@/assets/images/floor.png";
import Carousel from "../Carousel";

const floorFeatures = [
  { icon: <Room />, title: "3 room" },
  { icon: <FrontSide />, title: "Front Side" },
  { icon: <GroundFloor />, title: "Ground Floor" },
  { icon: <Room />, title: "3 room" },
  { icon: <Room />, title: "5 beds" },
];
const data = [
  {
    item: (
      <FloorCard
        img={floor}
        name={"property name "}
        area={"33"}
        floorFeatures={floorFeatures}
      />
    ),
  },
  
  {
    item: (
      <FloorCard
        img={floor}
        name={"property name "}
        area={"111"}
        floorFeatures={floorFeatures}
      />
    ),
  },
  {
    item: (
      <FloorCard
        img={floor}
        name={"property name "}
        area={"111"}
        floorFeatures={floorFeatures}
      />
    ),
  },
];

export default function FloorPlans() {
  return (
    <Box>
      <Text variant="h5" mt={"40px"}>
        Floor Plans & Pricing (Units)
      </Text>

      <Box
        p={"18px"}
        gap={"18px"}
        sx={{
          borderRadius: "16px",
          backgroundColor: "#1F448B14",
          my: "24px",
        }}
      >
        {data?.length >2? (
          <Carousel
            items={data.map((d: any, index: number) => (
              <Box key={index} sx={{ display: "inline-block" }}>
                {d.item}
              </Box>
            ))}
          />
        ) : (
          <Box row>
            {data.map((d: any, index: any) => (
              <Box key={index}>{d.item}</Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
