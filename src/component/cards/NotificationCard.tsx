import NotificationIcon from '@/assets/icons/Notifications';
import { Box, Text } from '@/wrappers';
import { Avatar, Badge, Divider } from '@mui/material';
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
			<Box row width={'100%'} maxWidth={'390px'} mt={'16px'}>
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

				<Box column>
					<Text variant="label">{title}</Text>
					<Text my={'8px'} variant="small">
						{content}
					</Text>
					<Text gray variant="caption">
						{date}
					</Text>
				</Box>
			</Box>
			<Divider></Divider>
		</>
	);
};

export default NotificationCard;
