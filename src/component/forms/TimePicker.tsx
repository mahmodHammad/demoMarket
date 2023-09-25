'use client';

import { TimePicker as MUITimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import LocalizationProviderWrapper from '../../wrappers/LocalizationProviderWrapper';

const TimePicker = (props: TimePickerProps<Date>) => {
	// TODO: customize style
	return <LocalizationProviderWrapper>
				<MUITimePicker {...props} />
			</LocalizationProviderWrapper>;
};

export default TimePicker;
