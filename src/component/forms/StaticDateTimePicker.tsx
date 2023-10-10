'use client';
import { StaticDateTimePicker as MUIDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import LocalizationProviderWrapper from '../../wrappers/LocalizationProviderWrapper';

const StaticDateTimePicker = (props: DateTimePickerProps<Date>) => {
	// TODO: customize style
	return <LocalizationProviderWrapper><MUIDateTimePicker sx={{ width:'100%' }} {...props} /></LocalizationProviderWrapper>;
};

export default StaticDateTimePicker;
