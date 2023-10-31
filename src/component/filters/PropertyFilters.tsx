'use client';

import React, { ChangeEvent } from 'react';
import { AccordionChipsFilter, Switch, CounterFilter, SliderFilter, TextInput } from '@/component';
import { Box, Text, Button, Accordion, Loading } from '@/wrappers';
import { IconButton } from '@mui/material';
import { Close } from '@/assets';
import { useTheme } from '@emotion/react';

type Props = {
	isLoading?: boolean;
	isMobileView?: boolean;
	closeFilterOnMobileView?: () => void;
	// TODO: type props
	filtersInfo: any;
	budgetSliderValues: any;
	setBudgetSliderValues: any;
	locationSearch: any;
	setLocationSearch: any;
	neighbourhoodSearch: any;
	setNeighbourhoodSearch: any;
	noOfBedrooms: any;
	setNoOfBedrooms: any;
	noOfBathrooms: any;
	setNoOfBathrooms: any;
	noOfGuestrooms: any;
	setNoOfGuestrooms: any;
	petFriendly: any;
	setPetFriendly: any;
	areaSliderValues: any;
	setAreaSliderValues: any;
	availabilityFilters: any;
	setAvailabilityFilters: any;
	filteredLocationFilters: any;
	setFilteredLocationFilters: any;
	propertyTypeFilters: any;
	setPropertyTypeFilters: any;
	amenitiesFilters: any;
	setAmenitiesFilters: any;
	dateFilters: any;
	setDateFilters: any;
	furnishingStatusFilters: any;
	setFurnishingStatusFilters: any;
	filteredNeighbourhoodFilters: any;
	setFilteredNeighbourhoodFilters: any;
};

const PropertyFilters = ({
	isLoading = false,
	isMobileView = false,
	filtersInfo,
	closeFilterOnMobileView,
	budgetSliderValues,
	setBudgetSliderValues,
	locationSearch,
	setLocationSearch,
	neighbourhoodSearch,
	setNeighbourhoodSearch,
	noOfBedrooms,
	setNoOfBedrooms,
	noOfBathrooms,
	noOfGuestrooms,
	setNoOfGuestrooms,
	setNoOfBathrooms,
	petFriendly,
	setPetFriendly,
	areaSliderValues,
	setAreaSliderValues,
	availabilityFilters,
	setAvailabilityFilters,
	filteredLocationFilters,
	setFilteredLocationFilters,
	propertyTypeFilters,
	setPropertyTypeFilters,
	amenitiesFilters,
	setAmenitiesFilters,
	dateFilters,
	setDateFilters,
	furnishingStatusFilters,
	setFurnishingStatusFilters,
	filteredNeighbourhoodFilters,
	setFilteredNeighbourhoodFilters,
}: Props) => {
	const theme: any = useTheme();

	if (isLoading) return <Loading />;

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
							min={+filtersInfo?.budget.min || 0}
							max={+filtersInfo?.budget.max || 10000000000}
							handleSliderChange={(value: number[]) => setBudgetSliderValues(value)}
						/>
					)}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Cities"
					filterName="location"
					filters={filteredLocationFilters}
					onFilterStateChange={(_, v) =>
						setFilteredLocationFilters((prev: any) =>
							prev.map((f: any) => (+f.id === +v ? { ...f, checked: !f.checked } : f)),
						)
					}
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
					header="Neighbourhoods"
					filterName="neighborhood"
					filters={filteredNeighbourhoodFilters}
					onFilterStateChange={(_, v) =>
						setFilteredNeighbourhoodFilters((prev: any) =>
							prev.map((f: any) => (+f.id === +v ? { ...f, checked: !f.checked } : f)),
						)
					}
					headerContent={
						<TextInput
							value={neighbourhoodSearch}
							onChange={(e) => setNeighbourhoodSearch(e.target.value)}
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
					filters={propertyTypeFilters}
					onFilterStateChange={(_, v) =>
						setPropertyTypeFilters((prev: any) =>
							prev.map((f: any) => (+f.id === +v ? { ...f, checked: !f.checked } : f)),
						)
					}
				/>

				<Accordion
					defaultExpanded={!isMobileView}
					header="No. of  Bedrooms"
					Content={() => (
						<CounterFilter
							name="Bedrooms"
							number={noOfBedrooms}
							handleIncrement={() => setNoOfBedrooms((prev: number) => ++prev)}
							handleDecrement={() => setNoOfBedrooms((prev: number) => (prev !== 0 ? --prev : prev))}
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
							handleIncrement={() => setNoOfBathrooms((prev: number) => ++prev)}
							handleDecrement={() => setNoOfBathrooms((prev: number) => (prev !== 0 ? --prev : prev))}
						/>
					)}
				/>

				<Accordion
					defaultExpanded={!isMobileView}
					header="No. of  Guestrooms"
					Content={() => (
						<CounterFilter
							name="Guest rooms"
							number={noOfGuestrooms}
							handleIncrement={() => setNoOfGuestrooms((prev: number) => ++prev)}
							handleDecrement={() => setNoOfGuestrooms((prev: number) => (prev !== 0 ? --prev : prev))}
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
							min={+filtersInfo?.area.min || 0}
							max={+filtersInfo?.area.max || 10000}
							handleSliderChange={(value: number[]) => setAreaSliderValues(value)}
						/>
					)}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Amenities"
					filterName="amenities"
					filters={amenitiesFilters}
					onFilterStateChange={(_, v) =>
						setAmenitiesFilters((prev: any) => prev.map((f: any) => (+f.id === +v ? { ...f, checked: !f.checked } : f)))
					}
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
					filters={furnishingStatusFilters}
					onFilterStateChange={(_, v) =>
						setFurnishingStatusFilters((prev: any) =>
							prev.map((f: any) => (+f.id === +v ? { ...f, checked: !f.checked } : f)),
						)
					}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Date Listed"
					filterName="dateListed"
					filters={dateFilters}
					onFilterStateChange={(_, v, e) =>
						setDateFilters((prev: any) =>
							prev.map((f: any) => (+f.id === +v ? { ...f, checked: e.target.checked } : { ...f, checked: false })),
						)
					}
				/>

				<AccordionChipsFilter
					defaultExpanded={!isMobileView}
					header="Availability"
					filterName="availability"
					filters={availabilityFilters}
					onFilterStateChange={(_, v) =>
						setAvailabilityFilters((prev: any) =>
							prev.map((f: any) => (+f.id === +v ? { ...f, checked: !f.checked } : f)),
						)
					}
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
