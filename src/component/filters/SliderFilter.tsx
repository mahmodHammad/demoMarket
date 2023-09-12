import React from 'react';
import { TextInput } from '@/component';
import { Slider } from '@mui/material';
import { Box } from '@/wrappers';

type Props = {
  label: string;
  sliderValues: number[];
  handleSliderChange: (event: Event | null, newValue: number | number[]) => void;
};

const SliderFilter = ({ label, sliderValues, handleSliderChange }: Props) => {
  return (
    <Box mt={5} column gap={'12px'} ycenter>
      <Slider
        size="medium"
        sx={{ width: 0.91 }}
        value={sliderValues}
        valueLabelDisplay="on"
        getAriaLabel={() => `${label} range`}
        onChange={handleSliderChange}
      />
      <Box row xbetween ycenter gap={'18px'} sx={{ width: '100%' }}>
        <TextInput
          type="number"
          value={sliderValues[0]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSliderChange(null, [+event.target.value, sliderValues[1]])
          }
          placeholder={`Min ${label}`}
        />
        <TextInput
          type="number"
          value={sliderValues[1]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSliderChange(null, [sliderValues[0], +event.target.value])
          }
          placeholder={`Max ${label}`}
        />
      </Box>
    </Box>
  );
};

export default SliderFilter;
