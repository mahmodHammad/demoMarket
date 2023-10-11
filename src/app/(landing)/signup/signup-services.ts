import { POSTJSON } from '@/utils/http';

export const sendVerificationSignup = async (payload: any = {}) => {
	return POSTJSON(`/register/send-verification`, payload);
};

export const register = async (payload: any = {}) => {
	return POSTJSON(`/register`, payload);
};
