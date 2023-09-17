import { SvgIcon } from '@mui/material';

export default function NextIcon(props: any) {
	return (
		<SvgIcon
			{...props}
			inheritViewBox
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_28568_133800)">
					<path d="M12.1727 12.0008L9.34375 9.17281L10.7577 7.75781L15.0007 12.0008L10.7577 16.2438L9.34375 14.8288L12.1727 12.0008Z" fill="#09121F" />
				</g>
				<defs>
					<clipPath id="clip0_28568_133800">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>

		</SvgIcon>
	);
}
