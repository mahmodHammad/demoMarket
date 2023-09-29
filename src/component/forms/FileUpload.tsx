import { Button, ButtonProps } from '@mui/material';
const FileUpload = (props: ButtonProps) => {
	return (
		<Button component="label" variant="outlined" {...props}>
			<input hidden accept="image/*" multiple={props.multiple} type="file" />
			{props?.label}
		</Button>
	);
};

export default FileUpload;
