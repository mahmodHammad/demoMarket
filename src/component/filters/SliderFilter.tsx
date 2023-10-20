'use client';

import { TextInput, Slider } from '@/component';
import { Box } from '@/wrappers';
import React, { useState } from 'react';

type Props = {
	label: string;
	sliderValues: number[];
	handleSliderChange: (newValue: number[]) => void;
	min?: number;
	max?: number;
	isSearchBar?: boolean;
};

const SliderFilter = ({ label, sliderValues, handleSliderChange, min = 0, max = 100, isSearchBar = false }: Props) => {
	const [value, setValue] = useState<number[]>(sliderValues);

	const handleChange = (_: Event | null, newValue: number[] | number) => {
		setValue(newValue as number[]);
	};

	return (
		<Box mt={4} column gap={'12px'} ycenter fullWidth>
			<Slider
				isSearchBar
				value={value}
				min={min}
				max={max}
				getAriaLabel={() => `${label} range`}
				onChange={handleChange}
				onChangeCommitted={(_: React.SyntheticEvent | Event, value: number | number[]) =>
					handleSliderChange(value as number[])
				}
			/>

			<Box row xbetween ycenter gap={'18px'} fullWidth>
				<TextInput
					type="number"
					value={value[0]}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						const inputValue = +event.target.value;
						const minValue = 0;
						const newValue = inputValue < minValue ? minValue : inputValue;
						handleChange(null, [newValue, value[1]]);
					}}
					placeholder={`Min ${label}`}
          sx={{
            backgroundColor: isSearchBar ? 'white' : '',
            borderRadius: '8px'
          }}
				/>
				<TextInput
					type="number"
					value={value[1]}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						const inputValue = +event.target.value;
						const minValue = 0;
						const newValue = inputValue < minValue ? minValue : inputValue;
						handleChange(null, [value[0], newValue]);
					}}
					placeholder={`Max ${label}`}
          sx={{
            backgroundColor: isSearchBar ? 'white' : '',
            borderRadius: '8px'
          }}
				/>
			</Box>
		</Box>
	);
};

export default SliderFilter;
