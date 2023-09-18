import { Box, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import React from 'react';

const data = [
  { title: 'Booking Number', data: '15237898 ' },
  { title: 'Booking status', data: 'Waiting for manager Approval ' },
  { title: 'Community Name', data: 'Executive Living ' },
  { title: 'Building Name', data: 'Block A ' },
  { title: 'Unit Name', data: '404 ' },
];
const BookingDetailsInfo = () => {
  return (
    <>
      <Box
        width={'100%'}
        sx={{
          borderRadius: '8px',
          border: '0px solid var(--atar-grey-300, #CACACA)',
          background: '#FFF',
          p: '16px',
          mt: '24px',
        }}>
        <Grid container spacing={2}>
          {data?.map((d: any, index: number) => (
            <Grid item xs={4} key={index}>
              <Box column>
                <Text variant="small" gray fontSize={'12px'}>
                  {d?.title}
                </Text>
                <Box row>
                  {(() => {
                    if (d.title === 'Booking status') {
                      return (
                        <>
                          <Box
                            width={'10px'}
                            height={'10px'}
                            mr={'2px'}
                            sx={{
                              borderRadius: ' 17px',
                              background: '#FFC225',
                            }}></Box>
                        </>
                      );
                    }
                  })()}
                  <Text variant="h5" s={13}>
                    {d?.data}
                  </Text>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BookingDetailsInfo;
