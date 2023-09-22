import { Box, Container, Text } from '@/wrappers';
import BarChart from '../charts/barChart';

export default function SalesByAgent() {
	const data = {
		shreyas: 736,
		ahmed: 60,
		RK: 69,
		bawazir: 65,
		hammad: 48,
		waad: 494,
	};

	const infoBar = (
		<Box row ycenter>
			<Box
				sx={{
					background: '#008EA5',
					width: '18px',
					height: '8px',
					borderRadius: '8px',
					mr: '8px',
				}}></Box>
			<Box row alignItems={'center'}>
				<Text
					sx={{
						fontWeight: 400,
						lineHeight: '10px',
						color: '#525451',
					}}>
					Paid 
				</Text>
				<Text>&nbsp; SAR 25,000.00</Text>
			</Box>
		</Box>
	);

	const header = (
		<Container alignItems="center" justifyContent="space-between">
			<Box>
				<Text s={14}>Sales by Agent</Text>
				<Text
					s={12}
					sx={{
						color: '#525451',
						fontWeight: 400,
					}}>
					All Users
				</Text>
			</Box>
		</Container>
	);

	return <BarChart infoBar={infoBar} chartData={data} header={header} />;
}
