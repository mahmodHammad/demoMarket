
import { Divider } from '@mui/material';
import { Box, Container, Text } from '@/wrappers';

import Infometrics from '../charts/Infometrics';


export default function DisplayNumbers() {
	const data = [
		{
			title: 'Days On Market',
			subTitle: 'Average Days on Market',
			content: '88 day(s)',
		},
		{
			title: 'Visits',
			subTitle: 'Avg . No . of Visits',
			content: '4959',
		},
	];

	return (
		<>
			<Container flexDirection={'column'} justifyContent="space-between" sx={{ height: '100%' }}>
				{data?.map((item) => {
					return (
						<Infometrics
							header={
								<>
									<Container alignItems="center" justifyContent="space-between">
										<Box>
											<Text s={14}>{item?.title}</Text>
											<Text
												s={12}
												sx={{
													color: '#525451',
													fontWeight: 400,
												}}>
												{item?.subTitle}
											</Text>
										</Box>
									</Container>
									<Divider sx={{ mt: '5px' }} />
								</>
							}
							content={
								<Box
									sx={{
										height: '100%',
										width: '100%',
										// mt: "-8%",
									}}>
									<Text s={16}>{item?.content}</Text>
								</Box>
							}
						/>
					);
				})}
			</Container>
		</>
	);
}
