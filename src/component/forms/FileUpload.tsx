import { Button, ButtonProps } from '@mui/material';
import UploadIcon from '@/assets/icons/UploadIcon';
import { Container, Text, Box } from '@/wrappers';
const FileUpload = (props: ButtonProps) => {
	return (
		<Container
			xcenter
			sx={{
				border: '1px solid',
				borderColor: '#D9DEE2',
				borderStyle: 'dashed',
				borderRadius: '8px',
				background: '#FFF',
				padding: '28px',
			}}>
			<Box xcenter column alignItems={'center'}>
				<UploadIcon />
				<Box xcenter column alignItems={'center'} mt={'15px'}>
					<Text variant="caption">
						Drop files directly here or
						<Box component="span" sx={{ fontSize: '14px', fontWeight: 700, color: 'black' }}>
							{' '}
							browse{' '}
						</Box>
						from your device
            <input hidden accept="image/*"  type="file" />
					</Text>
				</Box>
				PNG, JPG, GIF up to
				<Text> Max 2 files</Text>
			</Box>
		</Container>
	);
};

export default FileUpload;


{/* <Button component="label" variant="outlined" {...props}>
			<input hidden accept="image/*" multiple={props.multiple} type="file" />
			{props?.label}
		</Button> */}
