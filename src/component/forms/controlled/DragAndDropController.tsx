'use client';

import { ButtonProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import DragDropFile from '../DragDropFile';


type CheckboxControllerProps = Omit<ButtonProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const DragDropController = ({ name, rules, control, errors, ...otherProps }: CheckboxControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ props }) => (
				<>
					<DragDropFile  name={name} {...otherProps} {...props} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default DragDropController;
