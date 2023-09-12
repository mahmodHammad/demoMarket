import React from 'react';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { Search } from '@/assets';

const TextInput = (props: TextFieldProps) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      {...props}
      InputLabelProps={{
        style: {
          // color: 'blue',
          // fontSize: '16px',
          // paddingLeft: "14px",
        },
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
