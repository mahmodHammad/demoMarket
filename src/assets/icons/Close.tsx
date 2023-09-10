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
				<g clip-path='url(#clip0_28168_30363)'>
					<path
						d='M11.9997 10.5828L16.9497 5.63281L18.3637 7.04681L13.4137 11.9968L18.3637 16.9468L16.9497 18.3608L11.9997 13.4108L7.04974 18.3608L5.63574 16.9468L10.5857 11.9968L5.63574 7.04681L7.04974 5.63281L11.9997 10.5828Z'
						fill='#09121F'
					/>
				</g>
				<defs>
					<clipPath id='clip0_28168_30363'>
						<rect
							width='24'
							height='24'
							fill='white'
						/>
					</clipPath>
				</defs>
			</svg>
		</SvgIcon>
	);
}
