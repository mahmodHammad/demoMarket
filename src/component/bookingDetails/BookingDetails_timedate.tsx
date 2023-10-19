'use client';
import { Calendar } from '@/assets';
import { Box, Button, Text } from '@/wrappers';
import { Menu, MenuItem } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

interface Props {
	logo: any;
	title: string;
	description: string;
	date: string;
}

function BookingDetails_timedate({ logo, date, title, description }: Props) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (type: number) => {
		setAnchorEl(null);
		switch (type) {
			case 1:
				window.open(
					`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dayjs(date).format('YYYYMMDDThhmmss')}/${dayjs(date).format('YYYYMMDDThhmmss')}}}}&details=${description}&amp;sprop=&amp;sprop=name:`,
					'_blank',
				);
				break;
			case 2:
				window.open(
					`data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/generator/generator.html%0ADTSTART:${dayjs(date).format('YYYYMMDDThhmmss')}%0ADTEND:${dayjs(date).format('YYYYMMDDThhmmss')}%0ASUMMARY:${title}%0ADESCRIPTION:${description}%0AEND:VEVENT%0AEND:VCALENDAR`,
					'_blank',
				);
				break;
			case 3:
				window.open(
					`data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/generator/generator.html%0ADTSTART:${dayjs(date).format('YYYYMMDDThhmmss')}%0ADTEND:${dayjs(date).format('YYYYMMDDThhmmss')}%0ASUMMARY:${title}%0ADESCRIPTION:${announcement?.description}%0AEND:VEVENT%0AEND:VCALENDAR`,
					'_blank',
				);
				break;
			case 4:
				window.open(
					`http://calendar.yahoo.com/?v=60&view=m&type=20&title=${title}&st=${date}&desc=${description}`,
					'_blank',
				);
				break;
			default:
				setAnchorEl(null);
				break;
		}
	};
	return (
		<Box
			row
			xbetween
			center
			sx={{
				borderRadius: '16px',
				backgroundColor: '#008EA514',
				mt: '25px',
				px: '24px',
				py: '20px',
			}}>
			<Box row>
				<Box column>
					<Text variant="small" gray fontSize={'12px'}>
						Booking Date & Time
					</Text>
					<Text variant="h5" s={16} fontSize={'24'}>
						{date}
					</Text>
				</Box>
			</Box>

			<Box column>
				<Button
					variant="outlined"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
					startIcon={<Calendar />}>
					Add to calendar
				</Button>
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					anchorEl={anchorEl}
					open={open}
					onClose={() => handleClose(0)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}>
					<MenuItem onClick={() => handleClose(1)}>Google Calendar</MenuItem>
					<MenuItem onClick={() => handleClose(2)}>iOS Calendar</MenuItem>
					<MenuItem onClick={() => handleClose(3)}>Outlook Calendar</MenuItem>
					{/* <MenuItem onClick={() => handleClose(4)}>Yahoo Calendar</MenuItem> */}
				</Menu>
			</Box>
		</Box>
	);
}
export default BookingDetails_timedate;
