import {
    Button,
    Text,
} from "@/wrappers";
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
                        <StyledTableCell component="th" scope="row">
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
                                    <Text variant="caption" sx={{
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
    'Visit Booked': '#E3E3E3',
    'Pay Down': '#FFC225',
    'Payment Completed': '#1EC27B',
    'Completed': '#1EC27B',
    6: '#FFC225',
    7: '#FF4242',
    8: '#1EC27B',
    9: '#FFC225',
    10: '#FF4242',
    11: '#1EC27B',
    12: '#FFC225',
    13: '#FFC225',
    14: '#FFC225',
    15: '#004256',
    16: '#FFC225',
    17: '#FF4242',
    18: '#004256',
    19: '#FFC225',
    20: '#FFC225',
    21: '#004256',
    22: '#FF4242',
    23: '#004256',
    24: '#FFC225',
}
export const renderProgress = (status) => {
    return (
        <>
            <span>
                <span style={{
                    background: colorJson[status],
                    minHeight: '10px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    minWidth: '10px',
                    marginRight: '3px'
                }}></span>  {status}
            </span>
        </>
    )
}