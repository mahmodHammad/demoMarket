import React from 'react';
import ViewPayments from '@/component/cards/ViewPayments';
import { Box } from '@/wrappers';


export default function PaymentDetails() {
	return (
		<>
			<Box sx={{ pl: '32px' }}>
				<ViewPayments />
			</Box>
		</>
	);
}
