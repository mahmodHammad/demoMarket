import { Calendar } from '@/assets';
import { Box, Button, Text } from '@/wrappers';

import React from 'react';
import Image from 'next/image';
import { ButtonBase } from '@mui/material';
import photo1 from '@/assets/images/photo1.png';
import dayjs from 'dayjs';

interface Props {
	img: string;
	title: string;
	duration: []; // 1st element is start and 2nd is end
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
				<div
					style={{
						width: '100%',
						height: '88px',
						borderRadius: '16px 16px 0 0',
						position: 'relative',
					}}>
					{props?.img && (
						<Image
							style={{
								objectFit: 'cover',
								position: 'absolute',
								borderRadius: '16px 16px 0 0',
							}}
							layout="fill"
							alt={'ssss'}
							src={props?.img}
						/>
					)}
				</div>
				<Box column sx={{ p: ' 16px' }}>
					<Box xstart>
						<Text variant="h5">{props?.title} </Text>
					</Box>

					<Box row ycenter mt={'22px'}>
						<Calendar  />
						<Box column xstart>
							<Box xstart>
								<Text variant="caption">ADs duration</Text>
							</Box>
							<Text variant="label">
								{dayjs(props?.duration[0]).format('ll')} - {dayjs(props?.duration[1]).format('ll')}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</ButtonBase>
	);
};

export default AdvertisementsCard;
