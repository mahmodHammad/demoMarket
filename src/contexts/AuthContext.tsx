'use client';

import React, { useContext, useState } from 'react';

type AuthContextType = {
	isAuthed: boolean;
	isLoginModalOpen: boolean;
	openLoginModal: () => void;
	closeLoginModal: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within an AuthProvider');
	return context;
};

export const AuthProvider = ({ children }: any) => {
	const [isAuthed, setIsAuthed] = useState<boolean>(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

	const openLoginModal = () => setIsLoginModalOpen(true);
	const closeLoginModal = () => setIsLoginModalOpen(false);

	return (
		<AuthContext.Provider
			value={{
				isAuthed,
				isLoginModalOpen,
				openLoginModal,
				closeLoginModal,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
