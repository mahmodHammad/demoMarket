import {
  Box,
  Button,
  Item,
  StyledTableCell,
  StyledTableRow,
  Typography,
} from "@/Shared/layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  unittypeMapping,
  subtypeMapping,
  colorEnum,
} from "@/Constants/Unitmapping";
import { Avatar, Radio } from "@mui/material";
import UserDetails from "@/Shared/UserDetails";

export const unitHeaders = (t: any) => {
  return [
    t("headers.unitNum"),
    t("headers.type"),
    t("announcements.community"),
    t("headers.building"),
    t("signUp.tenantName"),
    t("Owner Name"),
    t("headers.status"),
    "",
  ];
};

const UnitData = ({ data, radioSelector }: { data: any[] }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const selectedUnit = radioSelector?.selectedUnit;
  const setSelectedUnit = radioSelector?.setSelectedUnit;

  const handleSelectUnit = (id) => {
    if (radioSelector) {
      setSelectedUnit(id);
    }
  };

  return (
    <>
      {data?.map((row: any) => (
        <StyledTableRow
          key={row?.id}
          onClick={() => handleSelectUnit(row)}
          sx={{
            cursor: radioSelector ? "pointer" : "",
          }}
        >
          <StyledTableCell component="th" scope="row">
            <Box row>
              {radioSelector ? (
                <Radio
                  checked={row?.id == selectedUnit?.id}
                  onChange={() => handleSelectUnit(row)}
                />
              ) : null}

              <Typography
                s={14}
                sx={{
                  color: "#232425",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row?.name}
              </Typography>
            </Box>
          </StyledTableCell>
          <StyledTableCell>
            <Typography s={14} sx={{ color: "#232425", fontWeight: 400 }}>
              {t(unittypeMapping[row?.unit_type])}
            </Typography>

            <Typography s={12} sx={{ color: "#525451", fontWeight: 400 }}>
              {t(
                subtypeMapping[row?.unit_type]?.[row?.additionalData?.sub_type]
              )}
            </Typography>
          </StyledTableCell>

          <StyledTableCell>{row?.community?.name || "--"}</StyledTableCell>
          <StyledTableCell>{row?.building?.name || "--"}</StyledTableCell>
          <StyledTableCell>
            {row?.tenant ? (
              <Box sx={{ mb: "-8px", mt: "-3px" }}>
                <UserDetails
                  hideAvatar={true}
                  name={row?.tenant?.name || "NA"}
                  phone={row?.tenant?.full_phone_number || "Not Assigned"}
                />
              </Box>
            ) : (
              "--"
            )}
          </StyledTableCell>
          <StyledTableCell>
            {row?.owner ? (
              <Box sx={{ mb: "-8px", mt: "-3px" }}>
                <UserDetails
                  hideAvatar={true}
                  name={row?.owner?.name || "NA"}
                  phone={row?.owner?.full_phone_number || "Not Assigned"}
                />
              </Box>
            ) : (
              "--"
            )}
          </StyledTableCell>
          <StyledTableCell>
            <Typography
              variant="caption"
              sx={{
                color: colorEnum[row?.status?.value]?.color,
                backgroundColor: colorEnum[row?.status?.value]?.background,
                borderRadius: 50,
                py: 2,
                px: 3,
                fontWeight: 500,
              }}
            >
              {t(row?.status?.description)}
            </Typography>
          </StyledTableCell>

          <StyledTableCell>
            <Button
              fullWidth
              color="primary"
              sx={{
                py: 2,
              }}
              onClick={() =>
                navigate("/units/" + row.id, {
                  state: { missingData: row.missing_data },
                })
              }
            >
              <Typography variant="caption" color="main">
                {t("signUp.viewDetails")}
              </Typography>
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
};

export default UnitData;
