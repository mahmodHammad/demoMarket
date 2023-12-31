import { SvgIcon } from '@mui/material';
import React from 'react';

const Calendar = (props: any) => {
	return (
		<SvgIcon {...props} inheritViewBox>
			<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_28620_23192)">
					<path d="M12.75 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H5.25V0.75H6.75V2.25H11.25V0.75H12.75V2.25ZM15 6.75V3.75H12.75V5.25H11.25V3.75H6.75V5.25H5.25V3.75H3V6.75H15ZM15 8.25H3V14.25H15V8.25ZM4.5 9.75H8.25V12.75H4.5V9.75Z" />
				</g>
				<defs>
					<clipPath id="clip0_28620_23192">
						<rect width="18" height="18" fill="white" />
					</clipPath>
				</defs>
			</svg>
			;
		</SvgIcon>
	);
};

export default Calendar;
