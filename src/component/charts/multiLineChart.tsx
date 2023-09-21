'use client';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardContent } from '@mui/material';
import { Box } from '@/wrappers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
			position: 'bottom' as const,
		},
	},
};

export default function MultiLineChart({ chartData }: { chartData: object }) {
	// Get the labels from the data.
	// We only need to iterate on the first element for labels as both datasets will have same labels.
	let flag = false;
	const labels = Object.keys(chartData)
		?.map((item: string) => {
			if (flag) return;
			let temp = [];
			if (Array.isArray(chartData[item])) {
				temp = chartData[item]?.map((ele) => {
					return ele.name;
				});
				if (temp?.length) {
					flag = true;
					return temp;
				}
			}
		})
		.filter(Boolean);
	let color = ['#FF8484', '#FF8383', '#FF1182', '#FF8381'];
	const data = {
		labels: labels[0],
		datasets: Object.keys(chartData)?.map((item: string, index) => {
			if (Array.isArray(chartData[item])) {
				return {
					label: '',
					data: chartData[item]?.map((ele) => {
						return ele.value;
					}),
					borderColor: color[index],
					backgroundColor: color[index],
				};
			}
		}),
	};
	return (
		<Card sx={{ p: '12px 8px' }}>
			<CardContent
				sx={{
					display: 'flex',
				}}>
				<Box
					sx={{
						width: '100%',
						backgroundPosition: 'center',
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
					}}>
					<Box sx={{ height: '250px' }}>
						<Line options={options} data={data} />
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
