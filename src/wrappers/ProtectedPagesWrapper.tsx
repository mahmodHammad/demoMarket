'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Loading from './Loading';

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

	if (!token) return <Loading />;

	return <>{children}</>;
};

export default ProtectedPagesWrapper;
