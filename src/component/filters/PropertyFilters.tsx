'use client';

import React from 'react';
import { AccordionChipsFilter, TextInput } from '@/component';
import { Slider } from '@mui/material';
import { Box, Text, Button, Accordion } from '@/wrappers';
import { Minus, Plus } from '@/assets';

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

type Props = {};

const PropertyFilters = (props: Props) => {
	const [filters, setFilters] = React.useState(FILTERS);

	const [noOfBedrooms, setNoOfBedrooms] = React.useState(0);
	const [noOfBathrooms, setNoOfBathrooms] = React.useState(0);

	const [budgetSliderValues, setBudgetSliderValues] = React.useState<number[]>([
		0, 2000,
	]);

	const [areaSliderValues, setAreaSliderValues] = React.useState<number[]>([
		0, 100,
	]);

	const handleBudgetSliderChange = (
		event: Event,
		newValue: number | number[]
	) => {
		setBudgetSliderValues(newValue as number[]);
	};

	const handleAreaSliderChange = (
		event: Event,
		newValue: number | number[]
	) => {
		setAreaSliderValues(newValue as number[]);
	};

	const handleFiltersState = (filter: string, id: number) =>
		setFilters((prev: any) => ({
			...prev,
			[filter]: prev[filter].map((f: any) =>
				f.id === id ? { ...f, checked: !f.checked } : f
			),
		}));

	return (
		<Box
			column
			ycenter
			gap={'16px'}
			sx={{
				width: '100%',
				p: '16px',
				bgcolor: '#FFF',
				borderRadius: '16px',
				boxShadow: '0px 25px 60px -10px rgba(28, 39, 49, 0.12)',
				pb: '20px',
			}}
		>
			<Box
				sx={{
					width: '100%',
					gap: '8px',
				}}
			>
				<Box
					row
					ycenter
					xbetween
					py={'12px'}
				>
					<Text variant='h5'>Filter</Text>
					<Button
						size='medium'
						sx={{ color: '#004256', fontWeight: '700', fontSize: 14 }}
					>
						Apply Filter
					</Button>
				</Box>

				<TextInput placeholder='Search' />
			</Box>

			<Accordion
				defaultExpanded
				header='Budget'
				Content={() => (
					<Box
						mt={5}
						column
						gap={'12px'}
						ycenter
					>
						<Slider
							size='medium'
							sx={{ width: 0.91 }}
							value={budgetSliderValues}
							valueLabelDisplay='on'
							getAriaLabel={() => 'Budget range'}
							onChange={handleBudgetSliderChange}
						/>
						<Box
							row
							xbetween
							ycenter
							gap={'18px'}
							sx={{ width: '100%' }}
						>
							<TextInput placeholder='Min Budget' />
							<TextInput placeholder='Max Budget' />
						</Box>
					</Box>
				)}
			/>

			<AccordionChipsFilter
				header='Location'
				filterName='location'
				filters={filters.location}
				onFilterStateChange={handleFiltersState}
			/>

			<AccordionChipsFilter
				header='Property Type'
				filterName='propertyType'
				filters={filters.propertyType}
				onFilterStateChange={handleFiltersState}
			/>

			<Accordion
				defaultExpanded
				header='No. of  Bedrooms'
				Content={() => (
					<Box
						row
						xbetween
						ycenter
					>
						<Text>Bedrooms</Text>
						<Box
							row
							xbetween
							ycenter
							gap={'18px'}
							sx={{
								width: '171px',
								border: '1px solid #E3E3E3',
								borderRadius: '8px',
								p: '12px',
							}}
						>
							<Minus
								style={{ cursor: 'pointer' }}
								onClick={() => setNoOfBedrooms((prev) => --prev)}
							/>
							<Text>{noOfBedrooms}</Text>
							<Plus
								style={{ cursor: 'pointer' }}
								onClick={() => setNoOfBedrooms((prev) => ++prev)}
							/>
						</Box>
					</Box>
				)}
			/>

			<Accordion
				defaultExpanded
				header='No. of  Bathrooms'
				Content={() => (
					<Box
						row
						xbetween
						ycenter
					>
						<Text>Bathrooms</Text>
						<Box
							row
							xbetween
							ycenter
							sx={{
								width: '171px',
								border: '1px solid #E3E3E3',
								borderRadius: '8px',
								p: '12px',
							}}
						>
							<Minus
								style={{ cursor: 'pointer' }}
								onClick={() => setNoOfBathrooms((prev) => --prev)}
							/>
							<Text>{noOfBathrooms}</Text>
							<Plus
								style={{ cursor: 'pointer' }}
								onClick={() => setNoOfBathrooms((prev) => ++prev)}
							/>
						</Box>
					</Box>
				)}
			/>

			<Accordion
				defaultExpanded
				header='Area'
				Content={() => (
					<Box
						mt={5}
						column
						gap={'12px'}
						ycenter
					>
						<Slider
							size='medium'
							sx={{ width: 0.91 }}
							value={areaSliderValues}
							valueLabelDisplay='on'
							getAriaLabel={() => 'Area range'}
							onChange={handleAreaSliderChange}
						/>
						<Box
							row
							xbetween
							ycenter
							gap={'18px'}
							sx={{ width: '100%' }}
						>
							<TextInput placeholder='Min Area' />
							<TextInput placeholder='Max Area' />
						</Box>
					</Box>
				)}
			/>

			<AccordionChipsFilter
				header='Amenities'
				filterName='amenities'
				filters={filters.amenities}
				onFilterStateChange={handleFiltersState}
			/>

			<AccordionChipsFilter
				header='Furnishing Status'
				filterName='furnishingStatus'
				filters={filters.furnishingStatus}
				onFilterStateChange={handleFiltersState}
			/>

			<AccordionChipsFilter
				header='Date Listed'
				filterName='dateListed'
				filters={filters.dateListed}
				onFilterStateChange={handleFiltersState}
			/>

			<AccordionChipsFilter
				header='Availability'
				filterName='availability'
				filters={filters.availability}
				onFilterStateChange={handleFiltersState}
			/>
		</Box>
	);
};

export default PropertyFilters;
