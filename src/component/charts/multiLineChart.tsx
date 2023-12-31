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
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import { Box } from '@/wrappers';
import { MultilineDataset } from '@/utils/interfaces';

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

interface Props {
	labels?: Array<string>;
	dataset?: [MultilineDataset];
	header?: React.ReactNode;
	footer?: React.ReactNode;
}

export default function MultiLineChart({ labels, dataset, header, footer }: Props) {
	const data = {
		labels: labels,
		datasets: dataset,
	};
	return (
		<Card sx={{ p: '12px 8px', boxShadow:'0px 17px 33px -2px rgba(28, 39, 49, 0.05)' }}>
			<CardHeader
				sx={{ px: '0' }}
				title={
					<>
						{header}
						<Divider />
					</>
				}></CardHeader>
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
					{footer}
				</Box>
			</CardContent>
		</Card>
	);
}

/// Commented reusable Code for now. Will be deleted after merge.
// let flag = false;
// 	const labels = Object.keys(chartData)
// 		?.map((item: string) => {
// 			if (flag) return;
// 			let temp = [];
// 			if (Array.isArray(chartData[item])) {
// 				temp = chartData[item]?.map((ele) => {
// 					return ele.name;
// 				});
// 				if (temp?.length) {
// 					flag = true;
// 					return temp;
// 				}
// 			}
// 		})
// 		.filter(Boolean);
// 	let color = ['#FF8484', '#FF8383', '#008EA5', '#FF8381'];
// 	const data = {
// 		labels: labels[0] || [],
// 		datasets: Object.keys(chartData)?.map((item: string, index) => {
// 			if (Array.isArray(chartData[item])) {
// 				return {
// 					label: '',
// 					data: chartData[item]?.map((ele) => {
// 						return ele.value;
// 					}),
// 					borderColor: color[index],
// 					backgroundColor: color[index],
// 				};
// 			}
// 		}),
// 	};
