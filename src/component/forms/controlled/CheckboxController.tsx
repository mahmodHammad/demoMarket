'use client';

import { CheckboxProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import Checkbox from '../Checkbox';

type CheckboxControllerProps = Omit<CheckboxProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const CheckboxController = ({ name, rules, control, errors, ...otherProps }: CheckboxControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<>
					<Checkbox onChange={(e) => onChange(e.target.checked)} checked={value} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default CheckboxController;
