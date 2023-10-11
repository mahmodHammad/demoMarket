import { http } from '@/utils/http';

export const verifyNumberReq = async (body: any) => {
	try {
		return await http.post(`/login/send-verification`, body);
	} catch (error: any) {
		return error.response;
	}
};

export const loginReq = async (body: any) => {
	try {
		return await http.post(`/login`, body);
	} catch (error: any) {
		return error.response;
	}
};

export const getUserInfoReg = async () => {
	try {
		return await http.get(`/profile/me`);
	} catch (error: any) {
		return error.response;
	}
};

export const logoutReq = async () => {
	try {
		return await http.post(`/logout`);
	} catch (error: any) {
		return error.response;
	}
};
