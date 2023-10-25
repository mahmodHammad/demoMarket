import { GET } from '@/utils/http';

export const getNerabyPlaces = (options: any = {}) => {
	return GET(`/properties/nearby`, options);
};
