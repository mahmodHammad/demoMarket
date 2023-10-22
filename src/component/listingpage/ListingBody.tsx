'use client';

import { Box, Button, Text } from '@/wrappers';
import { Grid, Pagination } from '@mui/material';
import UnitsCard from '../cards/UnitsCard';
import SearchBox from './SearchBox';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { Filter } from '@/assets';
import { toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { useAuth } from '@/contexts/AuthContext';
import CardSkeleton from '../cards/CardSkeleton';
import SimpleSelect from '../forms/SimpleSelect';

type Props = {
	isMobileView?: boolean;
	openFilterOnMobileView?: () => void;
	data: any;
	isLoading: boolean;
	page: number;
	setPage: (page: number) => void;
	setRenderedData: (data: any) => void;
	sortingFilters: any;
	currentSortFilter: any;
	setCurrentSortFilter: any;
	propertySearch: any;
	setPropertySearch: any;
	isRent: any;
	setIsRent: any;
};

const listingBody = ({
	isMobileView,
	openFilterOnMobileView,
	data,
	isLoading,
	page = 1,
	setPage,
	setRenderedData,
	sortingFilters,
	currentSortFilter,
	setCurrentSortFilter,
	propertySearch,
	setPropertySearch,
	isRent,
	setIsRent,
}: Props) => {
	const { isAuthed, openLoginModal } = useAuth();
	const handleLikeToggle = (id: number) => {
		if (!isAuthed) {
			openLoginModal();
			return;
		}
		setRenderedData((prev: any) => ({
			...prev,
			list: prev.list.map((d: any) => (+d.id === +id ? { ...d, is_fav: !d.is_fav } : d)),
		}));
		const body = {
			property_id: id,
		};
		toggleLike(body);
	};
	
	return (
		<Box column fullWidth>
			<Text variant="h4">Properties in Saudi Arabia</Text>
			<SearchBox
				propertySearch={propertySearch}
				setPropertySearch={setPropertySearch}
				isRent={isRent}
				setIsRent={setIsRent}
			/>
			{isMobileView && (
				<Box fullWidth row xbetween ycenter mt={'30px'}>
					<Text>Total Properties: {data?.data?.length}</Text>
					<Button
						startIcon={<Filter />}
						sx={{ py: 0.5, px: 1.7, alignItems: 'center' }}
						grayBorder
						variant="outlined"
						onClick={openFilterOnMobileView}>
						Filter
					</Button>
				</Box>
			)}

			<SimpleSelect
				items={sortingFilters}
				value={currentSortFilter}
				onChange={(e) => setCurrentSortFilter(e.target.value)}
				disabled={!!!sortingFilters.length}
				placeholder="Sort By"
				sx={sortSX}
			/>

			{/* // TODO: map data to UI card */}
			{isLoading ? (
				<Grid container mt={isMobileView ? '0px' : '47px'} spacing={'28px'}>
					{Array.from({ length: 8 }).map((_, index: number) => (
						<Grid item xs={12} md={6} key={index}>
							<CardSkeleton height={'inherit'} />
						</Grid>
					))}
				</Grid>
			) : (
				<Grid container mt={isMobileView ? '0px' : '47px'} spacing={'28px'}>
					{data?.list?.map((d: any, index: number) => (
						<Grid item xs={12} md={6} key={index}>
							<UnitsCard data={d} toggleLike={handleLikeToggle} />
						</Grid>
					))}
				</Grid>
			)}

			{data?.paginator && (
				<Pagination
					page={+page}
					onChange={(_, value) => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
						setPage(value);
					}}
					count={+data.paginator.last_page}
					color="primary"
					sx={{ mt: 5, alignSelf: 'center' }}
				/>
			)}
		</Box>
	);
};

export default listingBody;

const sortSX = {
	fontSize: '14px',
	color: '#232425',
	fontWeight: 'bold',
	minWidth: '107px',
	marginTop: '24px',
	marginBottom: '-40px',
	alignSelf: 'flex-end',
	height: '42px',
	backgroundColor: 'transparent',
	boxShadow: 'none',
	borderRadius: '8px',
	'.MuiOutlinedInput-notchedOutline': { border: '1px solid #E3E3E3' },
	'&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #E3E3E3',
	},
	'&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #E3E3E3',
	},
	'& > svg': {
		fill: '#000',
		color: '#000',
	},
};
