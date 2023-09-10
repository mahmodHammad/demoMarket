import React from 'react';
import { Box, Text } from '@/wrappers';
import { InfoIcon, ErrorInfoIcon, SuccessInfoIcon } from '@/assets';
import { IconButton } from '@mui/material';

const theme = {
	info: {
		bg: '#EBF0F1',
		title: '#232425',
		description: '#232425',
	},
	success: {
		bg: '#EDFAF4',
		title: '#232425',
		description: '#232425',
	},
	error: {
		bg: '#FFE5E5',
		title: '#812222',
		description: '#812222',
	},
};

type PropsTypes = {
	type?: 'info' | 'success' | 'error';
	title?: string;
	description: string;
};

const InfoBox = ({ type = 'success', title, description }: PropsTypes) => {
	return (
		<Box
			row
			ycenter
			gap={'12px'}
			sx={{
				width: '100%',
				p: '12px',
				bgcolor: theme[type].bg,
				borderRadius: '8px',
			}}
		>
			<IconButton sx={{ p: 0 }}>
				{type === 'info' && <InfoIcon />}
				{type === 'success' && <SuccessInfoIcon />}
				{type === 'error' && <ErrorInfoIcon />}
			</IconButton>

			<Box column>
				<Text
					bold
					s={14}
					color={theme[type].title}
				>
					{title}
				</Text>

				<Text
					light
					s={12}
					color={theme[type].description}
				>
					{description}
				</Text>
			</Box>
		</Box>
	);
};

export default InfoBox;
