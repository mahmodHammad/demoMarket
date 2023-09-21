import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent } from '@mui/material';
import { Box } from '@/Shared/layout';

import { useTranslation } from 'react-i18next';

import { useQuery } from '@tanstack/react-query';
import { mngmtHttp } from '@/Utils/Http/Http';
import { useNavigate } from 'react-router-dom';
import Brands from '@/Constants/Brands';
import { useBrandContext } from '@/Contexts/BrandProvider';
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
export default function App({ selectedPeriod }) {
	const { t } = useTranslation();

	const lables = [
		t('accounting.today'),
		`1-30 ${t('common.day')}`,
		`31-60 ${t('common.day')}`,
		`60-90 ${t('common.day')}`,
		`91-120 ${t('common.day')}`,
		`+121 ${t('common.day')}`,
	];
	const { data: chartData } = useQuery(['LEASECHART'], () =>
		mngmtHttp.get(`/reports/performance/leases`).then((response) => response?.data?.data),
	);
	const lablesdata = [
		chartData?.['0'],
		chartData?.['1_30'],
		chartData?.['31_60'],
		chartData?.['61_90'],
		chartData?.['91_120'],
		chartData?.['121'],
	];
	const sum = lablesdata.reduce((a, b) => +a + +b);

	const data = {
		labels: lables,
		datasets: [
			{
				data: lablesdata,
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
				<CardContent
					sx={{
						display: 'flex',
						height: '300px',
					}}>
					<Box
						sx={{
							// background: "#fef",
							height: '100%',
							width: '100%',
							// backgroundImage: `url( ${financialChart})`,
							backgroundPosition: 'center',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							mt: '-7%',
						}}>
						<Bar options={options} data={data} />
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}
