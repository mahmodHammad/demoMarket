import {
  SvgIconComponent,
} from "@mui/icons-material";
import BookingIcon from "@/assets/icons/BookingIcon";
import PaymentsIcon from "@/assets/icons/PaymentsIcon";
import FavouritesIcon from "@/assets/icons/FavouritesIcon";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import PropertiesIcon from "@/assets/icons/PropertiesIcon";
import VisitorIcon from "@/assets/icons/VisitorIcon";
import Advertisement from "@/assets/icons/Advertisement";


type NavLink = { to: string; text: string; icon: SvgIconComponent };

export const navLinks: NavLink[] = [
  {
    to: "/dashboard",
    text: `Dashboard`,
    icon: DashboardIcon,
  },
  {
    to: "/dashboard",
    text: `Visitors`,
    icon: VisitorIcon,
  },
  {
    to: "/dashboard",
    text: `Properties`,
    icon: PropertiesIcon,
  },
  {
    to: "/my-bookings",
    text: `Bookings`,
    icon: BookingIcon,
  },

  {
    to: "/my-payments",
    text: `Payments`,
    icon: PaymentsIcon,
  },
  {
    to: "/favourites",
    text: `Favourites`,
    icon: FavouritesIcon,
  },
  {
    to: "/favourites",
    text: `Advertisement`,
    icon: Advertisement,
  },
];
