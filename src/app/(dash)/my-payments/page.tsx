import React from 'react';
import { Box, Text } from '@/wrappers';
import PaymentsTable from '@/component/my-payments/PaymentsTable';

interface Props {}

export default function MyPayments() {
	return (
		<>
			<Box>
				<Text variant="h4" sx={{ padding: '35px 0px 24px 36px' }}>
					My Payments
				</Text>
				<PaymentsTable />
			</Box>
		</>
	);
}
