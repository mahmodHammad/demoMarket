import {
  Button as MUIButton,
  Box as MUIBox,
  ButtonTypeMap,
  Grid,
  BoxProps,
  GridProps,
} from "@mui/material";

import { ReactNode } from "react";

interface Box extends BoxProps {
  sx?: any;
  center?: boolean;
  ycenter?: boolean;
  xcenter?: boolean;
  row?: boolean;
  column?: boolean;
  xstart?: boolean;
  xend?: boolean;
  component?: React.ElementType;
  children: ReactNode;
}

interface Grid extends GridProps {
  sx?: any;
  component?: React.ElementType;
  children: ReactNode;
}
const setLayoutSXProps = (props: any) => {
  return {
    ...(props.ycenter && {
      display: "flex",
      alignItems: "center",
    }),
    ...(props.xcenter && {
      display: "flex",
      justifyContent: "center",
    }),
    ...(props.center && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),

    ...(props.row && {
      display: "flex",
      flexDirection: "row",
    }),
    ...(props.column && {
      display: "flex",
      flexDirection: "column",
    }),
    ...(props.xstart && {
      display: "flex",
      justifyContent: "flex-start",
    }),
    ...(props.xend && {
      display: "flex",
      justifyContent: "flex-end",
    }),

    ...props.sx,
  };
};

export const Box = (props: Box) => (
  <MUIBox {...props} sx={setLayoutSXProps(props)}>
    {props.children}
  </MUIBox>
);

export const Container = (props: Grid) => (
  <Grid container {...props} sx={setLayoutSXProps(props)} />
);

export const Item = (props: Grid) => (
  <Grid item {...props} sx={setLayoutSXProps(props)} />
);
