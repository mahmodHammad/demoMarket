'use client';

import { Box, Button, Loading, Text } from '@/wrappers';
import { Grid, Pagination } from '@mui/material';
import UnitsCard from '../cards/UnitsCard';
import SearchBox from './SearchBox';
import neibourhoodcover2 from '@/assets/images/neibourhoodcover2.png';
import { Filter } from '@/assets';
import { toggleLike } from '@/app/(landing)/listingpage/listing-service';
import { useAuth } from '@/contexts/AuthContext';
import CardSkeleton from '../cards/CardSkeleton';

type Props = {
	isMobileView?: boolean;
	openFilterOnMobileView?: () => void;
	data: any;
	isLoading: boolean;
	page: number;
	setPage: (page: number) => void;
	setRenderedData: (data: any) => void;
};

const listingBody = ({
	isMobileView,
	openFilterOnMobileView,
	data,
	isLoading,
	page = 1,
	setPage,
	setRenderedData,
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
			<SearchBox />
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
							<UnitsCard
								id={d?.id}
								title={d?.name}
								img={neibourhoodcover2}
								// link={d?.link}
								price={d?.price || '--'}
								area={d?.maps?.districtName || '--'}
								location={d?.maps?.formattedAddress || '--'}
								liked={d?.is_fav}
								toggleLike={handleLikeToggle}
							/>
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
