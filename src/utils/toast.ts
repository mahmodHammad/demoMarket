import { TypeOptions, toast } from 'react-toastify';

export const globalToast = (message: string, type: TypeOptions) => {
	toast(message, {
		hideProgressBar: true,
		autoClose: 2000,
		type: type,
		position: 'top-right',
	});
};
