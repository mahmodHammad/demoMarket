'use client';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import { Box, Container, Item } from '@/wrappers';

import theme from '@/ThemeRegistry/theme';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	plugins: {
		legend: {
			display: false,
			position: 'bottom' as const,
		},
	},
	maintainAspectRatio: false,
	responsive: true,
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	scales: {
		x: {
			stacked: true,
		},
		y: {
			stacked: true,
		},
	},
};
export default function BarChart({
	chartData,
	header,
	infoBar,
	footer,
}: {
	chartData: Object;
	header: React.ReactNode;
	infoBar: React.ReactNode;
	footer: React.ReactNode;
}) {
	const data = {
		labels: Object.keys(chartData),
		datasets: [
			{
				data: Object.values(chartData),
				backgroundColor: theme.palette.primary.main,
				fill: false,
				borderColor: theme.palette.primary.main + '50',
				borderRadius: 10,
				borderWidth: 0.1,
				barThickness: 12,
			},
		],
	};

	return (
		<Box sx={{ height: '100%' }}>
			<Card sx={{ p: '12px 8px', height: '100%' }}>
				<CardHeader title={<>{header}</>}></CardHeader>
				<Divider sx={{mb:'20px'}}/>
				<CardContent
					sx={{
						display: 'flex',
						height: '100%',
                        mt:'20px'
					}}>
					<Box
						sx={{
							height: '100%',
							width: '100%',
							backgroundPosition: 'center',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							mt: '-8%',
						}}>
						<Container
							sx={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
							}}>
							<Item xs={4} lg={4} xl={4}>
								{infoBar}
							</Item>
							<Item xs={8} lg={8} xl={8} sx={{ ml: '-20px', height: '200px' }}>
								<Bar options={options} data={data} />
							</Item>
							{footer}
						</Container>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}
