import { SvgIcon } from '@mui/material';

export default function DashboardIcon(props: any) {
	return (
		<SvgIcon {...props} inheritViewBox>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_28810_144790)">
					<path
						d="M3.75 16.25H13.75V3.75H3.75V16.25ZM3.75 26.25H13.75V18.75H3.75V26.25ZM16.25 26.25H26.25V13.75H16.25V26.25ZM16.25 3.75V11.25H26.25V3.75H16.25Z"
					/>
				</g>
				<defs>
					<clipPath id="clip0_28810_144790">
						<rect width="30" height="30" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</SvgIcon>
	);
}