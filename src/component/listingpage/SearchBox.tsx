'use client';
import React, { useState } from 'react';
import { Box, Text } from '@/wrappers';
import { ButtonBase, IconButton } from '@mui/material';
import theme from '@/ThemeRegistry/theme';
import { SearchIcon, GPS } from '@/assets';
import Link from 'next/link';
import TextInput from '../forms/TextInput';

export default function SearchBox({ propertySearch, setPropertySearch, isRent, setIsRent }: any) {
	const handleClick = () => setIsRent(false);
	const handleClickRent = () => setIsRent(true);
	return (
		<>
			<Box row mt={'25px'}>
				<ButtonBase onClick={handleClick}>
					<Box
						center
						sx={{
							width: { xs: '50px', md: '90px' },
							height: { xs: '25px', md: '39px' },

							backgroundColor: isRent ? null : theme.palette.primary.main,
							borderRadius: {
								xs: '8px 8px 0px 0px',
								md: '15px 15px 0px 0px',
							},
						}}>
						<Text variant="small" sx={{ color: isRent ? null : '#FFFFFF' }}>
							Buy
						</Text>
					</Box>
				</ButtonBase>

				<ButtonBase onClick={handleClickRent}>
					<Box
						center
						sx={{
							width: { xs: '50px', md: '90px' },
							height: { xs: '25px', md: '39px' },
							backgroundColor: isRent ? theme.palette.primary.main : null,
							borderRadius: {
								xs: '8px 8px 0px 0px',
								md: '15px 15px 0px 0px',
							},
						}}>
						<Text variant="small" sx={{ color: isRent ? '#FFFFFF' : null }}>
							Rent
						</Text>
					</Box>
				</ButtonBase>
			</Box>
			<Box
				row
				xbetween
				ycenter
				sx={{
					height: '102px',
					borderRadius: '0px, 20px, 20px, 20px',
					boxShadow: ' 0px 25px 40px -10px #1C273114',
					px: '25px',
					py: '28px',
				}}>
				<Box row center fullWidth>
					{/* // TODO: style search bar */}
					<TextInput
						value={propertySearch}
						onChange={(e) => setPropertySearch(e.target.value)}
						placeholder="Search"
						sx={{ width: 0.95, alignSelf: 'center', my: 1 }}
					/>
				</Box>
				<Box row>
					<Box
						component={Link}
						href="/maps"
						width={{ md: '54px' }}
						height={{ md: '54px' }}
						bgcolor={theme.palette.primary.main + "11"}
						borderRadius={'15px'}
						center
						sx={{ cursor: 'pointer' }}
						mr={'18px'}>
						<GPS />
					</Box>

					<Box
						width={{ md: '54px' }}
						height={{ md: '54px' }}
						bgcolor={theme.palette.primary.main}
						borderRadius={'15px'}
						center>
						<IconButton size="large">
							<SearchIcon
								sx={{
									width: '25px',
									height: '25px',
									stroke: 'white',
									color: 'white',
								}}
							/>
						</IconButton>
					</Box>
				</Box>
			</Box>
		</>
	);
}
