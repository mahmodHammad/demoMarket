'use client';

import { TimePicker as MUITimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import DateTimeHOC from './DateTimeHOC';

const TimePicker = (props: TimePickerProps<Date>) => {
	// TODO: customize style
	return <DateTimeHOC>
				<MUITimePicker {...props} />
			</DateTimeHOC>;
};

export default TimePicker;
