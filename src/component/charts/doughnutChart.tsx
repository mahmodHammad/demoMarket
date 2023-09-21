'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Card, CardContent } from '@mui/material';
import { Box, Container, Item } from '@/wrappers';

// import faker from "faker";

ChartJS.register(ArcElement, Tooltip, Legend);

const Colors = ['#002A37', '#2a5b6a', '#008EA5', '#CCE8ED', '#CC28EA', '#CC28EM'];

export default function DoughnutChart({
	chartData,
	title,
	total,
}: {
	chartData: object;
	title: string;
	total: number;
}) {
	const datavalues = [
		...Object.keys(chartData)?.map((key, index) => {
			return {
				name: key,
				value: Math.ceil((100 * chartData[key]) / total) || 0,
				color: Colors[index],
			};
		}),
	];
	const data = {
		labels: datavalues?.map((d) => d?.name),
		datasets: [
			{
				cutout: '88%',
				weight: 10,
				data: datavalues?.map((d) => d?.value),
				backgroundColor: datavalues?.map((d) => d?.color),
				cutoutPercentage: 2,
				borderRadius: 5,
				spacing: -9,
				offset: 0,
				borderJoinStyle: 'round',
				borderWidth: 0.01,
			},
		],
	};

	const options = {
		hover: false,
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
	};
	const sign = -1;
	const plugins = [
		{
			beforeDraw: function (chart) {
				var width = chart.width,
					height = chart.height,
					ctx = chart.ctx;
				ctx.restore();

				ctx.font = '700 36px Roboto';

				ctx.textBaseline = 'top';
				var text = total,
					textX = Math.round((width + sign * ctx.measureText(text).width) / 2),
					textY = height / 2;
				ctx.fillText(text, textX, textY - 26);
				ctx.font = '13px Roboto';
				var text2 = title,
					textX = Math.round((width + sign * ctx.measureText(text2).width) / 2);
				ctx.fillText(text2, textX, textY + 17);
				ctx.save();
			},
		},
	];
	return (
		<Box sx={{ height: '100%' }}>
			<Card sx={{ p: '12px 8px', height: '100%' }}>
				<Container
					sx={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
					}}>
					<Item xs={7} lg={6} xl={8} sx={{ ml: '-20px', height: '200px' }}>
						{total ? <Doughnut redraw={true} options={options} plugins={plugins} data={data} /> : null}
					</Item>
				</Container>
			</Card>
		</Box>
	);
}
