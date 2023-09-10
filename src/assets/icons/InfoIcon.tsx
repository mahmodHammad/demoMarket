import { SvgIcon } from '@mui/material';

export default function InfoIcon(props: any) {
	return (
		<SvgIcon
			{...props}
			inheritViewBox
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='25'
				height='24'
				viewBox='0 0 25 24'
				fill='none'
			>
				<circle
					cx='12.5'
					cy='12'
					r='10'
					fill='#004256'
				/>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M12.5 17C11.9477 17 11.5 16.5523 11.5 16L11.5 11.5C11.5 10.9477 11.9477 10.5 12.5 10.5C13.0523 10.5 13.5 10.9477 13.5 11.5L13.5 16C13.5 16.5523 13.0523 17 12.5 17Z'
					fill='white'
				/>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M12.5 9.5C11.9477 9.5 11.5 9.05228 11.5 8.5L11.5 8C11.5 7.44772 11.9477 7 12.5 7C13.0523 7 13.5 7.44772 13.5 8L13.5 8.5C13.5 9.05228 13.0523 9.5 12.5 9.5Z'
					fill='white'
				/>
			</svg>
		</SvgIcon>
	);
}
