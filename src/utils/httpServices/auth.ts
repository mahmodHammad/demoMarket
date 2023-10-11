import { http } from '@/utils/http';

export const verifyNumberReq = async (body: any, options: any = {}) => {
	try {
		return await http.post(`/login/send-verification`, body, options);
	} catch (error: any) {
		return error.response;
	}
};

export const loginReq = async (body: any, options: any = {}) => {
	try {
		return await http.post(`/login`, body, options);
	} catch (error: any) {
		return error.response;
	}
};

export const getUserInfoReg = async (options: any = {}) => {
	try {
		return await http.get(`/profile/me`, options);
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
