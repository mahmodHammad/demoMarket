import { Container, Item } from "@/wrappers";
// import BackButton from "@/Utils/Buttons/BackButton";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HeaderWrapper = ({
  search,
  title,
  extraAction,
  actionButton,
  filtering,
  isBack,
  tabs,
  isTabs,
}: {
  title: ReactNode;
  search?: ReactNode;
  extraAction: ReactNode;
  actionButton: ReactNode;
  filtering: ReactNode;
  isBack: boolean;
  tabs?: ReactNode;
  isTabs?: boolean;
}) => {
  const navigate = useNavigate();
  const { type } = useParams();

  return (
    <>
      {isBack && (
        <Container
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Item>
            {/* <BackButton
              handleBackAction={() => {
                if (type === "complexes") {
                  navigate("", { replace: true });
                } else {
                  navigate(-1);
                }
              }}
            /> */}
          </Item>

          <Item>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3,max-content)",
                  lg: "repeat(3,max-content)",
                },
                alignItems: "center",
                gap: `15px`,
              }}
            >
              {search && search}
              {filtering}
              {actionButton}
            </Box>
          </Item>
        </Container>
      )}
      <Container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 8 }}
        spacing={4}
      >
        <Item>
          <>{title}</>
        </Item>
        <Item>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3,max-content)",
                lg: "repeat(3,max-content)",
              },
              alignItems: "center",
              gap: `15px`,
            }}
          >
            <>{extraAction}</>

            {!isBack && (
              <>
                {search && search}
                {filtering}
                {actionButton}
              </>
            )}
          </Box>
        </Item>
      </Container>
      {tabs}
    </>
  );
};

export default HeaderWrapper;
