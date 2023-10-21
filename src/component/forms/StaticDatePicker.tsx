'use client';
import { StaticDatePicker as MUIDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import LocalizationProviderWrapper from '../../wrappers/LocalizationProviderWrapper';

const StaticDatePicker = (props: DateTimePickerProps<Date>) => {
	// TODO: customize style
	return <LocalizationProviderWrapper><MUIDatePicker sx={{ width:'100%' }} {...props} /></LocalizationProviderWrapper>;
};

export default StaticDatePicker;
