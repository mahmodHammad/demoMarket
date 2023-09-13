'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Container, Slide } from '@mui/material';
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
        <SlideTransitions isMobileView={isMobileView} showFiltersOnMob={showFiltersOnMob}>
          <Grid item xs={12} md={4} display={{ xs: 'flex', height: 'fit-content' }}>
            <PropertyFilters isMobileView={isMobileView} closeFilterOnMobileView={() => setShowFiltersOnMob(false)} />
          </Grid>
        </SlideTransitions>

        <Grid item xs={12} md={8} display={{ xs: showFiltersOnMob ? 'none' : 'flex', md: 'flex' }}>
          <ListingBody isMobileView={isMobileView} openFilterOnMobileView={() => setShowFiltersOnMob(true)} />
        </Grid>
      </Grid>
    </Container>
  );
}

type SlideProps = {
  isMobileView: boolean;
  showFiltersOnMob: boolean;
  children: any;
};

const SlideTransitions = ({ children, isMobileView, showFiltersOnMob }: SlideProps) => {
  if (!isMobileView) return <>{children}</>;

  return (
    <Slide
      direction="down"
      in={isMobileView && showFiltersOnMob}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 500 }}>
      {children}
    </Slide>
  );
};
