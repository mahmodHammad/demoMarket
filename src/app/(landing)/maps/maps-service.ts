import { GET, DELETE, PUT, http, handleError } from '@/utils/http';

export const getNerabyPlaces = (options: any = {}) => {
	return GET(`/properties/nearby`, options);
};