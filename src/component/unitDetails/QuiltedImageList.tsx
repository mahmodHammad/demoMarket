'use client';

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import photo1 from '@/assets/images/photo1.png';
import photo2 from '@/assets/images/photo2.png';
import photo3 from '@/assets/images/photo3.png';
import Image from 'next/image';
import { Box } from '@/wrappers';
import { Grid, ImageListItemBar } from '@mui/material';
import Carousel from '../Carousel';
import { Label } from '../table/Table';

export default function QuiltedImageList() {
	const itemData = [
		{
			img: photo1,
			rows: 4,
			cols: 8,
		},
		{
			img: photo2,
			rows: 2,
			cols: 4,
		},
		{
			img: photo3,
			rows: 2,
			cols: 4,
		},
	];

	const imagesLength = [1, 2, 3];

	return (
		<>
			<Grid container item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
				<ImageList sx={{ width: '100%' }} variant="quilted" cols={12} rowHeight={121}>
					{[1, 2, 3].map((item, index) => (
						<ImageListItem
							key={itemData[index]?.img}
							cols={itemData[index].cols || 1}
							rows={itemData[index].rows || 1}
							sx={{
								p: '10px',
							}}>
							<Box
								component={Image}
								src={itemData[index].img}
								sx={{
									width: '100%',
									height: '100%',
									borderRadius: '8px',
									objectFit: 'cover',
								}}
								alt={itemData[index].title}
							/>
							{index === imagesLength?.length - 1 && (
								<ImageListItemBar
									sx={{ background: 'transparent', margin: '25px 15px' }}
									actionIcon={
										<span
											style={{
												color: '#00697A',
												backgroundColor: '#EBF6F8',
												borderRadius: 50,
												padding: '10px',
												fontWeight: 500,
												cursor: 'pointer',
											}}>
											View more
										</span>
									}
								/>
							)}
						</ImageListItem>
					))}
				</ImageList>
			</Grid>

			<Box sx={{ width: '100vw', display: { xs: 'block', md: 'none' } }}>
				<Carousel
					items={itemData.map((d: any, index: number) => (
						<Box
							key={index}
							sx={{
								// background: "red",
								width: '330px',
								height: { xs: '240px', md: '273px' },
								position: 'relative',
								overflow: 'hidden',
								borderRadius: '16px',
							}}>
							<Box
								sx={{
									marginLeft: index > 0 ? '20px' : '20px',
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									objectPosition: 'bottom',
									position: 'absolute',
									borderRadius: '16px',
								}}
								component={Image}
								alt="houses and properties for rent"
								src={d.img}
							/>
						</Box>
					))}
				/>
			</Box>
		</>
	);
}
