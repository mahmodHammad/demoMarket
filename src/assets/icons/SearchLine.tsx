import { SvgIcon } from '@mui/material';

export default function SearchLine(props: any) {
  return (
    <SvgIcon {...props} inheritViewBox>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_28574_4031)">
          <path
            d="M13.5233 12.4628L16.7355 15.6743L15.6743 16.7355L12.4628 13.5233C11.2678 14.4812 9.7815 15.0022 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5C11.976 1.5 15 4.524 15 8.25C15.0022 9.7815 14.4812 11.2678 13.5233 12.4628ZM12.0188 11.9063C12.9706 10.9274 13.5022 9.61532 13.5 8.25C13.5 5.349 11.1503 3 8.25 3C5.349 3 3 5.349 3 8.25C3 11.1503 5.349 13.5 8.25 13.5C9.61532 13.5022 10.9274 12.9706 11.9063 12.0188L12.0188 11.9063Z"
            fill="#008EA5"
          />
        </g>
        <defs>
          <clipPath id="clip0_28574_4031">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
