'use client';

import React, { useContext, useEffect, useState } from 'react';
import { loginReq, verifyNumberReq, getUserInfoReg, logoutReq } from '@/utils/httpServices/auth';
import { setTokenInHeaders } from '@/utils/http';

type AuthContextType = {
	isAuthed: boolean;
	isLoginModalOpen: boolean;
	openLoginModal: () => void;
	closeLoginModal: () => void;
	token: string | null;
	user: any;
	login: (phoneNumber: any, code: string, vid: string | null) => any;
	logout: () => void;
	verifyNumber: (phoneNumber: any) => any;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within an AuthProvider');
	return context;
};

export const AuthProvider = ({ children }: any) => {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<any>(null);

	const [isAuthed, setIsAuthed] = useState<boolean>(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		const storedUser = localStorage.getItem('user');
		if (storedToken) {
			setToken(storedToken);
			setTokenInHeaders();
			setIsAuthed(true);
			// TODO: check expire time
			// TODO: refresh token api
		}
		if (storedUser) setUser(JSON.parse(storedUser));
	}, []);

	const verifyNumber = async (phoneNumber: any) => {
		const body = {
			phone_number: phoneNumber.phone_number,
			phone_country_code: phoneNumber.phone_country_code.id,
			// TODO: integrate privacy and recaptcha_token
			// privacy_policy_accept :true,
			// recaptcha_token :""
		};
		return await verifyNumberReq(body);
	};

	const login = async (phoneNumber: any, code: string, vid: string | null) => {
		const body = {
			phone_number: phoneNumber.phone_number,
			phone_country_code: phoneNumber.phone_country_code.id,
			code,
			vid,
		};

		const res = await loginReq(body);
		localStorage.setItem('token', res.data.data.access_token);
		setToken(res.data.data.access_token);

		setIsAuthed(true);
		setTokenInHeaders();
		getUserInfo();

		return res;
	};

	const getUserInfo = async () => {
		const res = await getUserInfoReg();
		setUser(res.data.data);
		localStorage.setItem('user', JSON.stringify(res.data.data));
	};

	const logout = () => {
		setIsAuthed(false);
		setToken(null);
		setUser(null);
		localStorage.clear();
		logoutReq();
	};

	const openLoginModal = () => setIsLoginModalOpen(true);
	const closeLoginModal = () => setIsLoginModalOpen(false);

	return (
		<AuthContext.Provider
			value={{
				isAuthed,
				isLoginModalOpen,
				openLoginModal,
				closeLoginModal,
				token,
				user,
				login,
				logout,
				verifyNumber,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
