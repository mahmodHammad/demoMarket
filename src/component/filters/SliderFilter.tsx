'user client';

import * as React from 'react';
import { TextInput } from '@/component';
import { Slider } from '@mui/material';
import { Box } from '@/wrappers';

type Props = {
  label: string;
  sliderValues: number[];
  handleSliderChange: (newValue: number[]) => void;
};

const SliderFilter = ({ label, sliderValues, handleSliderChange }: Props) => {
  const [value, setValue] = React.useState<number[]>(sliderValues);

  const handleChange = (event: Event | null, newValue: number[] | number) => {
    setValue(newValue as number[]);
  };

  return (
    <Box mt={4} column gap={'12px'} ycenter>
      <Slider
        disableSwap
        size="medium"
        sx={{
          width: 0.91,
          '& .MuiSlider-valueLabel': {
            backgroundColor: 'primary.main',
            borderRadius: '4px',
            width: '35px',
          },
        }}
        value={value}
        getAriaLabel={() => `${label} range`}
        onChange={handleChange}
        onChangeCommitted={(event: React.SyntheticEvent | Event, value: number | number[]) =>
          handleSliderChange(value as number[])
        }
        valueLabelDisplay="on"
      />

      <Box row xbetween ycenter gap={'18px'} sx={{ width: '100%' }}>
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
        />
      </Box>
    </Box>
  );
};

export default SliderFilter;
