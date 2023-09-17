
import { List, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import AtarWhiteLogo from "@/assets/icons/AtarWhiteLogo";
import AtarColoredLogo from "@/assets/icons/AtarColoredLogo";
import { Box } from "@/wrappers/layouts";

const DrawerContainer = ({ handleDrawerToggle, open }: any) => {
  //   const { user } = useAuthContext();
  // const navigate = useNavigate();

  //   const getRole = (us: any) => {
  //     if (us?.role === "MANAGEMENT") {
  //       let mid: any = managerTypeList.find((f) => f.id === us?.manager_type);
  //       return mid?.name;
  //     }
  //     return us?.role;
  //   };
  return (
    <>
      <Box sx={{
        paddingLeft: '24px',
        marginTop: '24px',
        marginBottom: '24px',
        height: "auto",
        objectFit: "contain",
        cursor: "pointer",
      }}>
        <AtarColoredLogo
          sx={{
            height: "52px",
            width: "133px",
          }}
        />
      </Box>
      <Sidebar toggleDrawer={handleDrawerToggle} open={open} />
    </>
  );
};
export default DrawerContainer;
