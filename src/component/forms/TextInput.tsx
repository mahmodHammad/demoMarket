import { TextField, TextFieldProps } from '@mui/material';

const TextInput = (props: TextFieldProps) => {
	return (
		<TextField
			variant="outlined"
			fullWidth
			InputProps={{
				sx: {
					borderColor: '#E3E3E3',
					borderRadius: '8px',
					height: { md: '46px', xs: '40px' },
					fontSize: { md: '15px', xs: '11.8px' },
					background: `${props?.disabled ? '#F0F0F0' : ''}`,
					'&.MuiInputBase-multiline': {
						height: '100px !important',
					},
				},
			}}
			{...props}
		/>
	);
};

export default TextInput;
