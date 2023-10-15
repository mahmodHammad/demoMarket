import { GET, POST, PUT } from '@/utils/http';

export const getMyBookings = (options: any = {}) => {
	return GET(`/dashboard/bookings`, options);
};

export const getBookingSettings = () => {
	return GET(`/dashboard/bookings/settings/show`);
};

export const changeStatusBooking = (id: any = null, payload: any = {}) => {
	return PUT(`/dashboard/bookings/change-status/${id}`, payload);
};

export const bookingSettings = (payload: any = {}) => {
	return POST(`/dashboard/bookings/settings/create-or-update`, payload);
};
