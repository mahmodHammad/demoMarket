import Link from 'next/link';

import { Box, Button, Container, Container as GridContainer, Item, Text } from '@/wrappers';
import { NeighbourhoodCard } from '@/component';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';

const data = [
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Al-Arid District', img: neibourhoodcover2, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
  { title: 'Yarmouk Neighbourhood', img: neigbourhoodCover, link: '/' },
];

export default function Home() {
  return (
    <Box xcenter>
      <Container maxWidth="xl" column xstart>
        <Box sx={{ mt: '30px' }}></Box>
        <Box xbetween sx={{ mt: '25px' }}>
          <Text variant="h3">
            Neighbourhoods
            <Text variant="body" component="span" sx={{ display: 'inline' }}>
              ({data.length})
            </Text>
          </Text>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#E3E3E3',
              color: '#232425',
            }}>
            Sort By
          </Button>
        </Box>
        <GridContainer
          xstart
          spacing={{ xs: 2, md: 4 }}
          sx={{
            pb: { xs: '90px', md: '164px' },
            mt: { md: '53px', xs: '22px' },
            px: { md: '0px', xs: '12px' },
          }}>
          {data.map((d, index) => (
            <Item md={4} xs={6} key={index}>
              <NeighbourhoodCard title={d.title} img={d.img} link={d.link} />
            </Item>
          ))}
        </GridContainer>
      </Container>
    </Box>
  );
}
