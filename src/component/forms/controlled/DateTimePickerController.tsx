'use client';

import DateTimePicker from '../DateTimePicker';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';

type DateTimePickerControllerProps = Omit<DateTimePickerProps<Date>, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const DateTimePickerController = ({ name, rules, control, errors, ...otherProps }: DateTimePickerControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<DateTimePicker {...field} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default DateTimePickerController;
