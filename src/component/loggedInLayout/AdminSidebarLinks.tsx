import { SvgIconComponent } from '@mui/icons-material';
import BookingIcon from '@/assets/icons/BookingIcon';
import PaymentsIcon from '@/assets/icons/PaymentsIcon';
import FavouritesIcon from '@/assets/icons/FavouritesIcon';
import DashboardIcon from '@/assets/icons/DashboardIcon';
import PropertiesIcon from '@/assets/icons/PropertiesIcon';
import VisitorIcon from '@/assets/icons/VisitorIcon';
import Advertisement from '@/assets/icons/Advertisement';

type NavLink = { to: string; text: string; icon: SvgIconComponent };

export const adminNavLinks: NavLink[] = [
	{
		to: '/dashboard',
		text: `Dashboard`,
		icon: DashboardIcon,
	},
	{
		to: '/visitors',
		text: `Visitors`,
		icon: VisitorIcon,
	},
	{
		to: '/properties',
		text: `Properties`,
		icon: PropertiesIcon,
	},
	{
		to: '/my-bookings',
		text: `Bookings`,
		icon: BookingIcon,
	},

	{
		to: '/my-payments',
		text: `Payments`,
		icon: PaymentsIcon,
	},

	{
		to: '/advertisement',
		text: `Advertisement`,
		icon: Advertisement,
	},
];

export const visitorNavLinks: NavLink[] = [
	{
		to: '/my-bookings',
		text: `Bookings`,
		icon: BookingIcon,
	},

	{
		to: '/my-payments',
		text: `Payments`,
		icon: PaymentsIcon,
	},
	{
		to: '/favourites',
		text: `Favourites`,
		icon: FavouritesIcon,
	},
];
