'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListingBody, PropertyFilters } from '@/component';

export default function page() {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  const [showFiltersOnMob, setShowFiltersOnMob] = useState<boolean>(false);

  useEffect(() => {
    if (!isMobileView) setShowFiltersOnMob(false);
  }, [isMobileView]);

  return (
    <Container maxWidth="xl" sx={{ position: 'relative' }}>
      <Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={15}>
        <Grid
          item
          xs={12}
          md={4}
          display={{ md: 'flex', xs: showFiltersOnMob ? 'flex' : 'none', height: 'fit-content' }}>
          <PropertyFilters isMobileView={isMobileView} closeFilterOnMobileView={() => setShowFiltersOnMob(false)} />
        </Grid>

        <Grid item xs={12} md={8} display={{ md: 'flex', xs: showFiltersOnMob ? 'none' : 'flex' }}>
          <ListingBody isMobileView={isMobileView} openFilterOnMobileView={() => setShowFiltersOnMob(true)} />
        </Grid>
      </Grid>
    </Container>
  );
}
