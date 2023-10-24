import { Box, Container, Text } from '@/wrappers';
import MultiLineChart from '../charts/multiLineChart';
import { xtenants } from '@/utils/xtenants';
import theme from '@/ThemeRegistry/theme';

export default function SalesTarget() {
	const data = {
		totalMoneyIn: '20301460.79',
		totalMoneyOut: '274703.00',
		MoneyInGraph: [
			{
				name: 'July',
				value: '918997.81',
			},
			{
				name: 'August',
				value: '19324971.47',
			},
			{
				name: 'September',
				value: '57491.51',
			},
			{
				name: 'October',
				value: 0,
			},
			{
				name: 'November',
				value: 0,
			},
			{
				name: 'December',
				value: 0,
			},
		],
		MoneyOutGraph: [
			{
				name: 'July',
				value: '234589.00',
			},
			{
				name: 'August',
				value: '35222.00',
			},
			{
				name: 'September',
				value: '4892.00',
			},
			{
				name: 'October',
				value: 0,
			},
			{
				name: 'November',
				value: 0,
			},
			{
				name: 'December',
				value: 0,
			},
		],
	};
	let flag = false;
	const labels = Object.keys(data)
		?.map((item: string) => {
			if (flag) return;
			let temp = [];
			if (Array.isArray(data[item])) {
				temp = data[item]?.map((ele) => {
					return ele.name;
				});
				if (temp?.length) {
					flag = true;
					return temp;
				}
			}
		})
		.filter(Boolean);

	let color = ['', '', xtenants.primaryPalette.main, '#FF8381'];
	const dataset = Object.keys(data)
		?.map((item: string, index) => {
			if (Array.isArray(data[item])) {
				return {
					label: '',
					data: data[item]?.map((ele) => {
						return ele.value;
					}),
					borderColor: color[index],
					backgroundColor: color[index],
				};
			}
		})
		.filter(Boolean);

	const header = (
		<Container alignItems="center" justifyContent="space-between">
			<Text variant="title" sx={{ mb: '12px', ml: '16px' }}>
				Sales And Target
			</Text>
		</Container>
	);

	const footer = (
		<Box row sx={{ mt: '24px' }}>
			<Box row>
				<Box row ycenter>
					<Box
						sx={{
							background: xtenants.primaryPalette.main,

							width: '18px',
							height: '8px',
							borderRadius: '8px',
							mr: '8px',
						}}></Box>
					<Box>
						<Text
							variant="caption"
							gray
							sx={{
								lineHeight: '10px',
							}}>
							Actual Sales
						</Text>
						<Text variant="title">SAR 25,000.00</Text>
					</Box>
				</Box>
				<Box row ycenter sx={{ ml: '32px' }}>
					<Box
						sx={{
							background: '#FF8484',
							width: '18px',
							height: '8px',
							borderRadius: '8px',
							mr: '8px',
						}}></Box>
					<Box>
						<Text
							variant="caption"
							gray
							sx={{
								lineHeight: '10px',
							}}>
							Target Sales
						</Text>
						<Text variant="title">SAR 25,000.00</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);

	return (
		<MultiLineChart
			dataset={dataset}
			labels={labels?.length ? labels[0] : []}
			chartData={data}
			header={header}
			footer={footer}
		/>
	);
}
