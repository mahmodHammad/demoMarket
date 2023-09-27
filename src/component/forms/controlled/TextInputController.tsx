'use client';

import { TextFieldProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import TextInput from '../TextInput';

type TextInputControllerProps = Omit<TextFieldProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const TextInputController = ({
	name,
	rules,
	control,
	errors,
	disabled,
	label,
	...otherProps
}: TextInputControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<Text variant="caption" sx={{ float: 'left', mb: '10px', color: `${disabled ? '#CACACA' : ''}` }}>
						{label}
					</Text>
					<TextInput {...field} {...otherProps} disabled={disabled} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default TextInputController;
