import axios from 'axios';

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

export const setTokenInHeaders = () => {
	const token = localStorage.getItem('token');
	if (token) http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	else delete http.defaults.headers.common['Authorization'];
};
