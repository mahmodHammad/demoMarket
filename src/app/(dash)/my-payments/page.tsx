import React from "react";
import { Container } from "@mui/material";
import { Text } from "@/wrappers";
import PaymentsTable from "@/component/my-payments/PaymentsTable";
import ViewPayments from "@/component/cards/ViewPayments";

interface Props { }

export default function MyPayments() {
    return (
        <>
            <Container>
                <Text variant="h4" sx={{ padding: '35px 0px 15px 36px' }}>
                    My Payments
                </Text> 
                 <PaymentsTable />
                {/* <ViewPayments /> */}
            </Container>
        </>
    );
}
