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
import { Location, SearchIcon } from '@/assets';
import theme from '@/ThemeRegistry/theme';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { getFilters } from '@/app/(landing)/listingpage/listing-service';

const SearchBar = () => {
	const [selectedPropertyTypes, setSelectedPropertyTypes] = React.useState<string[]>([]);
	const [isRent, setIsRent] = useState(false);
	const [propertyTypes, setPropertyTypes] = useState<any>([]);
	const [locations, setLocations] = useState<any>([]);

	const { data: filtersData } = useQuery({
		queryKey: [keys.FILTERS],
		queryFn: getFilters,
	});

	useEffect(() => {
		console.log('filtersData', filtersData);

		if (filtersData?.property_type)
			setPropertyTypes(
				Object.entries(filtersData?.property_type).map(([label, id]: any) => ({
					id,
					label,
				})),
			);

		if (filtersData?.location)
			setLocations(
				filtersData?.locations.map((location: any) => ({
					id: location.id,
					label: location.name,
				})),
			);
	}, [filtersData]);

	const handlePropertyTypeFilterChange = (event: SelectChangeEvent<typeof selectedPropertyTypes>) => {
		console.log('e', event.target.value);
		const {
			target: { value },
		} = event;

		setSelectedPropertyTypes(typeof value === 'string' ? value.split(',') : value);
	};

	const handleClick = () => setIsRent(false);
	const handleClickRent = () => setIsRent(true);

	return (
		<Box sx={{ mt: { xs: '20px ', md: '60px' }, width: { xs: '100%', md: 'initial' } }}>
			<Box row>
				<ButtonBase onClick={handleClick}>
					<Box
						center
						sx={{
							width: { xs: '50px', md: '102px' },
							height: { xs: '25px', md: '39px' },

							backgroundColor: isRent ? null : '#FFFFFF',
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
							backgroundColor: isRent ? '#FFFFFF' : null,
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
				row
				center
				sx={{
					width: { xs: '100%', md: '918px' },
					height: { xs: '70px', md: '102px' },
					borderRadius: { xs: ' 0px 16px 16px 16px', md: ' 0px 20px 20px 20px' },
					boxShadow: ' 0px 30px 60px -15px #8F90BC26',
					backgroundColor: '#FFFFFFCC',
					backdropFilter: 'blur(10px)',
					p: { xs: '12px', md: '24px' },
				}}>
				<Box xbetween width={'100%'}>
					{/* mobile */}
					<Box center width={'100%'} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-around' }}>
						<Box width={'100%'}>
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

						<Box column width={'100%'}>
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

						<Box column width={'100%'}>
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

					{/* location filter web */}
					<Box row yend width={'100%'} sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Box column mr={'30px'} width={'100%'}>
							<Text variant="label">Location</Text>
							<Autocomplete
								popupIcon={null}
								options={locations}
								getOptionLabel={(option: Option) => option.label}
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
										placeholder="Select Your City"
									/>
								)}
							/>
						</Box>
						<Location />
						<Box center ml={'10px'} mr={'35px'}>
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
					<Box row yend width={'100%'} sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Box column mr={'20px'} width={'100%'}>
							<Text variant="label">Property Type</Text>

							<Select
								sx={{
									'& fieldset': { border: 'none' },
									height: '32px',
								}}
								labelId="demo-multiple-checkbox-label"
								placeholder="Choose Property Type"
								id="demo-multiple-checkbox"
								displayEmpty
								multiple
								value={selectedPropertyTypes}
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
					<Box row yend width={'100%'} sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Box column width={'100%'}>
							<Text variant="label">Price Range</Text>
							<Autocomplete
								popupIcon={null}
								options={locations}
								getOptionLabel={(option: Option) => option.label}
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
										placeholder="Choose Price Range"
									/>
								)}
							/>
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
						href={`/listingpage?isRent=${isRent}&${selectedPropertyTypes.map((f) => `type=${f}`).join('&')}`}>
						<SearchIcon
							sx={{
								stroke: 'white',
								color: 'white',
							}}
						/>
					</IconButton>
				</Box>
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

interface Option {
	label: string;
	id: number;
}

const defaultProps = {};
