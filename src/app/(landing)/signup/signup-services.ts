import { http } from '@/utils/http';


export const sendVerificationSignup = async (payload: any = {}) => {
	try {
		const res = await http.post(`/register/send-verification`, payload);
		return res?.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};

export const register = async (payload: any = {}) => {
	try {
		const res = await http.post(`/register`, payload);
		return res?.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};
