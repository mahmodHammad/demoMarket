import React from "react";
import { Container } from "@mui/material";
import ViewPayments from "@/component/cards/ViewPayments";

interface Props { }

export default function MyPayments() {
    return (
        <>
            <Container>
                <ViewPayments />
            </Container>
        </>
    );
}
