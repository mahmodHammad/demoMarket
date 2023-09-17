import { Collapse, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Text } from '@/wrappers';

// import { useTranslation } from "react-i18next";
// import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from './NavLinks';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import SupportIcon from '@/assets/icons/SupportIcon';
import Link from 'next/link';
export default function Sidebar({ toggleDrawer, open }: any) {
  // const { t } = useTranslation();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [isopen, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleClick = (text) => {
    if (selected === text) {
      setSelected('');
      setOpen(false);
    } else {
      setSelected(text);
      setOpen(true);
    }
  };
  const handlenavigate = (to, text = '', selectedTab: 0) => {
    setSelected(text);
  };
  const returnColor = (to, links, text, theme) => {
    return theme?.palette?.primary?.main;
    if (location?.pathname === to) {
      return theme?.palette?.primary?.main;
    }
    if (links?.length) {
      if (isopen && selected === text) {
        return theme?.palette?.primary?.main;
      }
    } else if (selected === text) {
      return theme?.palette?.primary?.main;
    }

    return '';
  };

  return (
    <div
      style={{
        paddingTop: '18px',
        paddingBottom: '18px',
      }}>
      {navLinks?.map(({ text, to, icon: Icon, links }, index) => (
        <>
          <ListItem key={text} component={Link} href={to}>
            <ListItemButton component={Link} href={to}>
              <ListItemIcon>
                <Icon
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
                      // color: (theme: any) =>
                      //   returnColor(to, links, text, theme),
                    }}>
                    {text}
                  </Text>
                }
              />
            </ListItemButton>
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
                  // fontSize: "14px !important",
                  fontWeight: 700,
                }}>
                Support
              </Text>
            }
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
