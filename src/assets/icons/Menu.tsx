import { SvgIcon } from "@mui/material";

export default function AtarWhiteLogo(props: any) {
  return (
    <SvgIcon {...props} inheritViewBox>
      <path
        d="M3 8H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 16H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
