import { http } from '@/utils/http';

export const getMyBookings = async (options: any = {}) => {
	try {
		const res = await http.get(`/bookings`, options);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};

export const getMyBooking = async (id: any = null) => {
	try {
		const res = await http.get(`/bookings/${id}`);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};

export const editBooking = async (id: any = null, payload: any = {}) => {
	try {
		const res = await http.put(`/bookings/${id}`, payload);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};

export const cancelBooking = async (id: any = null) => {
	try {
		const res = await http.delete(`/bookings/${id}`);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};

export const createBooking = async (payload: any = {}) => {
	try {
		const res = await http.post(`/bookings`, payload);
		console.log(res);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
		return Promise.reject(error);
	}
};
