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
