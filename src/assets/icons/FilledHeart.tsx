import { SvgIcon } from '@mui/material';

export default function FilledHeart(props: any) {
  return (
    <SvgIcon {...props} inheritViewBox>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
          fill="#008EA5"
        />
      </svg>
    </SvgIcon>
  );
}
