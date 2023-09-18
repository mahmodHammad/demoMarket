// commented code of <collapse> is for multi-level router.
import {
  Collapse,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Text } from "@/wrappers";

// import { useTranslation } from "react-i18next";
// import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "./NavLinks";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import SupportIcon from "@/assets/icons/SupportIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar({ toggleDrawer, open }: any) {
  // const { t } = useTranslation();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [isopen, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const pathname = usePathname()

  const handleClick = (text) => {
    if (selected === text) {
      setSelected("");
      setOpen(false);
    } else {
      setSelected(text);
      setOpen(true);
    }
  };
  const handlenavigate = (to, text = "", selectedTab: 0) => {
    setSelected(text);
    // navigate(to, {
    //   replace: true,
    //   state: { selectedTab: selectedTab },
    // });
  };
  const returnColor = (to, links, text, theme) => {
    // return theme?.palette?.primary?.main;
    console.log(theme?.palette?.secondary.light, to, 'shreyas1')
    if (pathname === to) {
      return theme?.palette?.primary?.main;
      return 'primary.main';
    } else {
      return theme?.palette?.secondary.light;
      return 'secondary.light';
    }
    // if (links?.length) {
    //   if (isopen && selected === text) {
    //     return theme?.palette?.primary?.main;
    //   }
    // } else if (selected === text) {
    //   return theme?.palette?.primary?.main;
    // }

    return "";
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
            // button
            // onClick={() =>
            //   links?.length ? handleClick(text) : handlenavigate(to, text)
            // }
            >
              <ListItemIcon>
                <Icon
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
              {/* {links?.length ? (
                isopen && selected === text ? (
                  <ExpandLessIcon color="primary" />
                ) : (
                  <ExpandMoreIcon />
                )
              ) : (
                <></>
              )} */}
            </ListItem>
            {/* <Collapse in={selected === text} timeout="auto" unmountOnExit>
              {links?.map(
                ({ text, to, icon: Icon, links, selectedTab }, index) => (
                  <ListItem component="div" disablePadding key={index}>
                    <ListItemButton
                      onClick={() => {
                        handlenavigate(to, "", selectedTab);
                        // navigate(to, { replace: true });
                      }}
                    >
                      <ListItemIcon></ListItemIcon>
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
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </Collapse> */}
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
                // fontSize: "14px !important",
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
