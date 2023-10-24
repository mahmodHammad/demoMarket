'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Box, Button, Text } from '@/wrappers';
import Link from 'next/link';

export default function page() {
	const { openLoginModal } = useAuth();
	return (
		<Box center column sx={{ minHeight: '80vh' }}>
			<Text variant="h4">Session Expired</Text>
			<Text variant="body1" align="center" sx={{ mt: '15px' }}>
				Please login again
			</Text>
			<Button
				sx={{
					mt: { md: '40px', xs: '16px' },
					width: 250,
				}}
				component={Link}
				href="/"
				onClick={() => setTimeout(openLoginModal, 750)}
				variant="contained">
				Back To Login Page
			</Button>
		</Box>
	);
}
