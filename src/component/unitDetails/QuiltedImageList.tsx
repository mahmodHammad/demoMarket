'use client';

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { Box } from '@/wrappers';
import { Grid, ImageListItemBar } from '@mui/material';
import Carousel from '../Carousel';

export default function QuiltedImageList({ imagesList, onClick }: any) {
	return (
		<>
			<Grid container item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
				<ImageList sx={{ width: '100%' }} variant="quilted" cols={12} rowHeight={121}>
					{imagesList?.map((item, index) => (
						<ImageListItem
							key={item?.img}
							onClick={() => onClick(index)}
							cols={item?.cols || 1}
							rows={item?.rows || 1}
							sx={{
								p: '10px',
							}}>
							<Box
								component="img"
								src={item.img}
								sx={{
									width: '100%',
									height: '100%',
									borderRadius: '8px',
									objectFit: 'cover',
								}}
								alt={item.title}
							/>
							{index === 2 && imagesList?.length > 3 && (
								<ImageListItemBar
									onClick={() => onClick(3)}
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
					items={imagesList.map((d: any, index: number) => (
						<Box
							key={index}
							sx={{
								width: '330px',
								height: { xs: '240px', md: '273px' },
								position: 'relative',
								overflow: 'hidden',
								borderRadius: '16px',
							}}>
							<Box
								fill
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
