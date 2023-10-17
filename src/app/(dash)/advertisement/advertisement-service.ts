import { GET, DELETE, PUT, http, handleError } from '@/utils/http';

export const getAdvertisements = (options: any = {}) => {
	return GET(`/dashboard/advertisements`, options);
};

export const getAdvertisementByID = (id: any = null) => {
	return GET(`/dashboard/advertisements/${id}`);
};

export const deleteAdvertisement = (id: any = null, payload: any = {}) => {
	return DELETE(`/dashboard/advertisements/${id}`, payload);
};

export const createEditAdvertisement = async (payload: any = {}, type: string, id: any = null) => {
	const formData = new FormData();
	if (type === 'PUT') {
		formData.append('_method', 'PUT');
		if (typeof payload.image === 'string') delete payload?.image;
	}
	let keys = Object.keys(payload);
	for (var i = 0; i < keys.length; i++) {
		formData.append(keys[i], payload[keys[i]]);
	}
	let headers = {
		'content-type': 'multipart/form-data',
		'Access-Control-Allow-Origin': '*',
	};
	try {
		const response = await http.post(
			`${type === 'PUT' ? '/dashboard/advertisements/' + id : '/dashboard/advertisements'}`,
			formData,
			{
				headers,
			},
		);
		return response.data;
	} catch (error) {
		return handleError(error);
	}
};
