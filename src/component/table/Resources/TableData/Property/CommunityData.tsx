import {
  Button,
  StyledTableCell,
  StyledTableRow,
  Typography,
} from "@/Shared/layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const communityHeaders = (t: any) => {
  return [
    t("headers.commName"),
    t("headers.location"),
    t("headers.numOfBuildings"),
    t("headers.numOfUnits"),
    // t("headers.status"),
    "",
    "",
  ];
};

const CommunityData = ({ data }: { data: any[] }) => {
  console.log("CommunityData", data)
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      {data?.length &&
        data.map((row: any) => (
          <StyledTableRow key={row?.id}>
            <StyledTableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
              {row?.name}
            </StyledTableCell>
            <StyledTableCell>
              {row?.district?.name}/ {row?.city?.name}
            </StyledTableCell>
            <StyledTableCell>{row?.buildings_count} </StyledTableCell>
            <StyledTableCell> {row?.units_count} </StyledTableCell>
            {/*
            */}
            {/* <StyledTableCell> -- </StyledTableCell> */}
            {/* <StyledTableCell>
              <Typography
                variant="caption"
                color="error"
                sx={{
                  backgroundColor: (theme: any) =>
                    theme.palette.primary.errorBackground,
                  borderRadius: 50,
                  py: 2,
                  px: 3,
                }}
              >
                -- 
              </Typography>
            </StyledTableCell> */}
            <StyledTableCell>
              <Button
                fullWidth
                color="primary"
                sx={{
                  py: 2,
                }}
                onClick={() => navigate('/multiBuilding/' + row.id + '/multi-units', {
                  state: {
                    buildingDetails: row,
                  },
                })}
              >
                <Typography variant="caption" color="main">
                  {t("signUp.viewDetails")}
                </Typography>
              </Button>
            </StyledTableCell>
            <StyledTableCell>
              <Button
                fullWidth
                color="primary"
                variant="outlined"
                sx={{
                  py: 2,
                }}
                onClick={() =>
                  navigate("/communities/" + row.id, {
                    state: { missingData: row.missing_data },
                  })
                }
              >
                <Typography variant="caption" color="main">
                  {t("signUp.edit")}
                </Typography>
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        ))}
    </>
  );
};

export default CommunityData;
