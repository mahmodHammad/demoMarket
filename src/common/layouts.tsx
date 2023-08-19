
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
    ...(props.warning && {
      color: "#232425",
      backgroundColor: "#FCEDC7",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
    }),

    ...(props.hoverBorder && {
      transition: "all 0.4s ease-in-out",
      border: (theme: any) =>
        `1px solid ${
          props?.selected
            ? theme?.palette?.primary?.main
            : "rgba(31, 68, 139, 0.08)"
        }`,
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
