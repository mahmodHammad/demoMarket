import { Box, Text } from '@/wrappers';
import { get } from '@/utils/http';
import AddButton from './AddButton';
import { useEffect, useState } from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default async function ApiPlayground() {
	//* server side fetching, => make the component async
	const data: any = await get('/todos/1', {
		onSuccess: (data) => console.log('data from on success', data),
		onError: (error) => console.log('error from on error', error),
	});

	//* client side fetching, => use react hooks with 'use client'

	// const [data, setData] = useState();

	// useEffect(() => {
	// 	const getData = async () => {
	// 		try {
	// 			let res: any = await fetch(`${baseUrl}${'/todos/1'}`);
	// 			res = await res.json();
	// 			console.log('res', res);
	// 			setData(res);
	// 		} catch (error) {
	// 			console.log('err from get data', error);
	// 		}
	// 	};
	// 	getData();
	// }, []);

	return (
		<Box sx={{ height: 1000, p: 5 }} column gap={5}>
			<Text>{data?.title}</Text>
			<AddButton />
		</Box>
	);
}
