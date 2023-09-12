import { SvgIcon } from '@mui/material';

export default function Close(props: any) {
	return (
		<SvgIcon
			{...props}
			inheritViewBox
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5 11H19V13H5V11Z'
					fill='#4F5154'
				/>
			</svg>
		</SvgIcon>
	);
}