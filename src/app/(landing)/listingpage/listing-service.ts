import { http } from '@/utils/http';

export const getProperties = async (options: any = {}) => {
	try {
		const res = await http.get(`/properties`, options);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
	}
};
