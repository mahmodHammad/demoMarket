'use client';

import { ButtonProps } from '@mui/material';
import { Controller, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import { Text } from '@/wrappers';
import FileUpload from '../FileUpload';

type FileUploadControllerProps = Omit<ButtonProps, 'name'> &
	Omit<UseControllerProps<FieldValues>, 'control'> & {
		name: string;
		label: string;
		accept?: string;
		multiple?: boolean;
		control: any;
		errors?: UseFormReturn<FieldValues>['formState']['errors'];
	};

const FileUploadController = ({
	name,
	rules,
	control,
	errors,
	label,
	accept,
	multiple = false,
	...otherProps
}: FileUploadControllerProps) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<>
					<FileUpload
						label={label}
						onChange={(e) => onChange(e.target.files)}
						value={value?.fileName}
						{...otherProps}
					/>
					{errors && errors[name] && <Text color="error">{`${errors[name]?.message}`}</Text>}
				</>
			)}
		/>
	);
};

export default FileUploadController;
