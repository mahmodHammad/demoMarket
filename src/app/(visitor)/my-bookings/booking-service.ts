import { http } from '@/utils/http';

export const getMyBookings = async (options: any = {}) => {
	try {
		const res = await http.get(`/bookings`, options);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
	}
};

export const getMyBooking = async (id: any = null) => {
	try {
		const res = await http.get(`/bookings/${id}`);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
	}
};

export const editBooking = async (id: any = null, payload: any = {}) => {
	debugger;
	try {
		const res = await http.put(`/bookings/${id}`,payload);
		return res.data.data;
	} catch (error) {
		console.log('error in getProperties', error);
	}
};
