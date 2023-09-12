import React, { useState } from 'react';
import { Grid, Container } from '@mui/material';
import { ListingBody, PropertyFilters } from '@/component';

interface Props {}

export default function page(props: Props) {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={15}>
          {/* Abdulrahman */}

          <Grid item xs={12} md={4} display={{ xs: 'none', md: 'flex', height: 'fit-content' }}>
            <PropertyFilters />
          </Grid>

          {/* Abdullah */}

          <Grid item xs={12} md={8} height={'100hv'} display={{ xs: 'none', md: 'flex' }}>
            <ListingBody />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
