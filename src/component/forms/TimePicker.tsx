'use client';

import { TimePicker as MUITimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker';

const TimePicker = (props: TimePickerProps<Date>) => {
	// TODO: customize style
	return <MUITimePicker {...props} />;
};

export default TimePicker;
