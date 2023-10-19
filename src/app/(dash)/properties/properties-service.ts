import { GET } from '@/utils/http';

export const getAllProperties = (options: any = {}) => {
	return GET(`/dashboard/properties`, options);
};
