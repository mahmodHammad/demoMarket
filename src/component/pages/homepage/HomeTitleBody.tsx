import Viewmore from '@/component/Viewmore';
import { Box, Text } from '@/wrappers';
import React from 'react';

interface HomeTitleBody {
	title: string;
	body: string;
	link: string;
}
export default function HomeTitleBody({ title, body, link }: HomeTitleBody) {
	return (
		<Box>
			<Text
				variant="h3"
				component="h2"
				sx={{
					fontSize: { xs: '24px', md: '52px' },
					color: '#002A37',
				}}>
				{title}
			</Text>
			<Box xbetween ycenter sx={{ mt: { xs: '4px', md: '8px' } }}>
				<Text
					variant="body"
					gray
					sx={{
						maxWidth: { md: '490px', xs: '230px' },
						color: '#002A37',
					}}>
					{body}
				</Text>

				<Viewmore link={link} />
			</Box>
		</Box>
	);
}
