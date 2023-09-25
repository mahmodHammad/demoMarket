import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Text } from "@/wrappers";
import { StyledTableCell } from "@/wrappers/table-cells";

export default function DataTable({
  headerData,
  children,
  pagination,
  filters,
  isLoading,
  isEmpty = true,
}: //   open,
  //   toggleDelete,
  //   deleteFunc,
  {
    headerData: any;
    children?: any;
    pagination?: any;
    filters?: any;
    isLoading?: boolean;
    isEmpty?: boolean;
    //   open: any;
    //   toggleDelete: any;
    //   deleteFunc: any;
  }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {isLoading ? (
          //<TableHead>
          <Box center column sx={{ py: "64px" }}>
            {/* <img src={nodataImg} width="80px" height="80px" alt="loadingData" /> */}
            <Text s={24} sx={{ mt: "16px" }}>
              {"Loading Data"}
            </Text>
          </Box>
        ) : //</TableHead>

          (
            <>
              <TableHead>
                {(filters || pagination) && (
                  <TableRow>
                    <StyledTableCell colSpan={headerData.length}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {filters && filters}
                        </Box>
                        <Box>{pagination && pagination}</Box>
                      </Box>
                    </StyledTableCell>
                  </TableRow>
                )}
                {isEmpty ? (
                  <Box center column sx={{ py: "64px" }}>
                    <Text s={24} sx={{ mt: "16px" }}>
                      {"No Data Available"}
                    </Text>
                    <Text s={16} sx={{ fontWeight: 400 }}>
                      {'No Data Available'}
                    </Text>
                  </Box>
                ) : (
                  <TableRow>
                    {headerData.map((item: any, index) => (
                      <StyledTableCell key={index}>
                        <Text variant="caption">{item}</Text>
                      </StyledTableCell>
                    ))}
                  </TableRow>
                )}
              </TableHead>
              <TableBody>{children}</TableBody>
            </>
          )}
      </Table>
    </TableContainer>
  );
}
