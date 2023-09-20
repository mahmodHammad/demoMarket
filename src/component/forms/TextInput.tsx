import { TextField, TextFieldProps } from '@mui/material';

const TextInput = (props: TextFieldProps) => {
	return (
		<TextField
			variant="outlined"
			fullWidth
			InputProps={{
				style: {
					borderColor: '#E3E3E3',
					borderRadius: '8px',
					fontSize: '16px',
				},
			}}
			{...props}
		/>
	);
};

export default TextInput;
