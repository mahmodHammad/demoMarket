import React from 'react';
import { Rightrounded } from '@/assets';
import { Button } from '@/wrappers';
import Link from 'next/link';
import { xtenants } from '@/utils/xtenants';
import theme from '@/ThemeRegistry/theme';

interface Viewmore {
	link: string;
}
export default function Viewmore({ link }: Viewmore) {
	return (
		<Button
			component={Link}
			href={link}
			size="small"
			
			endIcon={<Rightrounded sx={{ fill:theme.palette.primary.dark }} />}
			sx={{
				fontWeight: { xs: '400', md: '700' },
				fontSize: { xs: '12px', md: '14px' },
			}}>
			View more
		</Button>
	);
}
