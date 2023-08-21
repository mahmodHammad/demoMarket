import { Typography as MUITypography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface Text extends TypographyProps {
  s?: number;
  gray?: boolean;
  bold?: boolean;
  light?: boolean;
  color?: string;
  sx?: any;
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
