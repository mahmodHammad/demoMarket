'use client';

import { Box, Text } from '@/wrappers';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
	Autocomplete,
	ButtonBase,
	Checkbox,
	Divider,
	IconButton,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material';
import { SearchIcon } from '@/assets';
import theme from '@/ThemeRegistry/theme';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getFilters } from '@/app/(landing)/listingpage/listing-service';
import SliderFilter from '@/component/filters/SliderFilter';
import { Close } from '@/assets';

const SearchBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [contentVisible, setContentVisible] = useState(false);
	const [isRent, setIsRent] = useState(false);

	const [propertyTypes, setPropertyTypes] = useState<any>([]);
	const [locations, setLocations] = useState<any>([]);

	const [selectedPropertyTypes, setSelectedPropertyTypes] = React.useState<string[]>([]);
	const [selectedLocation, setSelectedLocation] = React.useState<string[]>([]);

	const [filtersInfo, setFiltersInfo] = useState<any>(null);
	const [budgetSliderValues, setBudgetSliderValues] = useState<number[]>([0, 10000000000]);

	const { data: filtersData } = useQuery({
		queryKey: [keys.FILTERS2],
		queryFn: getFilters,
	});

	useEffect(() => {
		console.log('filtersData in homepage', filtersData);
		setFiltersInfo(filtersData);

		if (filtersData?.property_type)
			setPropertyTypes(
				Object.entries(filtersData?.property_type).map(([label, id]: any) => ({
					id,
					label,
				})),
			);

		if (filtersData?.locations)
			setLocations(
				filtersData?.locations.map((location: any) => ({
					id: location.id,
					label: location.name,
				})),
			);
	}, [filtersData]);

	const handlePropertyTypeFilterChange = (event: SelectChangeEvent<typeof selectedPropertyTypes>) =>
		setSelectedPropertyTypes(
			typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
		);
	const handleLocationsFilterChange = (event: SelectChangeEvent<typeof selectedLocation>) =>
		setSelectedLocation(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);

	const handleClick = () => setIsRent(false);
	const handleClickRent = () => setIsRent(true);

	const handleTransitionEnd = () => {
		if (isExpanded) setContentVisible(true);
		else setContentVisible(false);
	};

	return (
		<Box sx={{ mt: { xs: '20px ', md: '60px' }, width: { xs: '100%', md: 'initial' } }}>
			<Box row>
				<ButtonBase onClick={handleClick}>
					<Box
						center
						sx={{
							width: { xs: '50px', md: '102px' },
							height: { xs: '25px', md: '39px' },

							backgroundColor: isRent ? null : '#FFFFFFee',
							borderRadius: {
								xs: '8px 8px 0px 0px',
								md: '15px 15px 0px 0px',
							},
						}}>
						<Text variant="small" sx={{ color: isRent ? '#FFFFFF' : null }}>
							Buy
						</Text>
					</Box>
				</ButtonBase>

				<ButtonBase onClick={handleClickRent}>
					<Box
						center
						sx={{
							width: { xs: '50px', md: '102px' },
							height: { xs: '25px', md: '39px' },
							backgroundColor: isRent ? '#FFFFFFee' : null,
							borderRadius: {
								xs: '8px 8px 0px 0px',
								md: '15px 15px 0px 0px',
							},
						}}>
						<Text variant="small" sx={{ color: isRent ? null : '#FFFFFF' }}>
							Rent
						</Text>
					</Box>
				</ButtonBase>
			</Box>
			<Box
				xbetween
				column
				center
				onTransitionEnd={handleTransitionEnd}
				sx={{
					width: { xs: '100%', md: '918px' },
					height: { xs: '70px', md: isExpanded ? '293px' : '102px' },
					transition: 'height 0.3s ease-in-out',
					borderRadius: { xs: ' 0px 16px 16px 16px', md: ' 0px 20px 20px 20px' },
					boxShadow: ' 0px 30px 60px -15px #8F90BC26',
					backgroundColor: '#FFFFFF88',
					backdropFilter: 'blur(10px)',
					p: { xs: '12px', md: '24px' },
				}}>
				<Box xbetween row center fullWidth>
					<Box xbetween width={1}>
						{/* // TODO: implement mobile */}
						<Box center width={1} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-around' }}>
							{/* location */}
							<Box width={1}>
								<Autocomplete
									{...defaultProps}
									id="disable-close-on-select"
									disableCloseOnSelect
									renderInput={(params) => (
										<TextField
											{...params}
											InputProps={{
												...params.InputProps,
												disableUnderline: true,
											}}
											variant="standard"
											placeholder="Location"
											sx={{
												width: '100%',
												input: {
													'&::placeholder': {
														textOverflow: 'ellipsis !important',
														color: '#232425',
														opacity: 1,
														fontSize: '13px',
													},
												},
											}}
										/>
									)}
								/>
							</Box>

							{/* property type */}
							<Box column width={1}>
								<Autocomplete
									{...defaultProps}
									id="disable-close-on-select"
									disableCloseOnSelect
									renderInput={(params) => (
										<TextField
											{...params}
											InputProps={{
												...params.InputProps,
												disableUnderline: true,
											}}
											variant="standard"
											placeholder="Property Type"
											sx={{
												input: {
													'&::placeholder': {
														textOverflow: 'ellipsis !important',
														color: '#232425',
														opacity: 1,
														fontSize: '13px',
													},
												},
											}}
										/>
									)}
								/>
							</Box>

							{/* price range */}
							<Box column width={1}>
								<Autocomplete
									{...defaultProps}
									id="disable-close-on-select"
									disableCloseOnSelect
									renderInput={(params) => (
										<TextField
											{...params}
											InputProps={{
												...params.InputProps,
												disableUnderline: true,
											}}
											sx={{
												input: {
													'&::placeholder': {
														textOverflow: 'ellipsis !important',
														color: '#232425',
														opacity: 1,
														fontSize: '13px',
													},
												},
											}}
											variant="standard"
											placeholder="Price Range"
										/>
									)}
								/>
							</Box>
						</Box>

						{/* new location types filter web */}
						<Box row yend width={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Box column mr={'20px'} width={1}>
								<Text variant="label">Location</Text>

								<Select
									sx={{
										'& fieldset': { border: 'none' },
										height: '32px',
										maxWidth: '250px',
										marginLeft: '-15px',
									}}
									labelId="demo-multiple-checkbox-label"
									placeholder="Select Your City"
									id="demo-multiple-checkbox"
									displayEmpty
									multiple
									value={selectedLocation}
									onChange={handleLocationsFilterChange}
									// onOpen={() => {
									// 	setContentVisible(false);
									// 	setIsExpanded(false);
									// }}
									input={<OutlinedInput />}
									renderValue={(selected) => {
										const selectedFilters = locations
											.filter((t: any) => selected.includes(t.id))
											.map((t: any) => t.label);

										if (!!!selected.length) return 'Select Your City';
										else if (selected.length === 1) return selectedFilters[0];
										else return selectedFilters.map((t: any) => `${t.substring(0, 8)}...`).join(' , ');
									}}
									disabled={!!!locations.length}
									MenuProps={MenuProps}>
									{locations?.map(({ id, label }: any) => (
										<MenuItem key={id} value={id}>
											<ListItemText primary={label} />
											<Checkbox checked={selectedLocation.includes(id)} />
										</MenuItem>
									))}
								</Select>
							</Box>
							<Box center mr={'35px'}>
								<Divider
									orientation="vertical"
									sx={{
										width: '2px',
										background: 'rgba(255, 66, 66, 0.08)',
										border: '0px',
										height: '46px',
									}}
								/>
							</Box>
						</Box>

						{/* property types filter web */}
						<Box row yend width={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Box column mr={'20px'} width={1}>
								<Text variant="label">Property Type</Text>
								<Select
									sx={{
										'& fieldset': { border: 'none' },
										height: '32px',
										maxWidth: '250px',
										marginLeft: '-15px',
									}}
									labelId="demo-multiple-checkbox-label"
									placeholder="Choose Property Type"
									id="demo-multiple-checkbox"
									displayEmpty
									multiple
									value={selectedPropertyTypes}
									// onOpen={() => {
									// 	setContentVisible(false);
									// 	setIsExpanded(false);
									// }}
									onChange={handlePropertyTypeFilterChange}
									input={<OutlinedInput />}
									renderValue={(selected) => {
										const selectedFilters = propertyTypes
											.filter((t: any) => selected.includes(t.id))
											.map((t: any) => t.label);

										if (!!!selected.length) return 'Choose Property Type';
										else if (selected.length === 1) return selectedFilters[0];
										else return selectedFilters.map((t: any) => `${t.substring(0, 8)}...`).join(' , ');
									}}
									disabled={!!!propertyTypes.length}
									MenuProps={MenuProps}>
									{propertyTypes?.map(({ id, label }: any) => (
										<MenuItem key={id} value={id}>
											<Checkbox checked={selectedPropertyTypes.includes(id)} />
											<ListItemText primary={label} />
										</MenuItem>
									))}
								</Select>
							</Box>
							<Box center mr={'35px'}>
								<Divider
									orientation="vertical"
									sx={{
										width: '2px',
										background: 'rgba(255, 66, 66, 0.08)',
										border: '0px',
										height: '46px',
									}}
								/>
							</Box>
						</Box>

						{/* price range filter web */}
						<Box row yend width={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Box column width={1}>
								<Text variant="label" mb={0.6}>
									Price Range
								</Text>

								<Text onClick={() => setIsExpanded(true)} sx={{ cursor: 'pointer' }}>
									Choose Price Range
								</Text>
							</Box>
						</Box>
					</Box>

					{/* search button  */}
					<Box
						width={{ xs: '30px', md: '54px' }}
						height={{ xs: '30px', md: '54px' }}
						bgcolor={theme.palette.primary.main}
						borderRadius={{ xs: '8px', md: '15px' }}
						center>
						<IconButton
							component={Link}
							aria-label="delete"
							size="small"
							href={`/listingpage?isRent=${isRent}&${selectedPropertyTypes
								.map((f) => `type=${f}`)
								.join('&')}&${selectedLocation.map((f) => `location=${f}`).join('&')}&minBudget=${
								budgetSliderValues[0]
							}&maxBudget=${budgetSliderValues[1]}`}>
							<SearchIcon
								sx={{
									stroke: 'white',
									color: 'white',
								}}
							/>
						</IconButton>
					</Box>
				</Box>

				{contentVisible && (
					<Box column fullWidth>
						<Box fullWidth sx={{ height: '2px', backgroundColor: 'rgba(255, 66, 66, 0.08)', marginBottom: 2 }} />
						<Box row fullWidth xbetween mb={0.65}>
							<Text bold sx={{ fontSize: 14, marginBottom: 2 }}>
								Price Range
							</Text>

							<IconButton
								onClick={() => {
									setContentVisible(false);
									setIsExpanded(false);
								}}>
								<Close />
							</IconButton>
						</Box>
						<SliderFilter
							isSearchBar
							label="Budget"
							sliderValues={budgetSliderValues}
							min={+filtersInfo?.budget.min || 0}
							max={+filtersInfo?.budget.max || 10000000000}
							handleSliderChange={(value: number[]) => setBudgetSliderValues(value)}
						/>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default SearchBar;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const defaultProps = {};
