'use client';
import React from 'react';
import { Box, Button, Text } from '@/wrappers';
import Image from 'next/image';
import Link from 'next/link';
import { Divider } from '@mui/material';
import { FilledHeart, OutlineHeart } from '@/assets';

interface Props {
	id: number;
	img: string;
	title: string;
	link?: string;
	price: string;
	area: string;
	location: string;
	liked: boolean;
	height?: string;
	width?: string;
	imgHeight?: string;
	toggleLike: (id: number) => void;
	buttonName?: string;
	onClick?: () => void;
}
export default function UnitsCard({
	id,
	liked,
	img,
	title,
	link = '/unitdetails',
	price,
	area,
	location,
	toggleLike,
	imgHeight = '237px',
	width = '100%',
	height = 'inherit',
	buttonName = 'View Details',
	onClick,
}: Props) {
	return (
		<Box
			relative
			sx={{
				width: width,
				height: { xs: height, md: height },
				// position: "relative",
				// overflow: "hidden",
				borderRadius: '16px',

				boxShadow: '0px 6px 12px 0px rgba(28, 39, 49, 0.05)',
			}}>
			<Box
				absolute
				top={16}
				right={16}
				xcenter
				ycenter
				sx={{
					width: 36,
					height: 36,
					borderRadius: 18,
					bgcolor: '#00425630',
					cursor: 'pointer',
					transition: 'transform 0.2s',
					'&:hover': {
						transform: 'scale(1.15)',
					},
				}}>
				<Box xcenter ycenter onClick={() => toggleLike(id)}>
					{liked ? <FilledHeart /> : <OutlineHeart />}
				</Box>
			</Box>
			{/* <Box
        center
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: { xs: "26px", md: "36px" },
          height: { xs: "26px", md: "36px" },

          backgroundColor: "rgba(52, 52, 52, 0.2)",
          borderRadius: 100,
        }}
      >
        Hart Icon
      </Box> */}
			<Box
				sx={{
					width: '100%',
					height: { xs: '150px', md: imgHeight },
					borderRadius: '16px 16px 0 0',
					objectFit: 'cover',
				}}
				component={Image}
				placeholder="blur"
				alt="houses and properties for rent"
				src={img}
			/>
			<Box
				column
				sx={{
					width: '100%',
					height: { xs: '80px', md: '136px' },
					py: '12px',
					px: '16px',
				}}>
				<Box column>
					<Text
						variant="h5"
						sx={{
							fontSize: { xs: '14px', md: '18px' },
						}}>
						{title}
					</Text>
					<Text
						variant="small"
						sx={{
							// fontSize: { xs: "14px", md: "18px" },
							display: { xs: 'flex', md: 'none' },
						}}>
						{location}
					</Text>
				</Box>

				<Box
					column
					sx={{
						mt: { xs: '15px', md: '22px' },
						display: { xs: 'none', md: 'flex' },
					}}>
					<Text
						variant="caption"
						sx={{
							fontSize: { xs: '8px', md: '10px' },
						}}>
						Location
					</Text>
					<Text
						variant="label"
						sx={
							{
								// fontSize: { xs: "14px", md: "14px" },
							}
						}>
						{location}
					</Text>
				</Box>
				<Box row center xbetween sx={{ mt: { xs: '8px', md: '12px' } }}>
					<Box column>
						<Text
							variant="caption"
							sx={{
								fontSize: { xs: '8px', md: '10px' },
								display: { xs: 'none', md: 'flex' },
							}}>
							Price
						</Text>
						<Text
							variant="small"
							bold
							sx={
								{
									// fontSize: { xs: "14px", md: "24px" },
								}
							}>
							{'SAR ' + price}
						</Text>
					</Box>

					{/* <Box row center>
            <ThreeD
              sx={{ mr: "8px", fontSize: { xs: "16px", md: "30px" } }}
            ></ThreeD>

            <Text
              variant="label"
              sx={{
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              3D view
            </Text>
          </Box> */}
					<Box
						center
						sx={{
							backgroundColor: 'rgba(42, 43, 45, 0.08) ',
							borderRadius: '32px',
							height: '26px',
							py: '8px',
							px: '12px',
						}}>
						<Text
							center
							variant="body"
							s={16}
							sx={{
								fontSize: { xs: '10px', md: '16px' },
							}}>
							{area + ' Sqm'}
						</Text>
					</Box>
				</Box>
			</Box>
			<Divider sx={{ mt: '16px', backgroundColor: '#F0F0F0', height: '1px', border: '0px' }}></Divider>
			<Box sx={{ py: '16px', px: '24px', width: '100%' }}>
				{onClick ? (
					<Button
						variant="outlined"
						sx={{
							display: 'dlex',
							height: '20px',
							padding: '16px 24px',
							justifyContent: ' center',
							alignItems: 'center',
							width: '100%',
							fontSize: { xs: '12px', md: '14px' },
						}}>
						{buttonName}
					</Button>
				) : (
					<Button
						component={Link}
						variant="outlined"
						sx={{
							display: 'dlex',
							height: '20px',
							padding: '16px 24px',
							justifyContent: ' center',
							alignItems: 'center',
							width: '100%',
							fontSize: { xs: '12px', md: '14px' },
						}}
						href={link}>
						{buttonName}
					</Button>
				)}
			</Box>
		</Box>
	);
}
