import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Card, CardContent, CardHeader } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Infometrics({ header, content }) {
	return (
		<>
			<Card sx={{ p: '12px 8px', height: '45%' }}>
				<CardHeader title={header}></CardHeader>
				<CardContent
					sx={{
						display: 'flex',
					}}>
					{content}
				</CardContent>
			</Card>
		</>
	);
}
