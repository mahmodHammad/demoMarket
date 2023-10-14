import { GET, POST, PUT } from '@/utils/http';

export const getMyBookings = (options: any = {}) => {
	return GET(`/bookings`, options);
};

export const getMyBooking = (id: any = null) => {
	return GET(`/bookings/${id}`);
};

export const editBooking = (id: any = null, payload: any = {}) => {
	return PUT(`/bookings/${id}`, payload);
};

export const cancelBooking = (id: any = null) => {
	return PUT(`/bookings/cancel/${id}`);
};

export const createBooking = (payload: any = {}) => {
	return POST(`/bookings`, payload);
};
