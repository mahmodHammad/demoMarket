import { SvgIcon } from "@mui/material";

export default function FrontSide(props: any) {
  return (
    <SvgIcon {...props} inheritViewBox>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5 19H23.5V21H1.5V19H3.5V4C3.5 3.73478 3.60536 3.48043 3.79289 3.29289C3.98043 3.10536 4.23478 3 4.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V19H19.5V11H17.5V9H20.5C20.7652 9 21.0196 9.10536 21.2071 9.29289C21.3946 9.48043 21.5 9.73478 21.5 10V19ZM5.5 5V19H13.5V5H5.5ZM7.5 11H11.5V13H7.5V11ZM7.5 7H11.5V9H7.5V7Z"
          fill="#008EA5"
          fill-opacity="0.84"
        />
      </svg>
    </SvgIcon>
  );
}
