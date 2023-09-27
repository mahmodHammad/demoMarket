import NotificationIcon from '@/assets/icons/Notifications';
import { Box, Text } from '@/wrappers';
import { Avatar, Badge, ButtonBase, Divider } from '@mui/material';
import React from 'react';

type Props = {
	title: string;
	content: string;
	read: boolean;
	date: string;
};
const NotificationCard = ({ title, content, read, date }: Props) => {
	return (
		<>
			<Box
				px={2}
				row
				width={'100%'}
				maxWidth={'390px'}
				mt={'16px'}
				sx={{
					transition: 'transform 0.15s ease-in-out',
					'&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
				}}>
				<Box mr={'13px'}>
					<Badge
						variant="dot"
						invisible={read}
						color="success"
						overlap="circular"
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}>
						<Avatar sx={{ bgcolor: '#FFD568' }}>
							<NotificationIcon
								sx={{
									color: 'white',
								}}
							/>
						</Avatar>{' '}
					</Badge>
				</Box>

				<Box column xstart>
					<Text variant="label" align="left">
						{title}
					</Text>

					<Text my={'8px'} variant="small" align="left">
						{content}
					</Text>

					<Text gray variant="caption" align="left">
						{date}
					</Text>
				</Box>
			</Box>

			<Divider></Divider>
		</>
	);
};

export default NotificationCard;
