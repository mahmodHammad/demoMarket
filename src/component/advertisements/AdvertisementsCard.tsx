import { Calendar } from '@/assets';
import { Box, Button, Text } from '@/wrappers';

import React from 'react';
import Image from 'next/image';
import { ButtonBase } from '@mui/material';

interface Props {
	img: string;
	title: string;
	duration: string;
}
const AdvertisementsCard = (props: Props) => {
	return (
		<ButtonBase sx={{ width: '100%' }}>
			<Box
				sx={{
					boxShadow: '0px 6px 12px 0px #1C27310D',
					width: '100%',
					borderRadius: '16px',
				}}>
				<Box
					sx={{
						width: '100%',
						height: { xs: '88px', md: '88px' },
						borderRadius: '16px 16px 0 0',
						objectFit: 'cover',
					}}
					component={Image}
					src={props.img}
				/>
				<Box column sx={{ p: ' 16px' }}>
					<Box xstart>
						<Text variant="h5">{props.title} </Text>
					</Box>

					<Box row ycenter mt={'22px'}>
						<Calendar bgcolor={'red'} />
						<Box column xstart>
							<Box xstart>
								<Text variant="caption">ADs duration</Text>
							</Box>
							<Text variant="label">{props.duration}</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</ButtonBase>
	);
};

export default AdvertisementsCard;
