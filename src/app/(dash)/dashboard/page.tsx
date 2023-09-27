import DisplayNumbers from '@/component/dashboard/DisplayNumbers';
import PropertiesActivity from '@/component/dashboard/PropertiesActivity';
import SalesByAgent from '@/component/dashboard/SalesByAgent';
import SalesTarget from '@/component/dashboard/SalesTarget';
import SelectDate from '@/component/dashboard/SelectDate';
import UserDemographics from '@/component/dashboard/UserDemographics';
import { Item, Text } from '@/wrappers';
import { Grid } from '@mui/material';

const Dashboard = () => {
	return (
		<>
			<Text variant="h4" sx={{padding:'35px 0px 26px 35px'}}>Dashboard</Text>
			<Grid container spacing={'48px'} padding={'0px 35px 0px 35px'} maxWidth={'1600px'}>
				<Item xs={4}>
					<SelectDate />
				</Item>
				<Item xs={8}>
					<SalesTarget />
				</Item>
				<Item xs={4}>
					<PropertiesActivity />
				</Item>
				<Item xs={4}>
					<UserDemographics />
				</Item>
				<Item xs={4}>
					<DisplayNumbers />
				</Item>
				<Item xs={8}>
					<SalesByAgent />
				</Item>
			</Grid>
		</>
	);
};

export default Dashboard;
