'use client';
import { Box, Button, Text } from '@/wrappers';
import { Grid } from '@mui/material';
import neigbourhoodCover from '@/assets/images/neigbourhoodCover.png';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import React, { useState } from 'react';
import { AdminPropertiesList, PopUpCard, UnitsCard } from '@/component';
import Succesgreen from '@/assets/icons/Succesgreen';
import successImg from '@/assets/images/success.png';
import { useQuery } from '@tanstack/react-query';
import { addPropertyToMarketplace, getAllAvailableProperties } from '../properties-service';
import PaginationWrapper from '@/component/table/Resources/Components/PaginationWrapper';
import FilterPopup from '@/component/table/Resources/Components/FilterPopup';
import Search from '@/component/table/Resources/Components/Search';
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

	const handleSearch = (v: string) => setSearch(v);
	const handlePagination = (v: number) => setCurrentPage(v);
	const handleStatusChange = (v: number[]) => setStatus(v);
	const handleFilter = (id: string) => setFilter(id);
	const {
		data,
		isLoading: filtersLoading,
		refetch,
	} = useQuery({
		queryKey: ['LISTEDPROPERTIES', { search, currentPage, status, filter }],
		queryFn: () => getAllAvailableProperties({ search, currentPage, status: status?.['Filter by status']?.join(', '), filter }),
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
const FilterValues = {
	'Filter by status': [
		{ name: 'Pay Down', value: true, id: 'Pay Down', status: 18 },
		{ name: 'Pending', value: true, id: 'Completed', status: 3 },
	],
};
