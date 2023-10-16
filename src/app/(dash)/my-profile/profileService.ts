import { POST } from '@/utils/http';

export const editProfile = (payload: any = {}) => {
	return POST(`/profile/edit-profile`, payload);
};
