import React from 'react';
import { Box, Button, Container, Item, Text } from '@/wrappers';
import Image from 'next/image';

interface proptypes {
	img: null;
	title: string;
	dateTime: string;
	location: string;
	setIsOpen: any;
}
export default function UpcomingVisitsCard({ img, title, location, dateTime, setIsOpen }: proptypes) {
	return (
		<Container
			sx={{
				width: '100%',
				borderRadius: '16px',
				boxShadow: '0px 6px 12px 0px rgba(28, 39, 49, 0.05)',
			}}>
			<Item xs={5} sx={{ padding: '12px 15px 11px 14px' }}>
				<div
					style={{
						width: '100%',
						height: '224px',
						borderRadius: '16px',
						objectFit: 'cover',
						position: 'relative',
					}}>
					{img && (
						<Image
							style={{
								objectFit: 'cover',
								position: 'absolute',
								borderRadius: '16px',
							}}
							layout="fill"
							alt={'ssss'}
							src={img}
						/>
					)}
				</div>
				{/* <Box
					sx={{
						width: '100%',
						height: { xs: '150px', md: '224px' },
						borderRadius: '16px',
						// padding: '10px',
						objectFit: 'cover',
					}}
					component={Image}
					placeholder="blur"
					alt="houses and properties for rent"
					src={img}
				/> */}
			</Item>
			<Item xs={7}>
				<Box
					sx={{
						width: '100%',
						// height: { xs: '80px', md: '136px' },
						py: '12px',
						px: '16px',
					}}>
					<Text variant="label">{title}</Text>
					<Box
						column
						sx={{
							mt: '16px',
							display: { xs: 'none', md: 'flex' },
						}}>
						<Text variant="caption" gray>
							Location
						</Text>
						<Text variant="label">{location || 'location'}</Text>
					</Box>
					<Box
						column
						sx={{
							mt: '16px',
							display: { xs: 'none', md: 'flex' },
						}}>
						<Text variant="caption" gray>
							Visit Date & Time
						</Text>
						<Text variant="label">{dateTime || 'dateTime'}</Text>
					</Box>
					<Box
						column
						sx={{
							mt: '16px',
						}}>
						<Button
							variant="dangerOutlined"
							onClick={() => setIsOpen(true)}
							sx={{
								fontWeight: 700,
							}}>
							Cancel Visit
						</Button>
					</Box>
				</Box>
			</Item>
		</Container>
	);
}
