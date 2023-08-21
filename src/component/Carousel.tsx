import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React, { useState } from "react";
import { Box } from "@/wrappers";
import { LeftIcon, RightIcon, Rightrounded } from "@/assets";
import { IconButton } from "@mui/material";
import theme from "@/ThemeRegistry/theme";

type Props = {
  items: any;
};

const Carousel = ({ items }: Props) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);

  const thumbItems = (items: any, [setThumbIndex, setThumbAnimation]: any) => {
    return items.map((item: any, i: number) => (
      <div
        key={i}
        className="thumb"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      >
        {item}
      </div>
    ));
  };

  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncThumbs = (e: { item: React.SetStateAction<number> }) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <AliceCarousel
        activeIndex={thumbIndex}
        autoWidth
        disableDotsControls
        disableButtonsControls
        mouseTracking={false}
        onSlideChanged={syncThumbs}
        touchTracking={!mainAnimation}
        items={items}
      />

      <Box
        xbetween
        sx={{
          position: "absolute",
          transform: "translateY(-50%)",
          top: "50%",
          width: "100%",
          display: { xs: "none", md: "flex" },
        }}
      >
        <IconButton
          aria-label="slide left to see properties"
          aria-haspopup="true"
          color="inherit"
          onClick={slidePrev}
          sx={{
            visibility: thumbIndex == 0 ? "hidden" : "visible",
            background: theme.palette.primary.main + "77",
            "&:hover": {
              background: theme.palette.primary.main,
            },
          }}
        >
          <LeftIcon sx={{ fontSize: "30px" }} />
        </IconButton>

        {thumbIndex < items.length - 2 && (
          <IconButton
            aria-label="slide right to see properties"
            aria-haspopup="true"
            color="inherit"
            onClick={slideNext}
            sx={{
              background: theme.palette.primary.main + "77",
              "&:hover": {
                background: theme.palette.primary.main,
              },
            }}
          >
            <RightIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Carousel;
