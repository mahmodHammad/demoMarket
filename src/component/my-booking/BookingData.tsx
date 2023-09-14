import { Button, Text} from "@/wrappers";
import { StyledTableRow, StyledTableCell } from "@/wrappers/table-cells";

export const bookingHeaders = () => {
    return [
        'Property Name',
        "Visit Type",
        "Visit Date and Time",
        "Status",
        "",
    ];
};

const BookingData = ({ data }: { data: any[] }) => {
    return (
        <>
            {data?.length &&
                data?.map((row: any) => (
                    <StyledTableRow key={row?.id} >
                        <StyledTableCell component="th" scope="row" sx={{ fontWeight: 700 }}>
                            {row?.name}
                        </StyledTableCell>
                        <StyledTableCell>
                            {row?.visitType}
                        </StyledTableCell>
                        <StyledTableCell>{row?.dateTime}</StyledTableCell>
                        <StyledTableCell>{renderProgress(row?.status)} </StyledTableCell>
                        <StyledTableCell>
                            {
                                <Button
                                    fullWidth
                                    sx={{
                                        py: 2,
                                    }}
                                >
                                    <Text variant="label" sx={{
                                        color: '#FF4242'
                                    }}>
                                        Cancel
                                    </Text>
                                </Button>
                            }
                        </StyledTableCell>

                        {/* <StyledTableCell>
                            <Button
                                fullWidth
                                color="primary"
                                sx={{
                                    py: 2,
                                }}
                                onClick={() => navigate('/multiUnit/' + row.id + '/', {
                                    state: {
                                        buildingDetails: row,
                                    },
                                })}
                            >
                                <Typography variant="caption" color="main">
                                    {t("signUp.viewDetails")}
                                </Typography>
                            </Button>
                        </StyledTableCell> */}
                        {/* <StyledTableCell>
                            <Button
                                fullWidth
                                color="primary"
                                variant="outlined"
                                sx={{
                                    py: 2,
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/buildings/" + row.id, {
                                        state: { missingData: row.missing_data },
                                    })
                                }
                                }
                            >
                                <Typography variant="caption" color="main">
                                    {t("signUp.edit")}
                                </Typography>
                            </Button>
                        </StyledTableCell> */}
                    </StyledTableRow>
                ))}
        </>
    );
};

export default BookingData;

const colorJson = {
    'Visit Booked': { bg: '#EBF0F1', color: '#002A37' },
    'Pay Down': { color: '#8A6A16', bg: '#FCEDC7' },
    'Payment Completed': { color: '#00697A', bg: '#EBF6F8' },
    'Completed': { color: '#0A9458', bg: '#EDFAF4' },
}
export const renderProgress = (status) => {
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
export const BookingFilterValues = {
    'Filter by status': [
        { name: 'Visit Booked', value: true, id: 'Visit Booked', status: 1 },
        { name: 'Pay Down', value: true, id: 'Pay Down', status: 18 },
        { name: 'Payment Completed', value: true, id: 'Payment Completed', status: 20 },
        { name: 'Completed', value: true, id: 'Completed', status: 3 },
    ]
}