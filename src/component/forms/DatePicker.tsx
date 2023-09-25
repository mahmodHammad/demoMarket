'use client';

import { DatePicker as MUIDatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import DateTimeHOC from './DateTimeHOC';

const DatePicker = (props: DatePickerProps<Date>) => {
	// TODO: customize style
	return <DateTimeHOC>
				<MUIDatePicker {...props} />
			</DateTimeHOC>;
};

export default DatePicker;
