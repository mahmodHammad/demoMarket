import { Box, Container, Text } from '@/wrappers';
import BarChart from '../charts/barChart';
import theme from '@/ThemeRegistry/theme';
import xtenant from '@/utils/xtenant';

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
					background: xtenant.primaryPalette.main,
					width: '18px',
					height: '8px',
					borderRadius: '8px',
					mr: '8px',
				}}></Box>
			<Box row alignItems={'center'}>
				<Text gray variant="caption">
					Paid
				</Text>
				<Text variant='h5'>&nbsp; SAR 25,000.00</Text>
			</Box>
		</Box>
	);

	const header = (
		<Container alignItems="center" justifyContent="space-between">
			<Box>
				<Text variant="title">Sales by Agent</Text>
				<Text variant="caption" gray>
					All Users
				</Text>
			</Box>
		</Container>
	);

	return <BarChart infoBar={infoBar} chartData={data} header={header} />;
}
