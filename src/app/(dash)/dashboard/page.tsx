import DoughnutChart from '@/component/charts/doughnutChart';
import MultiLineChart from '@/component/charts/multiLineChart';

const Dashboard = () => {
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
	const data2 = {
			'0_19': 23,
			'20_29': 1,
			'30_39': 1,
			'40_49': 2,
			'50_59': 30,
			'60_more': 10,		
	};
  const sum = Object.values(data2).reduce((a, b) => a + b, 0);
	return (
		<>
			jsjjs
			{/* <MultiLineChart chartData={data} /> */}
      {/* Calculate total based on data and pass it to chart. 
      chartData only consists of the object which has chart values. */}
			<DoughnutChart chartData={data2} total={sum} title="Total" />
		</>
	);
};

export default Dashboard;
