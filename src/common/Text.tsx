import { Typography as MUITypography, TypographyTypeMap } from "@mui/material";
import { ReactNode } from "react";

interface Text {
  s?: number;
  gray?: string;
  bold?: boolean;
  light?: boolean;
  color?: string;
  sx?: any;
  variant?: TypographyTypeMap["props"]["variant"];
  component?: React.ElementType;
  children: ReactNode;
}
const setTypographyLayoutSXProps = (props: Text) => {
  return {
    ...(props.gray && { color: `#525451 !important` }),
    ...(props.s && { fontSize: `${props.s}px ` }),
    ...(props.light && { fontWeight: 400 }),
    ...(props.bold && { fontWeight: `bold` }),
    ...props.sx,
  };
};

export default function Text(props: Text) {
  return (
    <MUITypography {...props} sx={setTypographyLayoutSXProps(props)}>
      {props.children}
    </MUITypography>
  );
}
