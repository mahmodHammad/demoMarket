'use client';

import { DatePicker as MUIDatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import LocalizationProviderWrapper from '../../wrappers/LocalizationProviderWrapper';

const DatePicker = (props: DatePickerProps<Date>) => {
	// TODO: customize style
	return <LocalizationProviderWrapper>
				<MUIDatePicker sx={{ width:'100%'}} {...props} />
			</LocalizationProviderWrapper>;
};

export default DatePicker;
