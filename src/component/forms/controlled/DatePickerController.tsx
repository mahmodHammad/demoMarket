'use client';

import DatePicker from '../DatePicker';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';

type DatePickerControllerProps = Omit<DatePickerProps<Date>, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const DatePickerController = ({ name, rules, control, errors, disabled, label, ...otherProps }: DatePickerControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<Text variant="caption" sx={{ mb: '10px', color: `${disabled ? '#CACACA' : ''}` }}>
						{label}
					</Text>
					<DatePicker {...field} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				
					</>
			)}
		/>
	);
};

export default DatePickerController;
