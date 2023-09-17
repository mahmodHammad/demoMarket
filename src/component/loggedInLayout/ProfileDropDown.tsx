
import { Box, Text } from "@/wrappers";
import {
  Avatar,
  ButtonBase,
  Fade,
  Paper,
  Popper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Pencilline from "@/assets/icons/Pencilline";
import ShieldKeyholeLine from "@/assets/icons/ShieldKeyholeLine";
import LogoutBoxLine from "@/assets/icons/LogoutBoxLine";
import InformationLine from "@/assets/icons/InformationLine";
import NextIcon from "@/assets/icons/NextIcon";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const PopupDetails = ({
  name,
  isAdmin,
  handleModal,
  image,
}: {
  name: string;
  isAdmin: boolean;
  handleModal: () => void;
  image: string;
}) => {
  // const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Avatar
        alt={name.toUpperCase()}
        src={image}
        sx={{ width: 80, height: 80 }}
      />
      <Text
        variant="h5"
        sx={{ mt: '8px', textTransform: "capitalize" }}
      >
        {name}
      </Text>
    </Box>
  );
};

const OptionLink = ({
  onClick,
  label,
  startIcon,
  url = "",
}: {
  label: string;
  startIcon: any;
  url?: string;
}) => {
  return (
    <Box
      onClick={onClick}
      style={{
        textDecoration: "none",
      }}
    >
      <Box ycenter xbetween
        sx={{
          cursor: "pointer",
          padding: "12px 24px",
          borderRadius: "10px",
        }}
      >
        <Box ycenter
          sx={{
            gap: "8px",
          }}
        >
          {startIcon}
          <Text variant="label">
            {label}
          </Text>
        </Box>
        <NextIcon />
      </Box>
    </Box >
  );
};

const ProfileDropDown = () => {
  // const { t } = useTranslation();


  // const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const myRef = React.useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "spring-popper" : undefined;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (myRef.current && !myRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const handleClickAway = () => {
    setOpen(false);
  }
  return (
    <Box ref={myRef}>
      <ButtonBase
        aria-describedby={id}
        className="rounded-full"
        onClick={handleClick}
      >
        <Avatar
          alt={'Image'}
          src={''}
          sx={{ width: 40, height: 40 }}
        />
      </ButtonBase>
      {open &&
        <ClickAwayListener onClickAway={handleClickAway}>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            transition
            sx={{
              zIndex: 1200,
              "& .MuiPaper-root": {
                boxShadow: "0px 0px 21px rgba(218, 218, 218, 0.3)",
                borderRadius: "12px",
                minWidth: '330px'
              },
            }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps}>
                <Paper
                  sx={{
                    mt: '30px',
                    mr: '30px',
                    // p: 2,
                    bgcolor: "background.paper",
                    color: "black",
                    zindex: 20,
                    borderRadius: 3,
                  }}
                >
                  <Box
                    sx={{
                      // width: 400,
                      padding: "21px 24px 21px 24px",
                    }}
                  >
                    <PopupDetails
                      image={''}
                      handleModal={() => setOpenModal(true)}
                      name={'Mohammad Abdullah'}
                      isAdmin={true}
                    />
                    {/* options */}
                    <Box
                      sx={{
                        mt: '24px',
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <OptionLink
                        // onClick={() => navigate("/edit-profile")}
                        label={'Edit'}
                        startIcon={
                          <Pencilline />
                        }
                      />
                      <OptionLink
                        // onClick={() => navigate("/privacy_policy")}
                        label={"Privacy Policy"}
                        startIcon={
                          <ShieldKeyholeLine />
                        }
                      />
                      <OptionLink
                        // onClick={() => navigate("/terms_and_conditions")}
                        label={"Terms And Conditions"}
                        startIcon={
                          <InformationLine />
                        }
                      />
                      <OptionLink
                        // onClick={() => navigate("/terms_and_conditions")}
                        label={"Logout"}
                        startIcon={
                          <LogoutBoxLine />
                        }
                      />
                    </Box>
                  </Box>
                </Paper>
              </Fade>
            )}
          </Popper>
        </ClickAwayListener>
      }
    </Box>
  );
};

export default ProfileDropDown;
