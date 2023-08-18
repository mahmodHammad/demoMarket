import { Button as MUIButton, ButtonTypeMap } from "@mui/material";
import { ReactNode } from "react";

interface Button {
  whiteborder?: boolean;
  sx?: any;
  size?: ButtonTypeMap["props"]["size"];
  variant?: ButtonTypeMap["props"]["variant"];
  component?: React.ElementType;
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
