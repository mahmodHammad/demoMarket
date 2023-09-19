'use client';

import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import PhoneInput from '../PhoneInput';

type PhoneInputControllerProps = Omit<UseControllerProps<FieldValues>, 'control'> & {
	name: string;
	control: any;
	errors?: UseFormReturn<FieldValues>['formState']['errors'];
};

const PhoneInputController = ({ name, rules, control, errors, ...otherProps }: PhoneInputControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<PhoneInput {...field} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default PhoneInputController;
