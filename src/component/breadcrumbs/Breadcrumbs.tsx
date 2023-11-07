'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Box, Text } from '@/wrappers';
import Link from 'next/link';
import { breadcrumbs } from '@/utils/breadcrumbs';
const Breadcrumbs = () => {
	const path = usePathname();
	let arr = path.split('/').slice(1);
	const handleLink = (index: number) => {
		return arr.slice(0, index + 1).join('/');
	};
	return (
		<>
			<Box row>
				{arr?.map((item, index) => {
					return (
						<>
							<Text
								sx={{ textDecoration: 'none' }}
								component={Link}
								variant="title"
								href={`/${handleLink(index)}`}
								mr={'10px'}
								color={`${index !== arr.length - 1 ? '#CACACA' : '#232425'} `}>
								{breadcrumbs[item] || item}
							</Text>
							{index !== arr.length - 1 && (
								<Text sx={{ textDecoration: 'none' }} mr={'10px'} color={'#CACACA'}>
									{' > '}
								</Text>
							)}
						</>
					);
				})}
			</Box>
		</>
	);
};

export default Breadcrumbs;
