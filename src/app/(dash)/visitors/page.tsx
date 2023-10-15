import React, { useEffect, useState } from 'react';
import { Box, Text } from '@/wrappers';
import { AdminVisitors, Table } from '@/component';
import TYPES from '@/component/table/dataTypes';
import { get } from '@/utils/http';

export default async function AdminBookings({ children }: { children: React.ReactNode }) {
	const url = '/dashboard/visitors';
	const response = await get(url);
	const dataArray = response?.data?.list; // Get the array of objects

	const slicedDataArray = dataArray;

	const data = slicedDataArray?.map((item) => {
		return {
			id: item?.id,
			name: item?.name || '--',
			phoneNumber: item?.phone_number || '--',
			RegisterTime: item?.registration_time || '--',
			Progress: item?.interested || '--',
		};
	});

	return (
		<>
			<Box>
				<Text variant="h4" mb="24px">
					Visitors
				</Text>
				{/* {children} */}

				<AdminVisitors data={data} />
			</Box>
		</>
	);
}
