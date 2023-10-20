import { FormLabel } from '@mui/material';
import React from 'react';

interface Props {
	startTime: any;
	endTime: any;
	setSelectedHours: any;
	selectedHours: any;
	handleTimeSelect: any;
}

export default function TimeSlot({ startTime, endTime, setSelectedHours, handleTimeSelect, selectedHours }: Props) {
	const startDate = new Date(`2023-10-19 ${startTime}`);
	const endDate = new Date(`2023-10-19 ${endTime}`);

	const hoursBetween = [];
	let currentHour = startDate;

	while (currentHour < endDate) {
		hoursBetween.push(currentHour);
		currentHour = new Date(currentHour.getTime() + 60 * 60 * 1000); // Add 1 hour
	}

	const handleHourClick = (hour) => {
		if (selectedHours.includes(hour.getTime())) {
			setSelectedHours([]);
		} else {
			setSelectedHours([hour.getTime()]);
			handleTimeSelect(hour.getTime());
		}
	};
	return (
		<div
			style={{
				width: '100%',
				overflowX: 'auto',
				overflowY: 'hidden',
				height: '100%',
			}}>
			<ul
				style={{
					display: 'flex',
					listStyle: 'none',
					padding: 0,
				}}>
				{hoursBetween.map((hour, index) => {
					return (
						<FormLabel
							onClick={() => handleHourClick(hour)}
							sx={{
								backgroundColor: '#FFF',
								textAlign: 'center',
								display: 'inline-block',
								p: '12px 14px',
								border: `1px solid ${selectedHours.includes(hour.getTime()) ? '#008EA5' : '#E3E3E3'}`,
								color: `${selectedHours.includes(hour.getTime()) ? '#008EA5' : '#232425'}`,
								borderRadius: '8px',
								mr: '24px',
								cursor: 'pointer',
								textTransform: 'capitalize',
								transition: '0.2s ease all',
								fontWeight: 700,
								fontSize: '12px',
								minWidth: '70px',
								minHeight: '40px',
							}}>
							{hour.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
						</FormLabel>
					);
				})}
			</ul>
		</div>
	);
}
