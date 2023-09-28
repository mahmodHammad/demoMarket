'use client'

import styled from "@emotion/styled";
import { TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        span: {
            fontSize: 16,
            fontWeight: 700,
            color: '#232425',
        }

    },
    [`&.${tableCellClasses.body}`]: {
        padding:'16px 12px 16px 12px'
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));