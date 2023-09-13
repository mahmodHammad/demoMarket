import { Box, Button, Text } from '@/wrappers';
import { Grid, Pagination } from '@mui/material';
import React from 'react';
import UnitsCard from '../cards/UnitsCard';
import SearchBox from './SearchBox';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { Filter } from '@/assets';

const data = [
  {
    title: 'Al-Arid District',
    img: neibourhoodcover2,
    link: '/',
    price: 'SAR 60,000',
    area: '120 sqm',
    location: 'Riyadh',
  },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
];

// interface proptypes {
//   data: [
//     {
//       title: string;
//       img: string;
//       link: string;
//       price: string;
//       area: string;
//       location: string;
//     }
//   ];
// }
// const listingBodey = ({ data }: proptypes) => {

type Props = {
  isMobileView?: boolean;
  openFilterOnMobileView?: () => void;
};

const listingBody = ({isMobileView, openFilterOnMobileView}: Props) => {
  return (
      <Box column width={'100%'} ycenter>
        <Text variant="h4">Properties in Saudi Arabia</Text>
        <SearchBox />

        {isMobileView && (
          <Box
            fullWidth
            row
            xbetween
            ycenter
            mt={'30px'}
          >
            <Text>Total Properties: {data.length}</Text>
            <Button
              startIcon={<Filter />}
              sx={{py: 0.5, px: 1.7, alignItems: 'center'}}
              grayBorder
              variant='outlined'
              onClick={openFilterOnMobileView}
            >
              Filter
            </Button>
          </Box>)}

        <Grid container mt={isMobileView ? '0px' :'47px'} spacing={'28px'}>
          {data?.map((d, index) => (
            <Grid item xs={12} md={6} key={index}>
              <UnitsCard
                title={d?.title}
                img={d?.img}
                link={d?.link}
                price={d?.price}
                area={d?.area}
                location={d?.location}
              />
            </Grid>
          ))}
        </Grid>

        <Pagination count={10} color="primary" sx={{mt: 5}} />
      </Box>
  );
};

export default listingBody;
