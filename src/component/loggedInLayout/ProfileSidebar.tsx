import settingIcon from '@/assets/feather-settings.svg'
import {
	AccountCircleOutlined,
	ExitToApp,
	HelpOutline,
	HomeRounded,
	QuestionAnswerOutlined,
	SettingsOutlined,
} from '@mui/icons-material'
import {
	ButtonBase,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from '@mui/material'
import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import { useNavigate } from 'react-router-dom'

export default function ProfileSidebar() {
	// const { logOut } = useAuthContext()
	const [openDrawer, setOpenDrawer] = useState(false)
	// const navigate = useNavigate()
	// const { t } = useTranslation()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const handleLogout = async () => {
		// logOut()
	}
	const toggleDrawer = () => {
		setOpenDrawer((prevState) => !prevState)
	}

	const handleCloseMenu: any = () => {
		setAnchorEl(null)
	}

	return (
		<div className="relative ml-3">
			<ButtonBase className="rounded-full" onClick={toggleDrawer}>
				<img src={settingIcon} alt="settings" width="33px" />
			</ButtonBase>
			<Drawer anchor={'right'} open={openDrawer} onClose={toggleDrawer}>
				<Toolbar
					sx={{
						pt: '4rem',
					}}
				>
					<List>
						<ListItem
							button
							onClick={() => {
								toggleDrawer()
								// navigate('/')
							}}
						>
							<ListItemIcon>
								<HomeRounded />{' '}
							</ListItemIcon>
							<ListItemText primary={'ww'} />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								toggleDrawer()
								// navigate('/profile')
							}}
						>
							<ListItemIcon>
								<AccountCircleOutlined />{' '}
							</ListItemIcon>
							<ListItemText primary={'ss'} />
						</ListItem>
						<ListItem
							button
							key={'Complaints'}
							onClick={() => {
								toggleDrawer()
								// navigate('/dashboard/issues')
							}}
						>
							<ListItemIcon>
								<QuestionAnswerOutlined />{' '}
							</ListItemIcon>
							<ListItemText primary={"sdf"} />
						</ListItem>
						<ListItem
							button
							key={'Settings'}
							onClick={() => {
								toggleDrawer()
								// navigate('/settings')
							}}
						>
							<ListItemIcon>
								<SettingsOutlined />
							</ListItemIcon>
							<ListItemText primary={"we"} />
						</ListItem>


						<ListItem button key={'Log Out'} onClick={handleLogout}>
							<ListItemIcon>
								<ExitToApp style={{ color: '#FF0000' }} />
							</ListItemIcon>
							<ListItemText primary={"logout"} />
						</ListItem>
					</List>
				</Toolbar>
			</Drawer>
		</div>
	)
}
