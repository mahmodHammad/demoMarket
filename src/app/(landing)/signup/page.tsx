'use client';

import { Box, Button, Container, Item, Text } from '@/wrappers';
import Image from 'next/image';
import React from 'react';
import neigbourhoodCover from '@/assets/images/Rectangle 4542.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { TextInputController } from '@/component';
import { RadioGroupController as RadioGroup } from '@/component';
import theme from '@/ThemeRegistry/theme';

const schema = yup.object().shape({
	fullName: yup.string().required('Full Name is required'),
	number: yup.string().required('Phone number is required'),
	email: yup.string().required('Email is required'),
	gender: yup.string(),
	intrested: yup.string(),
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
const INTRESTED_OPTIONS = [
	{
		label: 'Invest',
		value: 'invest',
	},
	{
		label: 'Rent',
		value: 'rent',
	},
	{
		label: 'Buy',
		value: 'buy',
	},
];
const Signup = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			fullName: '',
			number: '',
			email: '',
			gender: 'male',
			intrested: 'invest',
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		console.log('form data', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Container sx={{ height: '100%' }}>
				<Item md={6} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
						component={Image}
						alt="houses and properties for rent"
						src={neigbourhoodCover}
					/>
				</Item>
				<Item md={6} center column>
					<Box
						maxWidth="370px"
						sx={{ textAlign: 'center', margin: { xs: '26px 24px 26px 24px', md: '100px 227px 137px 100px' } }}
						column>
						<Text variant="h4">
							Welcome to
							<span style={{ color: theme.palette.primary.main }}> Makeen</span>
						</Text>
						<Text variant="small" gray align="center" mt="16px">
							Take control of the service experience during your property search & ownership journey
						</Text>

						<Box sx={{ mt: '24px' }}>
							<Container rowGap={'16px'} columnGap={'36px'}>
								<Item xs={12}>
									<TextInputController
										placeholder="Enter your Full Name"
										label={'Full Name'}
										name={'fullName'}
										control={control}
									/>
								</Item>
								<Item xs={12}>
									<TextInputController
										placeholder="Enter your Phone number"
										label={'Phone number'}
										name={'number'}
										type="number"
										control={control}
									/>
								</Item>

								<Item xs={12}>
									<TextInputController
										placeholder="Enter your Email ID"
										label={'Email ID'}
										name={'email'}
										control={control}
									/>
								</Item>
								<Item xs={12}>
									<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />
								</Item>
								<Item xs={12}>
									<RadioGroup
										name="intrested"
										label="Intrested To"
										options={INTRESTED_OPTIONS}
										control={control}
										errors={errors}
									/>
								</Item>
							</Container>
						</Box>

						<Text variant="small" gray align="left" mt="18px">
							By proceeding to create your account, you are agreeing to our
							<b> Terms of Use </b> and <b> Privacy Policy</b>
						</Text>
						<Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
							sign up
						</Button>
						<Text mt="24px">
							Already have an account?{' '}
							<Text component={'span'} sx={{ display: 'inline' }} color="primary" bold>
								Sign in
							</Text>
						</Text>
					</Box>
				</Item>
			</Container>
		</form>
	);
};

export default Signup;
