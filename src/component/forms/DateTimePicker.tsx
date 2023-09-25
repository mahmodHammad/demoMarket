'use client';

import { DateTimePicker as MUIDateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import DateTimeHOC from './DateTimeHOC';

const DateTimePicker = (props: DateTimePickerProps<Date>) => {
	// TODO: customize style
	return <DateTimeHOC><MUIDateTimePicker {...props} /></DateTimeHOC>;
};

export default DateTimePicker;
