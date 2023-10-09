'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Text from './Text';
import { Box } from './layouts';

const ProtectedPagesWrapper = ({ children }: { children: React.ReactNode }) => {
	const { openLoginModal } = useAuth();
	const pathname = usePathname();
	const { push } = useRouter();

	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		setToken(storedToken);
		if (!storedToken) {
			push('/');
			openLoginModal();
		}
	}, [pathname]);

	// TODO: implement loading
	if (!token)
		return (
			<Box fullWidth center sx={{ height: '100vh' }}>
				<Text>Loading...</Text>
			</Box>
		);

	return <>{children}</>;
};

export default ProtectedPagesWrapper;
