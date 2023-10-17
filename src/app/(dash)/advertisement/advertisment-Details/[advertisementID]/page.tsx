'use client';

import { Delete, Plus } from '@/assets';
import Pencilline from '@/assets/icons/Pencilline';
import { Box, Button, Text } from '@/wrappers';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';
import { deleteAdvertisement, getAdvertisementByID } from '../../advertisement-service';
import ConfirmAction from '@/component/modals/ConfirmAction';
import { globalToast } from '@/utils/toast';
import { useRouter } from 'next/navigation';

const AdvertismentDetails = () => {
	const params = useParams();
	const { data, isLoading, refetch } = useQuery({
		queryKey: [keys.ADVERTISEMENTID],
		queryFn: () => getAdvertisementByID(params?.advertisementID),
		refetchInterval: false,
		retry: false,
	});
	const [isOpen, setIsOpen] = useState(false);
	const { push } = useRouter();

	const deleteAdd = async () => {
		await deleteAdvertisement(params?.advertisementID)
			.then((response) => {
				globalToast('Advertisement Deleted Successful', 'success');
				setIsOpen(false);
				push('/advertisement');
			})
			.catch((err) => {
				globalToast('Please try later', 'error');
			});
	};
	return (
		<Box column width={'100%'}>
			<Box center width={'100%'} xbetween row>
				<Text variant="h4"> {data?.title_en}</Text>

				<Box>
					{' '}
					<Button
						sx={{ mr: '20px' }}
						variant="dangerOutlined"
						onClick={() => setIsOpen(true)}
						startIcon={<Delete sx={{ fill: 'red', color: 'red', strock: 'red' }} />}>
						Delete Announcement
					</Button>
					<Button
						variant="outlined"
						component={Link}
						href={{
							pathname: '/advertisement/Create-Advertisements',
							query: { id: params?.advertisementID },
						}}
						startIcon={<Pencilline />}>
						Edit
					</Button>
				</Box>
			</Box>

			<Box sx={{ width: '80%', mt: '42px' }}>
				<Box
					sx={{
						boxShadow: '0px 6px 12px 0px #1C27310D',
						width: '100%',
						borderRadius: '16px',
					}}>
					<div
						style={{
							width: '100%',
							height: '200px',
							borderRadius: '16px 16px 0 0',
							position: 'relative',
						}}>
						{data?.img && (
							<Image
								style={{
									objectFit: 'cover',
									position: 'absolute',
									borderRadius: '16px 16px 0 0',
								}}
								layout="fill"
								alt={'ssss'}
								src={data?.image}
							/>
						)}
					</div>
					<Box column sx={{ p: ' 16px' }}>
						<Box xstart>
							<Text variant="h4">Description </Text>
						</Box>

						<Box row ycenter mt={'22px'}>
							<Box column xstart>
								<Text variant="Text">{data?.description_en}</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<ConfirmAction
				handleClose={() => setIsOpen(false)}
				title={'Delete Advertisement.'}
				body={'Are you sure you want to delete this Advertisement.'}
				isOpen={isOpen}
				isPrimary={false}
				confirmFunc={deleteAdd}
			/>
		</Box>
	);
};

export default AdvertismentDetails;
