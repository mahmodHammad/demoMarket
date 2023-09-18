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


export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div style={{
      paddingTop: '18px',
      paddingBottom: '18px'
    }}>
      {navLinks
        .map(({ text, to, icon: Icon }) => (
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
                    color: pathname === to ? '#008EA5' : '#232425',
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Text
                    variant="small"
                    sx={{
                      fontWeight: 700,
                      color: pathname === to ? '#008EA5' : '#232425',
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
        <ListItemButton>
          <ListItemIcon>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Text
                variant="small"
                sx={{
                  fontWeight: 700,
                }}
              >
                Support
              </Text>
            }
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
