import React from 'react';
import { Box, Button, Container, Item, Text } from '@/wrappers';
import Image from 'next/image';

interface proptypes {
    img: null;
    title: string;
    dateTime: string;
    location: string;
}
export default function UpcomingVisitsCard({ img, title, location, dateTime }: proptypes) {
    return (
        <Container
            sx={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: '0px 6px 12px 0px rgba(28, 39, 49, 0.05)',
            }}>
            <Item xs={5} sx={{ padding: '12px 15px 11px 14px' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: { xs: '150px', md: '237px' },
                        borderRadius: '16px',
                        // padding: '10px',
                        objectFit: 'cover'
                    }}
                    component={Image}
                    placeholder="blur"
                    alt="houses and properties for rent"
                    src={img}
                />
            </Item>
            <Item xs={7}>
                <Box
                    sx={{
                        width: '100%',
                        // height: { xs: '80px', md: '136px' },
                        py: '12px',
                        px: '16px',
                    }}>
                    <Text variant="label">
                        {title}
                    </Text>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption" sx={{color:'#CACACA'}}>
                            Location
                        </Text>
                        <Text variant="label">
                            {location || 'location'}
                        </Text>
                    </Box>
                    <Box column
                        sx={{
                            mt: '16px',
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Text variant="caption" sx={{color:'#CACACA'}}>
                            Visit Date & Time
                        </Text>
                        <Text variant="label">
                            {dateTime || 'dateTime'}
                        </Text>
                    </Box>
                    <Box
                        column
                        sx={{
                            mt: '16px',
                        }}>
                        <Button
                            variant="outlined"
                            color='error'>
                            Cancel Visit
                        </Button>
                    </Box>
                </Box>
            </Item>
        </Container>
    );
}
