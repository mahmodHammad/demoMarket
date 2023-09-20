'use client';

import { SwitchProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import Switch from '../Switch';

type SwitchControllerProps = Omit<SwitchProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const SwitchController = ({ name, rules, control, errors, ...otherProps }: SwitchControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<>
					<Switch onChange={(e) => onChange(e.target.checked)} checked={value} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default SwitchController;
