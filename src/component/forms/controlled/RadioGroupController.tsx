'use client';

import { RadioGroupProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import RadioGroup from '../RadioGroup';

type Option = {
	label: string;
	value: number | string;
};

type RadioGroupControllerProps = Omit<RadioGroupProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		label: string;
		options: Option[];
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const RadioGroupController = ({
	name,
	label,
	options,
	rules,
	control,
	errors,
	...otherProps
}: RadioGroupControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<RadioGroup label={label} options={options} {...otherProps} {...field} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default RadioGroupController;
