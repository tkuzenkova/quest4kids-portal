import { axiosInstance } from "./axiosInstance";

export const request = async (options: {
	method: string;
	url: string;
	data?: any;
}) => {
	try {
		const response = await axiosInstance(options);
		return response.data;
	} catch (error) {
		throw error;
	}
};
