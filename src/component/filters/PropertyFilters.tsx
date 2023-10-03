'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AccordionChipsFilter, Switch, CounterFilter, SliderFilter, TextInput } from '@/component';
import { Box, Text, Button, Accordion } from '@/wrappers';
import { IconButton } from '@mui/material';
import { Close } from '@/assets';
import { useTheme } from '@emotion/react';

type Props = {
	isMobileView?: boolean;
	closeFilterOnMobileView?: () => void;
};

const PropertyFilters = ({ isMobileView = false, closeFilterOnMobileView }: Props) => {
	const theme: any = useTheme();
	const searchParams = useSearchParams();

	const [AccordionFilters, setAccordionFilters] = useState(FILTERS);

	const [noOfBedrooms, setNoOfBedrooms] = useState<number>((searchParams?.get('bedrooms') as unknown as number) || 0);
	const [noOfBathrooms, setNoOfBathrooms] = useState<number>(
		(searchParams?.get('bathrooms') as unknown as number) || 0,
	);
	const [petFriendly, setPetFriendly] = useState<boolean>(
		(searchParams?.get('pet') as unknown as number) == 1 || false,
	);

	const [budgetSliderValues, setBudgetSliderValues] = useState<number[]>([
		(searchParams?.get('minBudget') as unknown as number) || 0,
		(searchParams?.get('maxBudget') as unknown as number) || 100,
	]);
	const [areaSliderValues, setAreaSliderValues] = useState<number[]>([
		(searchParams?.get('minArea') as unknown as number) || 0,
		(searchParams?.get('maxArea') as unknown as number) || 100,
	]);

	const handleFiltersState = (filter: string, id: number) =>
		setAccordionFilters((prev: any) => ({
			...prev,
			[filter]: prev[filter].map((f: any) => (f.id === id ? { ...f, checked: !f.checked } : f)),
		}));

	useEffect(() => {
		const filtersState = {
			noOfBedrooms,
			noOfBathrooms,
			petFriendly,
			budgeRange: budgetSliderValues,
			areaRange: areaSliderValues,
			location: AccordionFilters.location.filter((f) => f.checked).map((f) => f.id),
			propertyType: AccordionFilters.propertyType.filter((f) => f.checked).map((f) => f.id),
			amenities: AccordionFilters.amenities.filter((f) => f.checked).map((f) => f.id),
			furnishingStatus: AccordionFilters.furnishingStatus.filter((f) => f.checked).map((f) => f.id),
			dateListed: AccordionFilters.dateListed.filter((f) => f.checked).map((f) => f.id),
			availability: AccordionFilters.availability.filter((f) => f.checked).map((f) => f.id),
		};

		const newSearchParams = new URLSearchParams(searchParams?.toString());

		newSearchParams.set('bedrooms', noOfBedrooms.toString());
		newSearchParams.set('bathrooms', noOfBathrooms.toString());
		newSearchParams.set('minBudget', budgetSliderValues[0].toString());
		newSearchParams.set('maxBudget', budgetSliderValues[1].toString());
		newSearchParams.set('minArea', areaSliderValues[0].toString());
		newSearchParams.set('maxArea', areaSliderValues[1].toString());
		newSearchParams.set('pet', petFriendly ? '1' : '0');

		window.history.replaceState({}, '', `${window.location.pathname}?${newSearchParams.toString()}`);
	}, [noOfBedrooms, noOfBathrooms, budgetSliderValues, areaSliderValues, petFriendly, AccordionFilters]);

	return (
		<Box
			column
			ycenter
			fullWidth
			sx={{
				bgcolor: '#FFF',
				boxShadow: '0px 25px 60px -10px rgba(28, 39, 49, 0.12)',
				borderRadius: '16px',
				pb: '20px',
			}}>
			<Box column ycenter fullWidth gap={{ xs: 0, md: '12px' }} p={'16px'}>
				<Box fullWidth>
					<Box row ycenter xbetween py={{ xs: 0, md: '12px' }} pb={{ xs: '10px', md: '12px' }}>
						<Text variant={isMobileView ? 'h4' : 'h5'}>Filter</Text>
						{isMobileView ? (
							<IconButton onClick={closeFilterOnMobileView}>
								<Close sx={{ fontSize: 26, mr: -1 }} />
							</IconButton>
						) : (
							<Button size="medium" sx={{ color: '#004256', fontWeight: '700', fontSize: 14 }}>
								Apply Filter
							</Button>
						)}
					</Box>
				</Box>

				<Accordion
					defaultExpanded={!isMobileView}
					header="Budget"
					Content={() => (
						<SliderFilter
							label="Budget"
							sliderValues={budgetSliderValues}
							handleSliderChange={(value: number[]) => setBudgetSliderValues(value)}
						/>
					)}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Location"
					filterName="location"
					filters={[...AccordionFilters.location, ...AccordionFilters.location, ...AccordionFilters.location]}
					onFilterStateChange={handleFiltersState}
					headerContent={<TextInput placeholder="Search" sx={{ width: 0.98, alignSelf: 'center', my: 1 }} />}
					sx={locationContainerStyle(theme)}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Property Type"
					filterName="propertyType"
					filters={AccordionFilters.propertyType}
					onFilterStateChange={handleFiltersState}
				/>

				<Accordion
					defaultExpanded={!isMobileView}
					header="No. of  Bedrooms"
					Content={() => (
						<CounterFilter
							name="Bedrooms"
							number={noOfBedrooms}
							handleIncrement={() => setNoOfBedrooms((prev) => ++prev)}
							handleDecrement={() => setNoOfBedrooms((prev) => (prev !== 0 ? --prev : prev))}
						/>
					)}
				/>

				<Accordion
					defaultExpanded={!isMobileView}
					header="No. of  Bathrooms"
					Content={() => (
						<CounterFilter
							name="Bathrooms"
							number={noOfBathrooms}
							handleIncrement={() => setNoOfBathrooms((prev) => ++prev)}
							handleDecrement={() => setNoOfBathrooms((prev) => (prev !== 0 ? --prev : prev))}
						/>
					)}
				/>

				<Accordion
					defaultExpanded={!isMobileView}
					header="Area"
					Content={() => (
						<SliderFilter
							label="Area"
							sliderValues={areaSliderValues}
							handleSliderChange={(value: number[]) => setAreaSliderValues(value)}
						/>
					)}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Amenities"
					filterName="amenities"
					filters={AccordionFilters.amenities}
					onFilterStateChange={handleFiltersState}
				/>

				<Box fullWidth row ycenter xbetween>
					<Text bold sx={{ fontSize: 14 }}>
						Pet-Friendly
					</Text>
					<Switch
						checked={petFriendly}
						onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) => setPetFriendly(checked)}
					/>
				</Box>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Furnishing Status"
					filterName="furnishingStatus"
					filters={AccordionFilters.furnishingStatus}
					onFilterStateChange={handleFiltersState}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Date Listed"
					filterName="dateListed"
					filters={AccordionFilters.dateListed}
					onFilterStateChange={handleFiltersState}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Availability"
					filterName="availability"
					filters={AccordionFilters.availability}
					onFilterStateChange={handleFiltersState}
				/>
			</Box>

			{isMobileView && (
				<Box fullWidth row xbetween ycenter borderTop={'1px solid #F0F0F0'} py={'16px'} px={'24px'}>
					<Button
						variant="text"
						sx={{
							borderColor: '#E3E3E3',
							color: '#232425',
						}}>
						Clear
					</Button>
					<Button
						variant="contained"
						sx={{
							borderColor: '#E3E3E3',
							color: '#232425',
						}}>
						Apply
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default PropertyFilters;

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

const locationContainerStyle = (theme: any) => ({
	maxHeight: 250,
	flexWrap: 'nowrap',
	overflowY: 'auto',
	overflowX: 'clip',
	'&::-webkit-scrollbar': {
		width: '8px',
		backgroundColor: '#1F448B14',
		borderRadius: 16,
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 16,
	},
});
