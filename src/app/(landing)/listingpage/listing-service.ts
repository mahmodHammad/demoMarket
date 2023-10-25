import { GET, http } from '@/utils/http';

export const getProperties = async (options: any = {}) => {
	try {
		const res = await http.get(`/properties`, options);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
	}
};

export const getFilters = async () => {
	try {
		const res = await http.get(`/get-filters`, { timeout: 5000 });
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

export const getFav = async (body: any) => {
	try {
		return await GET(`/favorites`);
	} catch (error: any) {
		return error.response;
	}
};

