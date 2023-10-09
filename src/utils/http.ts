import axios from 'axios';

type Options = {
	onSuccess?: (data: any) => void;

	onError?: (error: Error) => void;
};

export const get = async (url: string, options: Options = {}) => {
	const baseUrl = process.env.BASE_URL;

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

export const post = async (url: string, payload: {}) => {
	const baseUrl = process.env.BASE_URL;

	try {
		const requestOptions = {
			'Access-Control-Allow-Origin': '*',

			method: 'POST',

			headers: {
				'Content-Type': 'application/json',

				Accept: 'application/json',

				'X-Tenant': 'testDemoOne',

				'Access-Control-Allow-Origin': '*',

				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			},

			'X-Tenant': 'testDemoOne',

			body: JSON.stringify(payload),
		};

		const response = await fetch(`http://193.122.88.9/api${url}`, requestOptions);

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
