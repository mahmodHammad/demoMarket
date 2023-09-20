'use client';

import { SelectProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import SimpleSelect from '../SimpleSelect';

type Item = {
	item: string;
	value: number | string;
};

type SimpleSelectControllerProps = Omit<SelectProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		items: Item[];
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const SimpleSelectController = ({
	name,
	items,
	rules,
	control,
	errors,
	...otherProps
}: SimpleSelectControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<SimpleSelect items={items} {...field} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default SimpleSelectController;
