'use client';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import { Box, Container, Text } from '@/wrappers';
import { useForm } from 'react-hook-form';
import { SimpleSelectController } from '@/component';

export default function SelectDate() {
	const options = [
		{ item: 'Today', value: 'Today' },
		{ item: 'Yesterday', value: 'Yesterday' },
		{ item: 'Last 7 Days', value: 'Last 7 Days' },
		{ item: 'Last 14 Days', value: 'Last 14 Days' },
		{ item: 'Last 30 Days', value: 'Last 30 Days' },
		{ item: 'Last 60 Days', value: 'Last 60 Days' },
		{ item: 'Last 90 Days', value: 'Last 90 Days' },
		{ item: 'This Year (Jan - Today)', value: 'This Year (Jan - Today)' },
		{ item: 'All Time', value: 'All Time' },
	];
	const {
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			date: 'Today',
		},
	});
	return (
		<Card sx={{ p: '12px 8px 0', height: '100%' }}>
			<CardHeader
				title={
					<>
						<Container alignItems="center" justifyContent="space-between">
							<Box>
								<Text variant="title">Select Dashboard Time Period</Text>
								<Text
									variant="caption"
									gray
									sx={{
										mb: '16px',
									}}>
									Select a time period from the list below to view relevant data
								</Text>
							</Box>
							<Divider
								sx={{
									width: '100%',
								}}
							/>
							<Box sx={{ width: '100%', mb: '26px', mt: '20px' }}>
								<SimpleSelectController
									placeholder={`Select Time Period`}
									sx={{ width: '100%' }}
									name="date"
									rules={{ required: true }}
									control={control}
									items={options}
								/>
							</Box>
						</Container>
					</>
				}></CardHeader>
			<CardContent sx={{}}></CardContent>
		</Card>
	);
}
