'use client';

import React from 'react';
import { TextInput } from '@/component';
import { Slider } from '@mui/material';
import { Box, Text, Button, Accordion } from '@/wrappers';

const valuetext = (value: number) => `${value}°C`;

type Props = {};

const PropertyFilters = (props: Props) => {
	const [budgetSliderValues, setBudgetSliderValues] = React.useState<number[]>([
		0, 2000,
	]);

	const handleBudgetSliderChange = (
		event: Event,
		newValue: number | number[]
	) => {
		setBudgetSliderValues(newValue as number[]);
	};

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
						mt={3}
						column
						gap={'12px'}
						ycenter
					>
						<Slider
							size='medium'
							sx={{ width: 0.95 }}
							value={budgetSliderValues}
							valueLabelDisplay='on'
							getAriaLabel={() => 'Temperature range'}
							getAriaValueText={valuetext}
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

			<Accordion
				defaultExpanded
				header='Location'
				Content={() => (
					<Box
						column
						gap={'8px'}
						// sx={{width: '100%'}}
						// ycenter
					>
						<Text>a</Text>
					</Box>
				)}
			/>
		</Box>
	);
};

export default PropertyFilters;

/*


*/
