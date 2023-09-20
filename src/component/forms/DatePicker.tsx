'use client';

import { DatePicker as MUIDatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';

const DatePicker = (props: DatePickerProps<Date>) => {
	// TODO: customize style
	return <MUIDatePicker {...props} />;
};

export default DatePicker;
