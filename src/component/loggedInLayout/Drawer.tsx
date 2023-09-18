import Sidebar from "./Sidebar";
import AtarColoredLogo from "@/assets/icons/AtarColoredLogo";
import { Box } from "@/wrappers/layouts";

const DrawerContainer = () => {
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
      <Sidebar />
    </>
  );
};
export default DrawerContainer;
