'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Container, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListingBody, PropertyFilters } from '@/component';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getFilters, getProperties } from './listing-service';
import { useSearchParams } from 'next/navigation';

export default function page() {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
	const [showFiltersOnMob, setShowFiltersOnMob] = useState<boolean>(false);

	useEffect(() => {
		if (!isMobileView) setShowFiltersOnMob(false);
	}, [isMobileView]);

	const searchParams = useSearchParams();

	const [renderedData, setRenderedData] = useState(null);

	const [filtersInfo, setFiltersInfo] = useState(null);

	const [isRent, setIsRent] = useState<any>(searchParams?.get('isRent') === 'true' ? true : false);

	const [availabilityFilters, setAvailabilityFilters] = useState<any>([]);

	const [furnishingStatusFilters, setFurnishingStatusFilters] = useState<any>([]);

	const [locationFilters, setLocationFilters] = useState([]);

	const [neighbourhoodFilters, setNeighbourhoodFilters] = useState([]);

	const [filteredLocationFilters, setFilteredLocationFilters] = useState([]);

	const [filteredNeighbourhoodFilters, setFilteredNeighbourhoodFilters] = useState([]);

	const [propertyTypeFilters, setPropertyTypeFilters] = useState<any>([]);

	const [amenitiesFilters, setAmenitiesFilters] = useState<any>([]);

	const [dateFilters, setDateFilters] = useState<any>(DATES_FILTERS);

	const [sortingFilters, setSortingFilters] = useState<any>([]);

	const [currentSortFilter, setCurrentSortFilter] = useState<any>(
		(searchParams?.get('sort') as unknown as number) || '',
	);

	const [page, setPage] = useState<number>((searchParams?.get('page') as unknown as number) || 1);

	const [locationSearch, setLocationSearch] = useState<string>(
		(searchParams?.get('locationSearch') as unknown as string) || '',
	);

	const [neighbourhoodSearch, setNeighbourhoodSearch] = useState<string>(
		(searchParams?.get('neighbourhoodSearch') as unknown as string) || '',
	);

	const [propertySearch, setPropertySearch] = useState<string>(
		(searchParams?.get('propertySearch') as unknown as string) || '',
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
		(searchParams?.get('maxBudget') as unknown as number) || 10000000000,
	]);

	const [areaSliderValues, setAreaSliderValues] = useState<number[]>([
		(searchParams?.get('minArea') as unknown as number) || 0,
		(searchParams?.get('maxArea') as unknown as number) || 10000,
	]);

	const { data: filtersData, isLoading: filtersLoading } = useQuery({
		queryKey: [keys.FILTERS],
		queryFn: getFilters,
		cacheTime: 0,
	});

	const {
		data: properties,
		isLoading: propertiesLoading,
		isFetching,
		refetch,
	} = useQuery({
		queryKey: [keys.PROPERTIES],
		queryFn: () =>
			getProperties({
				params: {
					page,
					type: isRent ? '0' : '1',
					query: !!propertySearch ? propertySearch : null,
					noOfBathrooms: +noOfBathrooms === 0 ? null : noOfBathrooms,
					noOfBedrooms: +noOfBedrooms === 0 ? null : noOfBedrooms,
					noOfGuestrooms: +noOfGuestrooms === 0 ? null : noOfGuestrooms,
					petFriendly: petFriendly ? '1' : '0',
					availability: availabilityFilters.filter((f: any) => f.checked).map((f: any) => f.id),
					furnishingStatus: furnishingStatusFilters.filter((f: any) => f.checked).map((f: any) => f.id),
					budgeRange: budgetSliderValues,
					areaRange: areaSliderValues,
					location: filteredLocationFilters.filter((f: any) => f.checked).map((f: any) => f.id),
					cities: filteredNeighbourhoodFilters.filter((f: any) => f.checked).map((f: any) => f.id),
					propertyType: propertyTypeFilters.filter((f: any) => f.checked).map((f: any) => f.id),
					amenities: amenitiesFilters.filter((f: any) => f.checked).map((f: any) => f.id),
					sort: !!!currentSortFilter ? null : currentSortFilter,
					date: !!dateFilters.filter((option: any) => option.checked).length
						? dateFilters.filter((option: any) => option.checked)[0].value
						: null,
				},
			}),
	});

	useEffect(() => {
		console.log('filtersData', filtersData);
		setFiltersInfo(filtersData);

		const locationsParams = searchParams?.getAll('location');
		const neighborhoodsParams = searchParams?.getAll('neighborhood');
		const typesParams = searchParams?.getAll('type');
		const amenitiesParams = searchParams?.getAll('amenities');
		const availabilityParams = searchParams?.getAll('availability');
		const furnishingParams = searchParams?.getAll('furnishing');

		setLocationFilters(
			filtersData?.locations.map((location: any) => ({
				id: location.id,
				label: location.name,
				checked: locationsParams?.includes(location.id.toString()),
			})),
		);

		if (!!locationSearch)
			setFilteredLocationFilters(
				filtersData?.locations
					.map((location: any) => ({
						id: location.id,
						label: location.name,
						checked: locationsParams?.includes(location.id.toString()),
					}))
					.filter((location: any) => location.label.toLowerCase().startsWith(locationSearch.toLowerCase())),
			);
		else
			setFilteredLocationFilters(
				filtersData?.locations.map((location: any) => ({
					id: location.id,
					label: location.name,
					checked: locationsParams?.includes(location.id.toString()),
				})),
			);

		setNeighbourhoodFilters(
			filtersData?.neighborhoods.map((neighborhood: any) => ({
				id: neighborhood.id,
				label: neighborhood.name,
				checked: neighborhoodsParams?.includes(neighborhood.id.toString()),
			})),
		);

		if (!!neighbourhoodSearch)
			setFilteredNeighbourhoodFilters(
				filtersData?.neighborhoods
					.map((neighborhood: any) => ({
						id: neighborhood.id,
						label: neighborhood.name,
						checked: neighborhoodsParams?.includes(neighborhood.id.toString()),
					}))
					.filter((neighborhood: any) =>
						neighborhood.label.toLowerCase().startsWith(neighbourhoodSearch.toLowerCase()),
					),
			);
		else
			setFilteredNeighbourhoodFilters(
				filtersData?.neighborhoods.map((neighborhood: any) => ({
					id: neighborhood.id,
					label: neighborhood.name,
					checked: neighborhoodsParams?.includes(neighborhood.id.toString()),
				})),
			);

		if (filtersData?.property_type)
			setPropertyTypeFilters(
				Object.entries(filtersData?.property_type).map(([label, id]: any) => ({
					id,
					label,
					checked: typesParams?.includes(id.toString()),
				})),
			);

		if (filtersData?.amenities)
			setAmenitiesFilters(
				Object.entries(filtersData?.amenities).map(([label, id]: any) => ({
					id,
					label,
					checked: amenitiesParams?.includes(id.toString()),
				})),
			);

		if (filtersData?.availability)
			setAvailabilityFilters(
				Object.entries(filtersData?.availability).map(([label, id]: any) => ({
					id,
					label,
					checked: availabilityParams?.includes(id.toString()),
				})),
			);

		if (filtersData?.furnishingStatus)
			setFurnishingStatusFilters(
				Object.entries(filtersData?.furnishingStatus).map(([label, id]: any) => ({
					id,
					label,
					checked: furnishingParams?.includes(id.toString()),
				})),
			);

		if (filtersData?.sort)
			setSortingFilters(
				Object.entries(filtersData?.sort).map(([item, value]: any) => ({
					item,
					value,
				})),
			);
	}, [filtersData]);

	useEffect(() => {
		const newSearchParams = new URLSearchParams(searchParams?.toString());

		newSearchParams.set('page', page.toString());
		newSearchParams.set('isRent', isRent.toString());
		newSearchParams.set('bedrooms', noOfBedrooms.toString());
		newSearchParams.set('bathrooms', noOfBathrooms.toString());
		newSearchParams.set('guestrooms', noOfGuestrooms.toString());
		newSearchParams.set('minBudget', budgetSliderValues[0].toString());
		newSearchParams.set('maxBudget', budgetSliderValues[1].toString());
		newSearchParams.set('minArea', areaSliderValues[0].toString());
		newSearchParams.set('maxArea', areaSliderValues[1].toString());
		newSearchParams.set('pet', petFriendly ? '1' : '0');
		newSearchParams.set('locationSearch', locationSearch.toString());
		newSearchParams.set('neighborhoodSearch', neighbourhoodSearch.toString());
		newSearchParams.set('propertySearch', propertySearch.toString());
		newSearchParams.set('sort', currentSortFilter.toString());
		newSearchParams.set(
			'date',
			!!dateFilters.filter((option: any) => option.checked).length
				? dateFilters.filter((option: any) => option.checked)[0].id.toString()
				: '',
		);

		newSearchParams.delete('location');
		filteredLocationFilters?.forEach((f: any) =>
			f.checked ? newSearchParams.append('location', f.id.toString()) : null,
		);

		newSearchParams.delete('neighborhood');
		filteredNeighbourhoodFilters?.forEach((f: any) =>
			f.checked ? newSearchParams.append('neighborhood', f.id.toString()) : null,
		);

		newSearchParams.delete('type');
		propertyTypeFilters?.forEach((f: any) => (f.checked ? newSearchParams.append('type', f.id.toString()) : null));

		newSearchParams.delete('availability');
		availabilityFilters?.forEach((f: any) =>
			f.checked ? newSearchParams.append('availability', f.id.toString()) : null,
		);

		newSearchParams.delete('furnishing');
		furnishingStatusFilters?.forEach((f: any) =>
			f.checked ? newSearchParams.append('furnishing', f.id.toString()) : null,
		);

		newSearchParams.delete('amenities');
		amenitiesFilters?.forEach((f: any) => (f.checked ? newSearchParams.append('amenities', f.id.toString()) : null));

		window.history.replaceState({}, '', `${window.location.pathname}?${newSearchParams.toString()}`);
		refetch();
	}, [
		page,
		noOfBedrooms,
		noOfBathrooms,
		noOfGuestrooms,
		budgetSliderValues,
		areaSliderValues,
		petFriendly,
		locationSearch,
		neighbourhoodSearch,
		filteredLocationFilters,
		filteredNeighbourhoodFilters,
		locationFilters,
		availabilityFilters,
		propertyTypeFilters,
		amenitiesFilters,
		currentSortFilter,
		dateFilters,
		propertySearch,
		furnishingStatusFilters,
		isRent,
	]);

	useEffect(() => {
		setRenderedData(properties);
	}, [properties]);

	useEffect(() => {
		if (!!!locationSearch) setFilteredLocationFilters(locationFilters);
		else
			setFilteredLocationFilters(
				locationFilters.filter((location: any) =>
					location.label.toLowerCase().startsWith(locationSearch.toLowerCase()),
				),
			);
	}, [locationSearch]);

	useEffect(() => {
		if (!!!neighbourhoodSearch) setFilteredNeighbourhoodFilters(neighbourhoodFilters);
		else
		setFilteredNeighbourhoodFilters(
				neighbourhoodFilters.filter((neighbourhood: any) =>
					neighbourhood.label.toLowerCase().startsWith(neighbourhoodSearch.toLowerCase()),
				),
			);
	}, [neighbourhoodSearch]);

	useEffect(() => {
		const dateId = searchParams?.get('date');
		if (!!dateId)
			setDateFilters((prev: any) =>
				prev.map((f: any) => (+f.id === +dateId ? { ...f, checked: true } : { ...f, checked: false })),
			);
	}, []);

	return (
		<Container maxWidth="xl" sx={{ position: 'relative' }}>
			<Grid container spacing={3} sx={{ mt: { xs: 0, md: '5px' }, pt: { xs: 0, md: '26px' } }} mb={15}>
				<SlideTransitions isMobileView={isMobileView} showFiltersOnMob={showFiltersOnMob}>
					<Grid item xs={12} md={4} display={{ xs: 'flex', height: 'fit-content' }}>
						<PropertyFilters
							isLoading={filtersLoading}
							isMobileView={isMobileView}
							filtersInfo={filtersInfo}
							closeFilterOnMobileView={() => setShowFiltersOnMob(false)}
							budgetSliderValues={budgetSliderValues}
							setBudgetSliderValues={setBudgetSliderValues}
							locationSearch={locationSearch}
							setLocationSearch={setLocationSearch}
							neighbourhoodSearch={neighbourhoodSearch}
							setNeighbourhoodSearch={setNeighbourhoodSearch}
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
							availabilityFilters={availabilityFilters}
							setAvailabilityFilters={setAvailabilityFilters}
							filteredLocationFilters={filteredLocationFilters}
							setFilteredLocationFilters={setFilteredLocationFilters}
							filteredNeighbourhoodFilters={filteredNeighbourhoodFilters}
							setFilteredNeighbourhoodFilters={setFilteredNeighbourhoodFilters}
							propertyTypeFilters={propertyTypeFilters}
							setPropertyTypeFilters={setPropertyTypeFilters}
							amenitiesFilters={amenitiesFilters}
							setAmenitiesFilters={setAmenitiesFilters}
							dateFilters={dateFilters}
							setDateFilters={setDateFilters}
							furnishingStatusFilters={furnishingStatusFilters}
							setFurnishingStatusFilters={setFurnishingStatusFilters}
						/>
					</Grid>
				</SlideTransitions>

				<Grid item xs={12} md={8} display={{ xs: showFiltersOnMob ? 'none' : 'flex', md: 'flex' }}>
					<ListingBody
						data={renderedData}
						setRenderedData={setRenderedData}
						isLoading={propertiesLoading || isFetching}
						isMobileView={isMobileView}
						openFilterOnMobileView={() => setShowFiltersOnMob(true)}
						page={page}
						setPage={setPage}
						sortingFilters={sortingFilters}
						currentSortFilter={currentSortFilter}
						setCurrentSortFilter={setCurrentSortFilter}
						propertySearch={propertySearch}
						setPropertySearch={setPropertySearch}
						isRent={isRent}
						setIsRent={setIsRent}
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

const DATES_FILTERS = [
	{
		id: 1,
		label: 'New',
		value: new Date().toISOString().slice(0, 10),
		checked: false,
	},
	{
		id: 2,
		label: 'Last 7 Days',
		value: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
		checked: false,
	},
	{
		id: 3,
		label: 'Last 30 Days',
		value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
		checked: false,
	},
];
