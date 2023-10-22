import Sidebar from './Sidebar';
import AtarColoredLogo from '@/assets/icons/AtarColoredLogo';
import { Box } from '@/wrappers/layouts';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import Link from 'next/link';

const drawerWidth: number = 240;
const open = true;
const DrawerContainer = ({ type }) => {
	const openedMixin = (theme: Theme): CSSObject => ({
		width: drawerWidth,
		border: 'none',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: 'hidden',
		padding: '0 1rem 1rem 2rem',
	});

	const closedMixin = (theme: Theme): CSSObject => ({
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		border: 'none',
		overflowX: 'hidden',
		width: `100px`,
		padding: '2rem',
	});

	const Drawer = styled(MuiDrawer, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			width: drawerWidth,
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			width: '100px',
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}));

	return (
		<Drawer
			variant="permanent"
			open={true}
			sx={{
				display: { xs: 'none', sm: 'block' },
			}}>
			<Box
				component={Link}
				href="/"
				sx={{
					paddingLeft: '24px',
					marginTop: '24px',
					marginBottom: '24px',
					height: 'auto',
					objectFit: 'contain',
					cursor: 'pointer',
				}}>
				<AtarColoredLogo
					sx={{
						height: '52px',
						width: '133px',
					}}
				/>
			</Box>
			<Sidebar type={type} />
		</Drawer>
	);
};
export default DrawerContainer;
