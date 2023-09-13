'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListingBody, PropertyFilters } from '@/component';
import { Box } from '@/wrappers';

export default function page() {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  const [showFiltersOnMob, setShowFiltersOnMob] = useState<boolean>(false);

  useEffect(() => {
    if (!isMobileView) setShowFiltersOnMob(false);
  }, [isMobileView]);

  return (
    <>
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Box fullWidth sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
          {isMobileView && showFiltersOnMob && (
            <PropertyFilters isMobileView={isMobileView} closeFilterOnMobileView={() => setShowFiltersOnMob(false)} />
          )}
        </Box>

        <Grid container spacing={3} sx={{ mt: '5px', pt: '26px' }} mb={15}>
          <Grid item xs={12} md={4} display={{ md: 'flex', xs: 'none', height: 'fit-content' }}>
            <PropertyFilters />
          </Grid>

          {!showFiltersOnMob && (
            <Grid item xs={12} md={8} height={'100hv'} display={{ md: 'flex' }}>
              <ListingBody isMobileView={isMobileView} openFilterOnMobileView={() => setShowFiltersOnMob(true)} />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
