'use client';

import React, { useState } from 'react';
import { Box, Container, Item, Text } from '@/wrappers';
import TextInputController from '@/component/forms/controlled/TextInputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CheckboxController, PhoneInputController, RadioGroup, SwitchController } from '@/component';

const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	NationalID: yup.string().required('National ID is required'),
	email: yup.string().required('Email is required'),
	enable: yup.boolean(),
	notify: yup.boolean(),
	total: yup.number().required('Total required'),
	range: yup.number(),
	rate: yup.number().required('Rate required'),
	gender: yup.string(),
});
const RADIO_OPTIONS = [
	{
		label: 'Male',
		value: 'male',
	},
	{
		label: 'Female',
		value: 'female',
	},
];
export default function MyProfile() {
	const [formData, setFormData] = useState(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: 'Shreyas',
			lastName: 'kanzarkar',
			NationalID: '7373727',
			email: 'sksj@jsjs.com',
			enable: true,
			notify: true,
			total: 10,
			range: 0,
			// rate: 0,
			gender: 'male',
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		setFormData(data);
		console.log('form data', data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container>
					<Text variant="h4" sx={{ padding: '35px 0px 15px 36px' }}>
						Edit Profile
					</Text>
					<Container row sx={{ padding: '35px 0px 15px 36px' }}>
						<Item xs={9}>
							<Container rowGap={'16px'} columnGap={'36px'}>
								<Item xs={5}>
									<TextInputController label={'First Name'} name={'firstName'} control={control} />
								</Item>
								<Item xs={5}>
									<TextInputController label={'Last Name'} name={'lastName'} control={control} />
								</Item>
								<Item xs={5}>
									<TextInputController
										disabled
										label={'National ID / Residence Permit No.'}
										name={'NationalID'}
										control={control}
									/>
								</Item>
								<Item xs={4}>
									<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />
								</Item>
								<Item xs={5}>
									<TextInputController label={'Email'} name={'email'} control={control} />
								</Item>
								<Item xs={5} ycenter>
									<CheckboxController name="Hijari" control={control} errors={errors} /> Hijari
								</Item>
								<Item xs={5} ycenter>
									<SwitchController name="Hijari" control={control} errors={errors} /> Hijari
								</Item>
							</Container>
						</Item>
					</Container>
				</Container>
			</form>
		</>
	);
}
