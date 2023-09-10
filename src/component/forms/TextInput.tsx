import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@/assets';

type Props = {
	placeholder?: string;
};

const TextInput = ({ placeholder }: Props) => {
	return (
		<TextField
			variant='outlined'
			label={placeholder}
			fullWidth
			InputLabelProps={{
        style: {
					// color: 'blue',
					// fontSize: '16px',
					// paddingLeft: "14px",
				}
      }}
			InputProps={{
				style: {
					borderColor: '#E3E3E3',
					borderRadius: '8px',
					fontSize: '16px',
				},
				// 	startAdornment: (
				// 		<InputAdornment position='start'>
				// 			<Search />
				// 		</InputAdornment>
				// 	)
			}}
		/>
	);
};

export default TextInput;
