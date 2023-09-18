import { Button, Text } from "@/wrappers";
import { StyledTableRow, StyledTableCell } from "@/wrappers/table-cells";
import Link from "next/link";

export const paymentHeaders = () => {
    return [
        'Payment Type',
        "Payment Method",
        "Date",
        "Amount",
        "Progress",
        "Status",
        ""
    ];
};

const PaymentData = ({ data }: { data: any[] }) => {
    return (
        <>
            {data?.length &&
                data?.map((row: any) => (
                    <StyledTableRow key={row?.id} >
                        <StyledTableCell component="th" scope="row" sx={{ fontWeight: 700 }}>
                            {row?.type}
                        </StyledTableCell>
                        <StyledTableCell>
                            {row?.method}
                        </StyledTableCell>
                        <StyledTableCell>{row?.date}</StyledTableCell>
                        <StyledTableCell>{row?.amount}</StyledTableCell>
                        <StyledTableCell>{renderProgress(row?.status)} </StyledTableCell>
                        <StyledTableCell>{renderProgress(row?.status)} </StyledTableCell>
                        <StyledTableCell>
                            {
                                <Button
                                    fullWidth
                                    sx={{ py: 2, }}
                                    component={Link}
                                    href={'/payment-details'}
                                >
                                    <Text variant="body" sx={{ color: '#008EA5' }}>
                                        View Details
                                    </Text>
                                </Button>
                            }
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
        </>
    );
};

export default PaymentData;

const colorJson = {
    'Pending': { color: '#8A6A16', bg: '#FCEDC7' },
    'Pay Down': { color: '#0A9458', bg: '#EDFAF4' },
}
const renderProgress = (status) => {
    return (
        <>
            <span style={{
                color: colorJson[status]?.color,
                backgroundColor: colorJson[status]?.bg,
                borderRadius: 50,
                padding: '10px',
                fontWeight: 500,
            }}>
                {status}
            </span>
        </>
    )
}

//Filter values for filtering Requests. 1st level is accordian name. 2nd level is key-value for filters.
export const PaymentFilterValues = {
    'Filter by status': [
        { name: 'Pay Down', value: true, id: 'Pay Down', status: 18 },
        { name: 'Pending', value: true, id: 'Completed', status: 3 },
    ]
}