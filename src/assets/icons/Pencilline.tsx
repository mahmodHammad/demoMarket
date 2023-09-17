import { SvgIcon } from '@mui/material';

export default function Pencilline(props: any) {
	return (
		<SvgIcon
			{...props}
			inheritViewBox
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_28568_133763)">
					<path d="M15.728 9.68804L14.314 8.27404L5 17.588V19.002H6.414L15.728 9.68804ZM17.142 8.27404L18.556 6.86004L17.142 5.44604L15.728 6.86004L17.142 8.27404ZM7.242 21.002H3V16.759L16.435 3.32404C16.6225 3.13657 16.8768 3.03125 17.142 3.03125C17.4072 3.03125 17.6615 3.13657 17.849 3.32404L20.678 6.15304C20.8655 6.34056 20.9708 6.59487 20.9708 6.86004C20.9708 7.1252 20.8655 7.37951 20.678 7.56704L7.243 21.002H7.242Z" fill="#525451" />
				</g>
				<defs>
					<clipPath id="clip0_28568_133763">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>

		</SvgIcon>
	);
}
