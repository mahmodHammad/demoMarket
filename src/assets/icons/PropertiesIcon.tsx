import { SvgIcon } from '@mui/material';

export default function PropertiesIcon(props: any) {
	return (
		<SvgIcon {...props} inheritViewBox>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_28810_51187)">
					<path
						d="M26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V15.6088C2.49998 15.4301 2.53824 15.2536 2.6122 15.091C2.68616 14.9284 2.7941 14.7836 2.92875 14.6663L7.5 10.68V5C7.5 4.66848 7.6317 4.35054 7.86612 4.11612C8.10054 3.8817 8.41848 3.75 8.75 3.75H26.25C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25ZM11.25 23.75H15V16.1775L10 11.8175L5 16.1775V23.75H8.75V18.75H11.25V23.75ZM17.5 23.75H25V6.25H10V8.90875C10.2925 8.90875 10.5862 9.01125 10.8212 9.2175L17.0712 14.6663C17.2059 14.7836 17.3138 14.9284 17.3878 15.091C17.4618 15.2536 17.5 15.4301 17.5 15.6088V23.75ZM20 13.75H22.5V16.25H20V13.75ZM20 18.75H22.5V21.25H20V18.75ZM20 8.75H22.5V11.25H20V8.75ZM15 8.75H17.5V11.25H15V8.75Z"
					/>
				</g>
				<defs>
					<clipPath id="clip0_28810_51187">
						<rect width="30" height="30" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</SvgIcon>
	);
}