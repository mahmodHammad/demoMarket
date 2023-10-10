'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Container, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListingBody, PropertyFilters } from '@/component';
// import { data } from './mock';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getProperties } from './listing-service';
import { useSearchParams } from 'next/navigation';

export default function page() {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
	const [showFiltersOnMob, setShowFiltersOnMob] = useState<boolean>(false);

	useEffect(() => {
		if (!isMobileView) setShowFiltersOnMob(false);
	}, [isMobileView]);

	const searchParams = useSearchParams();

	const [AccordionFilters, setAccordionFilters] = useState(FILTERS);

	const [locationSearch, setLocationSearch] = useState<string>(
		(searchParams?.get('locationSearch') as unknown as string) || '',
	);
	const [noOfBedrooms, setNoOfBedrooms] = useState<number>((searchParams?.get('bedrooms') as unknown as number) || 0);
	const [noOfBathrooms, setNoOfBathrooms] = useState<number>(
		(searchParams?.get('bathrooms') as unknown as number) || 0,
	);
	const [noOfGuestrooms, setNoOfGuestrooms] = useState<number>(
		(searchParams?.get('guestrooms') as unknown as number) || 0,
	);
	const [petFriendly, setPetFriendly] = useState<boolean>(
		(searchParams?.get('pet') as unknown as number) == 1 || false,
	);

	const [budgetSliderValues, setBudgetSliderValues] = useState<number[]>([
		(searchParams?.get('minBudget') as unknown as number) || 0,
		(searchParams?.get('maxBudget') as unknown as number) || 2000,
	]);
	const [areaSliderValues, setAreaSliderValues] = useState<number[]>([
		(searchParams?.get('minArea') as unknown as number) || 0,
		(searchParams?.get('maxArea') as unknown as number) || 200,
	]);

	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.properties],
		queryFn: () =>
			getProperties({
				params: {
					noOfBathrooms,
					noOfBedrooms,
					noOfGuestrooms,
					petFriendly: petFriendly ? '1' : '0',
					// TODO: check rest of filters on BE, and pass params
				},
			}),
	});

	useEffect(() => {
		// const filtersState = {
		// 	noOfBedrooms,
		// 	noOfBathrooms,
		// 	petFriendly,
		// 	budgeRange: budgetSliderValues,
		// 	areaRange: areaSliderValues,
		// 	location: AccordionFilters.location.filter((f) => f.checked).map((f) => f.id),
		// 	propertyType: AccordionFilters.propertyType.filter((f) => f.checked).map((f) => f.id),
		// 	amenities: AccordionFilters.amenities.filter((f) => f.checked).map((f) => f.id),
		// 	furnishingStatus: AccordionFilters.furnishingStatus.filter((f) => f.checked).map((f) => f.id),
		// 	dateListed: AccordionFilters.dateListed.filter((f) => f.checked).map((f) => f.id),
		// 	availability: AccordionFilters.availability.filter((f) => f.checked).map((f) => f.id),
		// };

		const newSearchParams = new URLSearchParams(searchParams?.toString());

		newSearchParams.set('bedrooms', noOfBedrooms.toString());
		newSearchParams.set('bathrooms', noOfBathrooms.toString());
		newSearchParams.set('guestrooms', noOfGuestrooms.toString());
		newSearchParams.set('minBudget', budgetSliderValues[0].toString());
		newSearchParams.set('maxBudget', budgetSliderValues[1].toString());
		newSearchParams.set('minArea', areaSliderValues[0].toString());
		newSearchParams.set('maxArea', areaSliderValues[1].toString());
		newSearchParams.set('pet', petFriendly ? '1' : '0');
		newSearchParams.set('locationSearch', locationSearch.toString());

		window.history.replaceState({}, '', `${window.location.pathname}?${newSearchParams.toString()}`);
		refetch();
	}, [
		noOfBedrooms,
		noOfBathrooms,
		noOfGuestrooms,
		budgetSliderValues,
		areaSliderValues,
		petFriendly,
		AccordionFilters,
		locationSearch,
	]);

	return (
		<Container maxWidth="xl" sx={{ position: 'relative' }}>
			<Grid container spacing={3} sx={{ mt: { xs: 0, md: '5px' }, pt: { xs: 0, md: '26px' } }} mb={15}>
				<SlideTransitions isMobileView={isMobileView} showFiltersOnMob={showFiltersOnMob}>
					<Grid item xs={12} md={4} display={{ xs: 'flex', height: 'fit-content' }}>
						<PropertyFilters
							isMobileView={isMobileView}
							closeFilterOnMobileView={() => setShowFiltersOnMob(false)}
							budgetSliderValues={budgetSliderValues}
							setBudgetSliderValues={setBudgetSliderValues}
							AccordionFilters={AccordionFilters}
							setAccordionFilters={setAccordionFilters}
							locationSearch={locationSearch}
							setLocationSearch={setLocationSearch}
							noOfBedrooms={noOfBedrooms}
							setNoOfBedrooms={setNoOfBedrooms}
							noOfBathrooms={noOfBathrooms}
							setNoOfBathrooms={setNoOfBathrooms}
							noOfGuestrooms={noOfGuestrooms}
							setNoOfGuestrooms={setNoOfGuestrooms}
							petFriendly={petFriendly}
							setPetFriendly={setPetFriendly}
							areaSliderValues={areaSliderValues}
							setAreaSliderValues={setAreaSliderValues}
						/>
					</Grid>
				</SlideTransitions>

				<Grid item xs={12} md={8} display={{ xs: showFiltersOnMob ? 'none' : 'flex', md: 'flex' }}>
					<ListingBody
						data={data}
						isLoading={isLoading}
						isMobileView={isMobileView}
						openFilterOnMobileView={() => setShowFiltersOnMob(true)}
					/>
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
			direction="up"
			in={isMobileView && showFiltersOnMob}
			mountOnEnter
			unmountOnExit
			timeout={{ enter: 500, exit: 500 }}>
			{children}
		</Slide>
	);
};

const FILTERS = {
	location: [
		{
			id: 1,
			label: 'As Sahafah',
			checked: false,
		},
		{
			id: 2,
			label: 'An Nada',
			checked: true,
		},
		{
			id: 3,
			label: 'Qurtubah',
			checked: false,
		},
	],
	propertyType: [
		{
			id: 4,
			label: 'Property Type',
			checked: false,
		},
		{
			id: 5,
			label: 'Property Type',
			checked: true,
		},
		{
			id: 6,
			label: 'Property Type',
			checked: false,
		},
	],
	amenities: [
		{
			id: 7,
			label: 'Parking',
			checked: true,
		},
		{
			id: 8,
			label: 'Lift',
			checked: false,
		},
		{
			id: 9,
			label: 'Power Backup',
			checked: false,
		},
		{
			id: 10,
			label: 'Security Personnel',
			checked: true,
		},
		{
			id: 11,
			label: 'Park',
			checked: false,
		},
	],
	furnishingStatus: [
		{
			id: 12,
			label: 'Unfurnished',
			checked: false,
		},
		{
			id: 13,
			label: 'Semifinished',
			checked: true,
		},
		{
			id: 14,
			label: 'Furnished',
			checked: false,
		},
	],
	dateListed: [
		{
			id: 15,
			label: 'New',
			checked: true,
		},
		{
			id: 16,
			label: 'Last 7 Days',
			checked: false,
		},
		{
			id: 17,
			label: 'Last 30 Days',
			checked: false,
		},
	],
	availability: [
		{
			id: 18,
			label: 'Immediately',
			checked: false,
		},
		{
			id: 19,
			label: 'Within a month',
			checked: true,
		},
	],
};
