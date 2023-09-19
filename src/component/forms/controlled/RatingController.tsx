'use client';

import { RatingProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import Rating from '../Rating';

type RatingControllerProps = Omit<RatingProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const RatingController = ({ name, rules, control, errors, ...otherProps }: RatingControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<>
					<Rating value={value} onChange={(_, value) => onChange(value)} {...otherProps} />
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default RatingController;
