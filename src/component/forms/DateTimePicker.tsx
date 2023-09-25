'use client';

import { DateTimePicker as MUIDateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';

const DateTimePicker = (props: DateTimePickerProps<Date>) => {
	// TODO: customize style
	return <MUIDateTimePicker {...props} />;
};

export default DateTimePicker;
