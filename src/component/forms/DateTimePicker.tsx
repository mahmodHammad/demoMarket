'use client';

import { DateTimePicker as MUIDateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import LocalizationProviderWrapper from '../../wrappers/LocalizationProviderWrapper';

const DateTimePicker = (props: DateTimePickerProps<Date>) => {
	// TODO: customize style
	return <LocalizationProviderWrapper><MUIDateTimePicker sx={{ width:'100%', '& .MuiInputBase-root': { borderRadius:'8px !important' } }} {...props} /></LocalizationProviderWrapper>;
};

export default DateTimePicker;
