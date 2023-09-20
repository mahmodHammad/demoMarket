'use client';

import { SliderProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import Slider from '../Slider';

type SliderControllerProps = Omit<SliderProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const SliderController = ({ name, rules, control, errors, ...otherProps }: SliderControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<>
					<Slider
						value={value}
						onChange={(_, value) => onChange(value)}
						onChangeCommitted={(_, value) => onChange(value)}
						{...otherProps}
					/>
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default SliderController;
