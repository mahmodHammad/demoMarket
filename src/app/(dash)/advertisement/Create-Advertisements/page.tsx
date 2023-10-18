'use client';

import React, { useEffect } from 'react';
import { Button, Container, Item, Text } from '@/wrappers';
import TextInputController from '@/component/forms/controlled/TextInputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';
import DateTimePickerController from '@/component/forms/controlled/DateTimePickerController';
import DragDropController from '@/component/forms/controlled/DragAndDropController';
import { createEditAdvertisement, getAdvertisementByID } from '../advertisement-service';
import { globalToast } from '@/utils/toast';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { keys } from '@/utils/keys';

const schema = yup.object().shape({
	title_en: yup.string().required('Title is required'),
	description_en: yup.string().required('Description is required'),
	image: yup.array(),
	start_at: yup.date().required('End Date & Time required'),
	end_at: yup.date().required('Start Date & Time required'),
});

export default function CreateAdvertisement() {
	const { push } = useRouter();
	const searchParams = useSearchParams();

	const ID = searchParams.get('id');
	const { data } = useQuery({
		queryKey: [keys.ADVERTISEMENTID],
		queryFn: () =>
			getAdvertisementByID(ID).then((response) => {
				return response;
			}),
		refetchInterval: false,
		retry: false,
		enabled: Number(ID) ? true : false,
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			title_en: data?.title_en || '',
			description_en: data?.description_en || '',
			image: [data?.image] || [],
			start_at: dayjs(data?.start_at, 'YYYY-MM-DD hh:mm:ss') || null,
			end_at: dayjs(data?.end_at, 'YYYY-MM-DD hh:mm:ss') || null,
		},
		resolver: yupResolver(schema),
	});
	const handleEdit = () => {
		if (ID && data) {
			reset({
				...data,
				image: [data?.image] || [],
				start_at: dayjs(data?.start_at, 'YYYY-MM-DD hh:mm:ss'),
				end_at: dayjs(data?.end_at, 'YYYY-MM-DD hh:mm:ss'),
			});
		}
	};

	useEffect(() => {
		handleEdit();
	}, [ID, data]);

	const onSubmit = (data: any) => {
		console.log(data);
		if (data?.image?.length) {
			let payload = {
				...data,
				title_ar: data?.title_en,
				description_ar: data?.description_en,
				start_at: dayjs(data?.start_at).format('YYYY-MM-DD hh:mm:ss'),
				end_at: dayjs(data?.end_at).format('YYYY-MM-DD hh:mm:ss'),
				image: data?.image[0],
				is_active: 1,
			};
			createEditAdvertisement(payload, ID ? 'PUT' : 'POST', ID)
				.then((response) => {
					globalToast(response?.message || 'Record Updated successfully.', 'success');
					push('/advertisement');
				})
				.catch((err) => {
					console.log(err);
					globalToast(err?.response?.data?.message || 'Please try later', 'error');
				});
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container column>
					<Text variant="h4" sx={{ padding: '35px 0px 40px 36px' }}>
						Create New Advertisements
					</Text>
					<Text variant="h5" sx={{ padding: '0px 0px 24px 36px' }}>
						General Information
					</Text>
					<Container row rowGap={'50px'} sx={{ padding: '0px 0px 0px 35px' }}>
						<Item xs={9}>
							<Container rowGap={'24px'} columnGap={'36px'}>
								<Item xs={5}>
									<TextInputController
										placeholder="Enter Advertisement Title"
										label={'Title'}
										name={'title_en'}
										control={control}
									/>
								</Item>
								<Item xs={10}>
									<TextInputController
										label={'Description'}
										multiline
										name={'description_en'}
										rows={4}
										placeholder="Write Description"
										control={control}
									/>
								</Item>
								<Item xs={4}>
									<Text variant="h5">Banner</Text>{' '}
								</Item>
								<Item xs={10}>
									<DragDropController name="image" control={control} errors={errors} />
								</Item>
								<Item xs={5}>
									<DateTimePickerController
										name="start_at"
										control={control}
										errors={errors}
										label="Start Date & Time"
										disablePast
									/>
								</Item>
								<Item xs={5}>
									<DateTimePickerController
										disablePast
										name="end_at"
										control={control}
										errors={errors}
										label="End Date & Time"
									/>
								</Item>
							</Container>
						</Item>
						<Item xs={12}>
							<Button type="submit" variant="contained">
								Save Changes
							</Button>
						</Item>
					</Container>
				</Container>
			</form>
		</>
	);
}
