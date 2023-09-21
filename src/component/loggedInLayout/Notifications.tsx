import NotificationIcon from '@/assets/icons/Notifications'
import {
	Badge,
} from '@mui/material'
export default function Notifications() {

	return (
		<Badge
			badgeContent={2}
			color="error"
			style={{ cursor: 'pointer' }}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<NotificationIcon
				sx={{
					color: theme => theme?.palette?.primary?.dark,
					mb: "10px"
				}}
			/>
		</Badge>
	)
}
