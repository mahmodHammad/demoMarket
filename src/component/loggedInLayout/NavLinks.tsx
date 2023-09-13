import {
  SvgIconComponent,
} from "@mui/icons-material";
import BookingIcon from "@/assets/icons/BookingIcon";
import PaymentsIcon from "@/assets/icons/PaymentsIcon";
import FavouritesIcon from "@/assets/icons/FavouritesIcon";


type NavLink = { to: string; text: string; icon: SvgIconComponent };

export const navLinks: NavLink[] = [
  {
    to: "/",
    text: `My Bookings`,
    icon: BookingIcon,
  },

  {
    to: "/",
    text: `My Payments`,
    icon: PaymentsIcon,
  },
  {
    to: "/",
    text: `Favourites`,
    icon: FavouritesIcon,
  },
];
