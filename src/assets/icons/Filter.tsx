import { SvgIcon } from '@mui/material';
interface Props {
  color: string;
}
export default function Filter({ props, color }: any) {
  return (
    <SvgIcon {...props} inheritViewBox>
      <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.75 3V4.5H15L11.25 10.125V16.5H6.75V10.125L3 4.5H2.25V3H15.75ZM4.803 4.5L8.25 9.6705V15H9.75V9.6705L13.197 4.5H4.803Z"
          fill="#232425"
        />
      </svg>
    </SvgIcon>
  );
}
