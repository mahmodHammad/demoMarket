import { http } from '@/utils/http';

export const getProperties = async (options: any = {}) => {
	try {
		const res = await http.get(`/properties`, options);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
	}
};

export const getFilters = async (options: any = {}) => {
	try {
		const res = await http.get(`/get-filters`, options);
		return res.data.data;
	} catch (error) {
		console.log('error in getFilters', error);
	}
};

export const toggleLike = async (body: any) => {
	try {
		return await http.post(`/favorites`, body);
	} catch (error: any) {
		return error.response;
	}
};