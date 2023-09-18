import React from 'react';
import ViewPayments from '@/component/cards/ViewPayments';
import { Box } from '@/wrappers';


export default function MyPayments() {
	return (
		<>
			<Box sx={{ pl: '32px' }}>
				<ViewPayments />
			</Box>
		</>
	);
}
