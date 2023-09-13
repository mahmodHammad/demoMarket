
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  Fade,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";

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
      <Typography
        variant="subtitle1"
        sx={{ mt: 5, textTransform: "capitalize" }}
      >
        {name}
      </Typography>
      {isAdmin && (
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          Admin
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          backgroundColor: "rgba(75, 145, 140, 0.2)",
          padding: "8px 16px",
          borderRadius: "50px",
          mt: 5,
          cursor: "pointer",
        }}
        onClick={handleModal}
      >
        <QrCode2Icon
          sx={{
            color: "#4B918C",
          }}
        />
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
        My Digital ID
        </Typography>
      </Box>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          cursor: "pointer",
          transition: "0.1s linear",
          padding: "2px 6px",
          borderRadius: "10px",
          color: "#4D6075",
          "&:hover": {
            backgroundColor: grey[200],
          },
        }}
      >
        {startIcon}
        <Typography
          variant="subtitle1"
          sx={{
            mt: 1,
            flex: 1,
            fontWeight: 500,
            color: "#252E3B",
          }}
        >
          {label}
        </Typography>
        <ArrowForwardIosIcon
          sx={{
            fontSize: "1.6rem",
          }}
        />
      </Box>
    </Box>
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

  return (
    <Box ref={myRef}>
      <ButtonBase
        aria-describedby={id}
        className="rounded-full"
        onClick={handleClick}
      >
        <Avatar
          alt={'Shreyas'}
          src={''}
          sx={{ width: 40, height: 40 }}
        />
      </ButtonBase>

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
          },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper
              sx={{
                mt: 5,
                mr: 10,
                p: 2,
                bgcolor: "background.paper",
                color: "black",
                zindex: 20,
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  width: 400,
                  padding: "15px 40px 40px 40px",
                }}
              >
                <PopupDetails
                  image={''}
                  handleModal={() => setOpenModal(true)}
                  name={'SHreysas'}
                  isAdmin={true}
                />
                {/* options */}
                <Box
                  sx={{
                    mt: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <OptionLink
                    // onClick={() => navigate("/edit-profile")}
                    label={'Edit'}
                    startIcon={
                      <BorderColorOutlinedIcon
                        sx={{
                          fontSize: "2.4rem",
                        }}
                      />
                    }
                  />
                  <OptionLink
                    // onClick={() => navigate("/privacy_policy")}
                    label={"privacyPolicy"}
                    startIcon={
                      <PrivacyTipOutlinedIcon
                        sx={{
                          fontSize: "2.4rem",
                        }}
                      />
                    }
                  />
                  <OptionLink
                    // onClick={() => navigate("/terms_and_conditions")}
                    label={"termsAndConditions"}
                    startIcon={
                      <InfoOutlinedIcon
                        sx={{
                          fontSize: "2.4rem",
                        }}
                      />
                    }
                  />

                  <Divider sx={{ my: 2 }} />

                  <OptionLink
                    // onClick={() => navigate("/settings")}
                    label={"settings"}
                    startIcon={
                      <SettingsOutlinedIcon
                        sx={{
                          fontSize: "2.4rem",
                        }}
                      />
                    }
                  />


                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      color: "#FF0000",
                      mb: 10,
                      cursor: "pointer",
                      transition: "0.1s linear",
                      padding: "2px 6px",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: grey[200],
                      },
                    }}
                    onClick={() => {
                     
                    }}
                  >
                    <LogoutOutlinedIcon
                      sx={{
                        fontSize: "2.4rem",
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mt: 1,
                        flex: 1,
                        fontWeight: 500,
                      }}
                    >
                      logout
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default ProfileDropDown;
