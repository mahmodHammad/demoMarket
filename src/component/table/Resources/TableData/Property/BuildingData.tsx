import {
  Button,
  StyledTableCell,
  StyledTableRow,
  Typography,
} from "@/Shared/layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const buildingHeaders = (t: any) => {
  return [
    t("headers.buildingName"),
    t("headers.location"),
    // t("headers.type"),
    t("headers.numOfUnits"),
    "",
    "",
  ];
};

const BuildingData = ({ data }: { data: any[] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      {data?.length &&
        data?.map((row: any) => (
          <StyledTableRow key={row?.id} >
            <StyledTableCell component="th" scope="row">
              {row?.name}
            </StyledTableCell>
            <StyledTableCell>
              {row?.district?.name} {row?.city?.name}
            </StyledTableCell>
            {/* <StyledTableCell>{row?.type}</StyledTableCell> */}
            <StyledTableCell>{row?.units_count}</StyledTableCell>

            <StyledTableCell>
              <Button
                fullWidth
                color="primary"
                sx={{
                  py: 2,
                }}
                onClick={()=>navigate('/multiUnit/'+row.id+'/', {
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
                onClick={(e) =>{
                  e.stopPropagation();
                  navigate("/buildings/" + row.id, {
                    state: { missingData: row.missing_data },
                  })}
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

export default BuildingData;
