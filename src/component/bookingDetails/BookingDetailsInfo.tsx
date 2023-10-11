import { Box, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import React from 'react';

const BookingDetailsInfo = ({ data }: { data: {} }) => {
	const mapData = [
		{ title: 'Booking Number', data: data?.id || '' },
		{ title: 'Booking status', data: data?.booking_status || '' },
		{ title: 'Community Name', data: data?.community?.name || '' },
		{ title: 'Building Name', data: data?.building?.name || '' },
		{ title: 'Unit Name', data: data?.unit?.name || '' },
	];
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
					{mapData?.map((d: any, index: number) => (
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
														mr={'4px'}
														mt={'4px'}
														sx={{
															borderRadius: ' 17px',
															background: '#FFC225',
														}}></Box>
												</>
											);
										}
									})()}
									<Text variant="h5" sx={{ textTransform: `${d.title === 'Booking status' && 'capitalize'}` }} s={13}>
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
