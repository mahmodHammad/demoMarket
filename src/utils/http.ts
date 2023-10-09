import axios from 'axios';

const baseUrl = process.env.BASE_URL;

type Options = {
	onSuccess?: (data: any) => void;
	onError?: (error: Error) => void;
};

export const get = async (url: string, options: Options = {}) => {
	try {
		let res = await fetch(`${baseUrl}${url}`);
		res = await res.json();
		options.onSuccess && options.onSuccess(res); // pass res.data or res
		return res; // return res or res.data

	} catch (error) {
		// TODO: error logger or alternative
    // * logs will be on terminal if it's used inside a server component, and on console otherwise
		console.log('err from get fun', error);
	}
};

// TODO: get base and xTenant from env
export const http = axios.create({
	baseURL: 'http://193.122.88.9/api',
	timeout: 5000,
});

http.interceptors.request.use(
	(config) => {
		config.headers['X-Tenant'] = 'testDemoOne';
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);
