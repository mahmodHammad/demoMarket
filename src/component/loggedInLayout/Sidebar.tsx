import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Text } from "@/wrappers";
import { navLinks } from "./NavLinks";
import SupportIcon from "@/assets/icons/SupportIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar({ toggleDrawer, open }: any) {
  const pathname = usePathname()

  const returnColor = (to, links, text, theme) => {
    if (pathname === to) {
      return '#008EA5';
    } else {
      return '#232425';
    }
  };

  return (
    <div style={{
      paddingTop: '18px',
      paddingBottom: '18px'
    }}>
      {navLinks
        ?.filter(({ hidefor }) => !hidefor?.includes(CurrentBrand))
        .map(({ text, to, icon: Icon, links }, index) => (
          <>
            <ListItem
              component={Link}
              key={text}
              href={to}
            >
              <ListItemIcon>
                <Icon
                // ||ask peers about this icon color issue||
                  // color={returnColor(to, links, text, theme)}
                  sx={{
                    color: (theme: any) => returnColor(to, links, text, theme),
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Text
                    variant="small"
                    sx={{
                      fontWeight: 700,
                      color: (theme: any) =>
                        returnColor(to, links, text, theme),
                    }}
                  >
                    {text}
                  </Text>
                }
              />
            </ListItem>
          </>
        ))}
      <Divider variant="middle" />
      <ListItem disablePadding>
        <ListItemButton
        >
          <ListItemIcon
          >
            <SupportIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text
              variant="small"
              sx={{
                fontWeight: 700,
              }}
            >
              Support
            </Text>}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
