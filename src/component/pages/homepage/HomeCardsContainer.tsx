'use client';
import { Box, Container, Item } from '@/wrappers';
import React from 'react';
import HomeTitleBody from './HomeTitleBody';
import NeighbourhoodCard from '@/component/cards/NeighbourhoodCard';
import Carousel from '@/component/Carousel';
import { UnitsCard } from '@/component';

interface datatyle {
	title: string;
	img: string;
	link: string;
}

interface types {
	title: string;
	body: string;
	link: string;
	data: any;
	hasneighbourhoods?: boolean;
}

export default function HomeCardsContainer({ title, body, link, data, hasneighbourhoods }: types) {
	return (
		<Box
			sx={{
				mt: { md: '200px', xs: '80px' },
			}}>
			<HomeTitleBody title={title} body={body} link={link} />
			<Box
				sx={{
					mt: { md: '34px', xs: '22px', width: '100%' },
				}}>
				<Carousel
					items={data.map((d: any, index: number) => (
						<Box
							key={index}
							sx={{
								pr: '20px',
								display: 'flex',
								width: { xs: '235px', md: '373px' },
								mb: '15px',
							}}>
							{hasneighbourhoods ? (
								<NeighbourhoodCard title={d.title} img={d.img} link={d.link} />
							) : (
								<UnitsCard title={d.title} img={d.img} price={''} area={''} location={''} />
							)}
						</Box>
					))}
				/>
			</Box>
		</Box>
	);
}
