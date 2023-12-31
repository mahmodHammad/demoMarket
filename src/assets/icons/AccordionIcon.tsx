import { SvgIcon } from '@mui/material';

export default function AccordionIcon(props: any) {
	return (
		<SvgIcon
			{...props}
			inheritViewBox
			style={{ transform: 'scaleY(-1)' }} // Flip the icon vertically
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11.9998 11.828L9.17184 14.657L7.75684 13.243L11.9998 9L16.2428 13.243L14.8278 14.657L11.9998 11.828Z'
					fill='#09121F'
				/>
			</svg>
		</SvgIcon>
	);
}
