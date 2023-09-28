import { SvgIcon } from '@mui/material';
interface Props {
	color: string;
}
export default function Share({ props, color }: any) {
	return (
		<SvgIcon {...props} inheritViewBox>
			<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_26914_268296)">
					<path
						d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
						stroke="#008EA5"
						stroke-opacity="0.84"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
						stroke="#008EA5"
						stroke-opacity="0.84"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
						stroke="#008EA5"
						stroke-opacity="0.84"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8.7002 10.6969L15.3002 7.29688"
						stroke="#008EA5"
						stroke-opacity="0.84"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8.7002 13.2969L15.3002 16.6969"
						stroke="#008EA5"
						stroke-opacity="0.84"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_26914_268296">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</SvgIcon>
	);
}
