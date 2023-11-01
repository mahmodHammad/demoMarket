import axios from 'axios';
import xtenant from './xtenant';
const baseUrl = 'https://marketplace.goatar.com/api';

type Options = {
	onSuccess?: (data: any) => void;
	onError?: (error: Error) => void;
};

const xTenant = 'roshn';
export const get = async (url: string, options: Options = {}) => {
	// const xTenant = process.env.X_TENANT
	try {
		const requestOptions: any = {
			headers: {
				'X-Tenant': xTenant,
			},
		};
		let res = await fetch(`${baseUrl}${url}`, requestOptions);
		res = await res.json();
		options.onSuccess && options.onSuccess(res); // pass res.data or res
		return res; // return res or res.data
	} catch (error) {
		// TODO: error logger or alternative
		// * logs will be on terminal if it's used inside a server component, and on console otherwise
		console.log('err from get fun', error);
	}
};

export const post = async (url: string, payload: {}) => {
	try {
		const requestOptions = {
			'Access-Control-Allow-Origin': '*',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-Tenant': xTenant,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			},
			'X-Tenant': xTenant,
			body: JSON.stringify(payload),
		};
		const response = await fetch(`${baseUrl}${url}`, requestOptions);
		if (response.status === 404) {
			throw new Error('Api not found');
		} else if (response.status === 500) {
			throw new Error('Server error');
		} else if (!response.ok) {
			const data = await response.json();
			throw new Error(`${data?.message}`);
		}
		const data = await response.json();
		return Promise.resolve(data);
	} catch (error) {
		// TODO: error logger or alternative
		// * logs will be on terminal if it's used inside a server component, and on console otherwise
		console.log('err from post fun', error);
		return Promise.reject(error);
	}
};

// TODO: get base and xTenant from env
export const http = axios.create({
	baseURL: baseUrl,
	timeout: 10000,
});

http.interceptors.request.use(
	(config) => {
		config.headers['X-Tenant'] = xTenant;
		config.headers['Access-Control-Allow-Origin'] = '*';
		config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

http.interceptors.response.use(
	(response) => response,
	(error) => {
		if (+error?.response?.status === 401 || +error?.response?.data?.code === 401) {
			window.dispatchEvent(new Event('logout'));
			window.location.href = `${window.location.origin}/401`;
		}
		Promise.reject(error);
	},
);

export const PUT = async (URI: string, payload?: any) => {
	try {
		const res = await http.put(URI, payload);
		return res.data.data;
	} catch (error) {
		return handleError(error);
	}
};

export const POST = async (URI: string, payload?: any) => {
	try {
		const res = await http.post(URI, payload);
		return res.data.data;
	} catch (error) {
		return handleError(error);
	}
};

export const GET = async (URI: string, payload?: any) => {
	try {
		const res = await http.get(URI, { params: payload });
		return res.data.data;
	} catch (error) {
		return handleError(error);
	}
};

export const DELETE = async (URI: string, payload?: any) => {
	try {
		const res = await http.delete(URI, { params: payload });
		return res.data;
	} catch (error) {
		return handleError(error);
	}
};

export const handleError = (error: any) => {
	console.log('error in GET', error);
	return Promise.reject(error);
};

export const setTokenInHeaders = () => {
	const token = localStorage.getItem('token');
	if (token) http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	else delete http.defaults.headers.common['Authorization'];
};
