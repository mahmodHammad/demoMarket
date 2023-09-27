'use client';

import TimePicker from '../TimePicker';
import { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';

type TimePickerControllerProps = Omit<TimePickerProps<Date>, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const TimePickerController = ({ name, rules, control, errors, ...otherProps }: TimePickerControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<TimePicker {...field} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default TimePickerController;
