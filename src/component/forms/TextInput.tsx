import { TextField, TextFieldProps } from '@mui/material';

const TextInput = (props: TextFieldProps) => {
	return (
		<TextField
			variant="outlined"
			fullWidth
			InputProps={{
				style: {
					fontSize: '16px',
					background:`${props?.disabled ? '#F0F0F0' :''}`
				},
			}}
			{...props}
		/>
	);
};

export default TextInput;
