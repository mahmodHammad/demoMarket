import React from 'react';
import { Box, Button, Container, Item, Text } from '@/wrappers';

export default function ViewPayments({ data }) {
    return (
        <>
            <Text variant="h4" sx={{ padding: '35px 0px 15px 10px' }}>
                My Payments
            </Text>
            <Container
                sx={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0px 6px 12px 0px rgba(28, 39, 49, 0.05)',
                    padding: '16px',
                    maxWidth: '370px'
                }}>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="label" sx={{ pt: '10px' }}>
                            Today at 11:00 PM
                        </Text>
                    </Box>
                </Item>

                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            PaymentType
                        </Text>
                        <Text variant="label">
                            Rental Income
                        </Text>
                    </Box>
                </Item>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            Date
                        </Text>
                        <Text variant="label">
                            12-10-2022
                        </Text>
                    </Box>
                </Item>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            Sender
                        </Text>
                        <Text variant="label">
                            mohammad
                        </Text>
                    </Box>
                </Item>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            Amount
                        </Text>
                        <Text variant="label">
                            SAR 10.000
                        </Text>
                    </Box>
                </Item>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            Unit name
                        </Text>
                        <Text variant="label">
                            404
                        </Text>
                    </Box>
                </Item>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            Community Name
                        </Text>
                        <Text variant="label">
                            Executive Living
                        </Text>
                    </Box>
                </Item>
                <Item xs={6}>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption">
                            Building Name
                        </Text>
                        <Text variant="label">
                            Block A
                        </Text>
                    </Box>
                </Item>
            </Container>
            <Button variant='contained' sx={{
                width: '100%',
                borderRadius: '16px',
                padding: '16px',
                marginTop: '35px',
                maxWidth: '370px',
                fontWeight: 700,
            }}>
                View Invoice
            </Button>
        </>
    );
}
