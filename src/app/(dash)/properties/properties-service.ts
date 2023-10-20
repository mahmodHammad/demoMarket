import { GET, POST } from '@/utils/http';

export const getAllProperties = (options: any = {}) => {
	return GET(`/dashboard/properties`, options);
};

export const getAllAvailableProperties = (options: any = {}) => {
	return GET(`/dashboard/properties/get-all-properties`, options);
};

export const addPropertyToMarketplace = (id: any = {}) => {
	return POST(`/dashboard/properties/add-to-market/${id}`);
};
