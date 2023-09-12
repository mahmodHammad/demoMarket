'use client';
import React, { useState } from 'react';
import { Box, Button, Text } from '@/wrappers';
import Image from 'next/image';
import { ThreeD } from '@/assets';

interface proptypes {
  description: string;
}
export default function AboutUnit({ description }: proptypes) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Box
      column
      sx={{
        width: '100%',
        mt: '40px',
        gap: '20px',
      }}>
      <Text variant="h4" s={24}>
        About this home
      </Text>
      <Text
        variant="body"
        sx={{
          display: { xs: 'none', md: 'inline' },
        }}>
        {description}
      </Text>
      <Text
        variant="body"
        sx={{
          display: { xs: 'inline', md: 'none' },
        }}>
        {isReadMore ? description.slice(0, 150) : description}
        <Text
          onClick={toggleReadMore}
          className="read-or-hide"
          primary
          sx={{
            cursor: 'pointer',
            display: { xs: 'inline', md: 'none' },
          }}>
          {isReadMore ? '...read more' : ' show less'}
        </Text>
      </Text>
    </Box>
  );
}
