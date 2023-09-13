import { Typography as MUITypography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import theme from '@/ThemeRegistry/theme';

interface Text extends TypographyProps {
  s?: number;
  gray?: boolean;
  primary?: boolean;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  color?: string;
  children: ReactNode;
}
const setTypographyLayoutSXProps = (props: Text) => {
  return {
    ...(props.primary && { color: theme.palette.primary.main }),
    ...(props.gray && { color: `#525451 !important` }),
    ...(props.s && { fontSize: `${props.s}px !important ` }),
    ...(props.light && { fontWeight: 400 }),
    ...(props.medium && { fontWeight: 500 }),
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
