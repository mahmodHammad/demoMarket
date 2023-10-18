import { SvgIcon } from '@mui/material';
interface Props {
	color: string;
}
export default function Favorite({ props, color }: any) {
	return (
		<SvgIcon {...props} inheritViewBox sx={{ color: 'none', fill: 'none', strock: 'none' }}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.87869 3.54276C2.60011 3.82133 2.37913 4.15205 2.22836 4.51603C2.0776 4.88001 2 5.27012 2 5.66409C2 6.05806 2.0776 6.44817 2.22836 6.81215C2.37913 7.17613 2.60011 7.50685 2.87869 7.78542L8.00003 12.9068L13.1214 7.78542C13.684 7.22281 14 6.45974 14 5.66409C14 4.86843 13.684 4.10537 13.1214 3.54276C12.5587 2.98014 11.7957 2.66407 11 2.66407C10.2044 2.66407 9.4413 2.98014 8.87869 3.54276L8.00003 4.42142L7.12136 3.54276C6.84278 3.26418 6.51206 3.04319 6.14808 2.89243C5.78411 2.74166 5.39399 2.66406 5.00003 2.66406C4.60606 2.66406 4.21595 2.74166 3.85197 2.89243C3.48799 3.04319 3.15727 3.26418 2.87869 3.54276V3.54276Z"
					stroke="#002A37"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</SvgIcon>
	);
}
