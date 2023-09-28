import theme from '@/ThemeRegistry/theme';
import UploadIcon from '@/assets/icons/UploadIcon';
import { Container, Text, Box } from '@/wrappers';
import { Button, ButtonProps } from '@mui/material';
import { useRef, useState } from 'react';

const DragDropFile = (props: any) => {
	const [files, setFiles] = useState([]);
  const inputFile = useRef<HTMLInputElement | null>(null);
	const onButtonClick = () => {
		// `current` points to the mounted file input element
		inputFile?.current?.click();
	};
	// triggers when file is dropped
	const handleDrop = (event) => {
		event.preventDefault();
		const { files } = event.dataTransfer;
		if (files.length > 0) {
			setFiles([...files]);
      // inputFile.current.value = [...files];
		}
	};

	const handleButtonUpload = (event) => {
		const { files } = event.target;
		if (files.length > 0) {
			setFiles([...files]);
      return[...files]
      // props.value= [...files];
      // inputFile.current.value = [...files];
		}
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	// const handleDragStart = (event) => {
	// 	event.dataTransfer.setData('text/plain', event.target.id);
	// };

  console.log(props,'shreyas')
	return (
		<Container
			xcenter
			onDrop={handleDrop}
			onDragOver={handleDragOver}
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
						<Box
							onClick={onButtonClick}
							component="span"
							sx={{ cursor:'pointer', fontSize: '14px', fontWeight: 700, color: theme.palette.primary.main }}>
							{' '}
							browse{' '}
						</Box>
						from your device
						<input id="file" {...props} onChange={handleButtonUpload} ref={inputFile} hidden accept="image/*" type="file" />
					</Text>
				</Box>
				<Text variant="caption" sx={{ color: '#969798' }}>
					Only JPEG,PNG files with max size of 2 MB
				</Text>
			</Box>
			{files.map((file, index) => (
				<li key={index}>{file.name}</li>
			))}
		</Container>
	);
};

export default DragDropFile;
