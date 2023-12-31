import { SvgIcon } from '@mui/material';
interface Props {
	color: string;
}
export default function Share({ props, color }: any) {
	return (
		<SvgIcon {...props} inheritViewBox sx={{ color: 'none', fill: 'none', strock: 'none' }}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_29902_58111)">
					<path
						d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
						stroke="#002A37"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
						stroke="#002A37"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
						stroke="#002A37"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5.7998 7.13385L10.1998 4.86719"
						stroke="#002A37"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5.7998 8.86719L10.1998 11.1339"
						stroke="#002A37"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_29902_58111">
						<rect width="16" height="16" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</SvgIcon>
	);
}
