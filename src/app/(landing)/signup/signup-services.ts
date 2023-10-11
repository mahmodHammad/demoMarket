import { POST } from '@/utils/http';

export const sendVerificationSignup = (payload: any = {}) => {
	return POST(`/register/send-verification`, payload);
};

export const register = (payload: any = {}) => {
	return POST(`/register`, payload);
};
