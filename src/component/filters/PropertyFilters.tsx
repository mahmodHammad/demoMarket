'use client';

import React, { ChangeEvent } from 'react';
import { AccordionChipsFilter, Switch, CounterFilter, SliderFilter, TextInput } from '@/component';
import { Box, Text, Button, Accordion } from '@/wrappers';
import { IconButton } from '@mui/material';
import { Close } from '@/assets';
import { useTheme } from '@emotion/react';

type Props = {
	isMobileView?: boolean;
	closeFilterOnMobileView?: () => void;
	// TODO: type states
	budgetSliderValues: any;
	setBudgetSliderValues: any;
	AccordionFilters: any;
	setAccordionFilters: any;
	locationSearch: any;
	setLocationSearch: any;
	noOfBedrooms: any;
	setNoOfBedrooms: any;
	noOfBathrooms: any;
	setNoOfBathrooms: any;
	petFriendly: any;
	setPetFriendly: any;
	areaSliderValues: any;
	setAreaSliderValues: any;
};

const PropertyFilters = ({
	isMobileView = false,
	closeFilterOnMobileView,
	budgetSliderValues,
	setBudgetSliderValues,
	AccordionFilters,
	setAccordionFilters,
	locationSearch,
	setLocationSearch,
	noOfBedrooms,
	setNoOfBedrooms,
	noOfBathrooms,
	setNoOfBathrooms,
	petFriendly,
	setPetFriendly,
	areaSliderValues,
	setAreaSliderValues,
}: Props) => {
	const theme: any = useTheme();

	const handleFiltersState = (filter: string, id: number) =>
		setAccordionFilters((prev: any) => ({
			...prev,
			[filter]: prev[filter].map((f: any) => (f.id === id ? { ...f, checked: !f.checked } : f)),
		}));

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
							min={0}
							max={2000}
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
					headerContent={
						<TextInput
							value={locationSearch}
							onChange={(e) => setLocationSearch(e.target.value)}
							placeholder="Search"
							sx={{ width: 0.98, alignSelf: 'center', my: 1 }}
						/>
					}
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
							min={0}
							max={200}
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
