import { http } from '@/utils/http';

export const verifyNumberReq = async (body: any, options: any = {}) => {
	try {
		const res = await http.post(`/login/send-verification`, body, options);
		return res;
	} catch (error: any) {
		return error.response;
	}
};

export const loginReq = async (body: any, options: any = {}) => {
	try {
		const res = await http.post(`/login`, body, options);
		return res;
	} catch (error: any) {
		return error.response;
	}
};

export const getUserInfoReg = async (options: any = {}) => {
	try {
		const res = await http.get(`/profile/me`, options);
		return res;
	} catch (error: any) {
		return error.response;
	}
};
