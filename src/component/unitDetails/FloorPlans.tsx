'use client';
import { FrontSide, GroundFloor, Room } from '@/assets';
import { Box, Text } from '@/wrappers';
import FloorCard from '../unitDetails/FloorCard';
import floor from '@/assets/images/floor.png';
import Carousel from '../Carousel';

interface proptypes {
	unitName: string;
	floorFeatures: [];
	area: string;
}

export default function FloorPlans({ floorFeatures, area, unitName }: proptypes) {
	const data = [
		{
			item: <FloorCard img={floor} name={unitName} area={area} floorFeatures={floorFeatures} />,
		},

		{
			item: <FloorCard img={floor} name={unitName} area={area} floorFeatures={floorFeatures} />,
		},
		{
			item: <FloorCard img={floor} name={unitName} area={area} floorFeatures={floorFeatures} />,
		},
	];
	return (
		<Box>
			<Text variant="h4" mt={'52px'}>
				Floor Plans
			</Text>

			<Box
				p={'18px'}
				gap={'18px'}
				sx={{
					borderRadius: '16px',
					backgroundColor: '#1F448B14',
					my: '24px',
				}}>
				{data?.length > 2 ? (
					<Carousel
						items={data.map((d: any, index: number) => (
							<Box key={index} sx={{ display: 'inline-block' }}>
								{d?.item}
							</Box>
						))}
					/>
				) : (
					<Box row>
						{data.map((d: any, index: any) => (
							<Box key={index}>{d?.item}</Box>
						))}
					</Box>
				)}
			</Box>
		</Box>
	);
}
