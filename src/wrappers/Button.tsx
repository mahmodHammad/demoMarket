import { Button as MUIButton, ButtonProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

interface Button extends ButtonProps {
  whiteborder?: boolean;

  sx?: any;
  component?: React.ElementType;
  onClick?: MouseEventHandler;
  children: ReactNode;
}
const setButtonLayoutSXProps = (props: any) => {
  return {
    ...(props.whiteborder && {
      color: "#fff",
      borderColor: "#fff",
      "&:hover": { borderColor: "#fff", background: "#ffffff09" },
    }),

    ...props.sx,
  };
};
export default function Button(props: Button) {
  return (
    <MUIButton {...props} sx={setButtonLayoutSXProps(props)}>
      {props.children}
    </MUIButton>
  );
}
