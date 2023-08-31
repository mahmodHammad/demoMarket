import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import photo1 from "@/assets/images/photo1.png";
import Image from "next/image";
import { Box } from "@/wrappers";

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%" }}
      variant="quilted"
      cols={12}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
          sx={{
            p: "10px",
          }}
        >
          <Box
            component={Image}
            src={item.img}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              objectFit: "cover",
            }}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: photo1,

    rows: 4,
    cols: 8,
  },
  {
    img: photo1,

    rows: 2,
    cols: 4,
  },
  {
    img: photo1,

    rows: 2,
    cols: 4,
  },
];
