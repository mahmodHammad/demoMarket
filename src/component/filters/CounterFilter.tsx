import React from 'react';
import { Box, Text } from '@/wrappers';
import { Minus, Plus } from '@/assets';

type Props = {
  name: string;
  number: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
};

const CounterFilter = ({ name, number, handleDecrement, handleIncrement }: Props) => {
  return (
    <Box row xbetween ycenter>
      <Text>{name}</Text>
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
        }}>
        <Minus style={{ cursor: 'pointer' }} onClick={handleDecrement} />
        <Text>{number}</Text>
        <Plus style={{ cursor: 'pointer',fill:"#4F5154" }} onClick={handleIncrement} />
      </Box>
    </Box>
  );
};

export default CounterFilter;
