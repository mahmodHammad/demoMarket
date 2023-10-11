import { GETJSON, POSTJSON, PUTJSON } from '@/utils/http';

export const getMyBookings = async (options: any = {}) => {
	return GETJSON(`/bookings`, options);
};

export const getMyBooking = async (id: any = null) => {
	return GETJSON(`/bookings/${id}`);
};

export const editBooking = async (id: any = null, payload: any = {}) => {
	return PUTJSON(`/bookings/${id}`, payload);
};

export const cancelBooking = async (id: any = null) => {
	return PUTJSON(`/bookings/cancel/${id}`);
};

export const createBooking = async (payload: any = {}) => {
	return POSTJSON(`/bookings`, payload);
};
