import { Delete, Plus } from '@/assets';
import Pencilline from '@/assets/icons/Pencilline';
import { Box, Button, Text } from '@/wrappers';
import Link from 'next/link';
import React from 'react';
import photo3 from '@/assets/images/photo3.png';
import Image from 'next/image';

const AdvertismentDetails = () => {
	return (
		<Box column width={'100%'}>
			<Box center width={'100%'} xbetween row>
				<Text variant="h4">15% CASH </Text>

				<Box>
					{' '}
					<Button sx={{ mr: '20px' }} variant="dangerOutlined" component={Link} href="" startIcon={<Delete />}>
						Delete Announcement
					</Button>
					<Button
						variant="outlined"
						component={Link}
						href="advertisement/Create-Advertisements"
						startIcon={<Pencilline sx={{ fill: '#FF4242' }} />}>
						Edit
					</Button>
				</Box>
			</Box>

			<Box sx={{ width: '80%', mt: '42px' }}>
				<Box
					sx={{
						boxShadow: '0px 6px 12px 0px #1C27310D',
						width: '100%',
						borderRadius: '16px',
					}}>
					<Box
						sx={{
							width: '100%',
							height: { xs: '88px', md: '200px' },
							borderRadius: '16px 16px 0 0',
							objectFit: 'cover',
						}}
						component={Image}
						src={photo3}
					/>
					<Box column sx={{ p: ' 16px' }}>
						<Box xstart>
							<Text variant="h4">Description </Text>
						</Box>

						<Box row ycenter mt={'22px'}>
							<Box column xstart>
								<Text variant="Text">
									Refrigerator is not cooling for the past two days and there is a bad smell coming from behind
									itRefrigerator is not cooling for the past two days and there is a bad smell coming from behind
									itRefrigerator is not cooling for the past two days and there is a bad smell coming from behind
									itRefrigerator is not cooling for the past two days and there is a bad smell coming from behind
									itRefrigerator is not cooling for the past two days and there is a bad smell coming from behind it
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AdvertismentDetails;
