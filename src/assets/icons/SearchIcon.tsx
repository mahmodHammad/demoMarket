import { SvgIcon } from '@mui/material';

export default function SearchIcon(props: any) {
	return (
		<SvgIcon {...props} inheritViewBox>
			<svg fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.3684 18.266C14.7285 18.266 18.2631 14.7314 18.2631 10.3713C18.2631 6.01116 14.7285 2.47656 10.3684 2.47656C6.00823 2.47656 2.47363 6.01116 2.47363 10.3713C2.47363 14.7314 6.00823 18.266 10.3684 18.266Z"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path d="M20.2369 20.2381L15.9441 15.9453" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			;
		</SvgIcon>
	);
}
