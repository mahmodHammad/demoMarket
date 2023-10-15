import { Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps } from '@mui/material';
import React from 'react';
import { Controller, UseControllerProps, UseFormReturn } from 'react-hook-form';

export type LabelledCheckboxControllerProps = CheckboxProps &
	Pick<FormControlLabelProps, 'label'> &
	UseControllerProps & {
		name: string;
		stringvalue: string;
		control: UseFormReturn['control'];
		errors?: UseFormReturn['formState']['errors'];
	};

export default function LabelledCheckboxController({
	name,
	label,
	control,
	errors,
	onFocus,
	defaultValue,
	rules,
	stringvalue,
	...checkboxProps
}: LabelledCheckboxControllerProps) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControlLabel
					name={name}
					sx={{
						backgroundColor: '#FFF',
						textAlign: 'center',
						display: 'inline-block',
						p: '8px 23px',
						// color: `${field.value ? '#008EA5' : '#232425'}`,
						border: `1px solid ${field.value ? '#008EA5' : '#E3E3E3'}
            `,
						borderRadius: '8px',
						mr: '24px',

						textTransform: 'capitalize',
						transition: '0.2s ease all',
						'& .MuiFormControlLabel-label': {
							color: `${field.value ? '#008EA5' : '#232425'}`,
							fontSize: '18px',
							fontWeight: 700,
						},
					}}
					control={
						<Checkbox
							checked={field.value}
							onBlur={field.onBlur}
							onChange={(e, value) => {
								field.onChange(value ? stringvalue?.name : false);
							}}
							name={name}
							{...checkboxProps}
							style={{ display: 'none' }}
						/>
					}
					label={label}
				/>
			)}
			defaultValue={defaultValue || false}
			rules={rules}
		/>
	);
}
