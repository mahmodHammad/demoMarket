import { GET } from "@/utils/http";

export const getAllProperties = () => {
	return GET(`/dashboard/properties`);
};