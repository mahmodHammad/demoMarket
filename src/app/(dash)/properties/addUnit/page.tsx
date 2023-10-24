'use client';
import { Box, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { PopUpCard, UnitsCard } from '@/component';
import Succesgreen from '@/assets/icons/Succesgreen';
import { useQuery } from '@tanstack/react-query';
import { addPropertyToMarketplace, getAllAvailableProperties } from '../properties-service';
import { globalToast } from '@/utils/toast';
import { useRouter } from 'next/navigation';

export default function Properties() {
	const { push } = useRouter();

	const [openPopup, setopenPopup] = useState(false);
	const handleClickOpen = async (id) => {
		await addPropertyToMarketplace(id)
			.then(() => {
				setopenPopup(true);
				refetch();
			})
			.catch(() => {
				globalToast('Please try later.', 'error');
			});
	};

	const handleClose = () => {
		setopenPopup(false);
	};
	const [search, setSearch] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [status, setStatus] = useState({});
	const [filter, setFilter] = useState('0');
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['LISTEDPROPERTIES', { search, currentPage, status, filter }],
		queryFn: () =>
			getAllAvailableProperties({ search, currentPage, status: status?.['Filter by status']?.join(', '), filter }),
	});

	return (
		<>
			<PopUpCard
				handleButton1={() => setopenPopup(false)}
				handleButton2={() => {
					push('/listingpage');
					setopenPopup(false);
				}}
				color={'#1EC27B'}
				icon={<Succesgreen sx={{ width: 50, height: 50 }} />}
				title={'Unit list Successful!'}
				body={''}
				button1={'Done'}
				button2={'View On Market'}
				isOpen={openPopup}
				setopenPopup={setopenPopup}
			/>
			<Box column p={'35px'} width={'100%'}>
				<Box center width={'100%'} xbetween row>
					<Text variant="h4">Properties List</Text>
					<Box row></Box>
				</Box>
				{/* <Box
					alignItems={'center'}
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						marginTop: '20px',
						background: '#FFF',
						padding: '16px 32px',
					}}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<Search search={search} handleSearch={handleSearch} />
						<FilterPopup
							filtering
							filterValues={FilterValues}
							handleFilter={handleFilter}
							status={status}
							setStatus={handleStatusChange}
						/>
					</Box>
					<Box>
						<PaginationWrapper count={data?.paginator?.last_page} page={currentPage} handler={handlePagination} />
					</Box>
				</Box> */}

				<Grid container mt={'25px'} spacing={'28px'}>
					{data?.list?.map((d, index) => (
						<Grid item xs={4} key={index}>
							<UnitsCard buttonName="add" data={d} onClick={handleClickOpen} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}
