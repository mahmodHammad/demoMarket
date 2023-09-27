'use client';

import { Box, Button, Container, Item, Text } from '@/wrappers';
import Image from 'next/image';
import React from 'react';
import signupimg from '@/assets/images/herobg.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { PhoneInputController, TextInputController } from '@/component';
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
						src={signupimg}
					/>
				</Item>
				<Item md={6} center>
					<Box
						maxWidth="540px"
						xcenter
						sx={{
							// background: '#fa03',
							minHeight: 'calc(100vh - 180px)',
							textAlign: { xs: 'left', md: 'center' },
							margin: { xs: '36px 24px 56px 24px', md: '50px 0px 42px 0', xl: '0' },
						}}
						column>
						<Text variant="h4">
							Welcome to
							<Box component="span" sx={{ color: theme.palette.primary.main }}>
								{' '}
								Atar
							</Box>
						</Text>
						<Text variant="small" gray mt="16px">
							Take control of the service experience during your property search & ownership journey
						</Text>

						<Box sx={{ mt: '24px' }}>
							<Container spacing={2}>
								<Item xs={6}>
									<TextInputController
										placeholder="Enter your Full Name"
										label={'Full Name'}
										name={'fullName'}
										control={control}
									/>
								</Item>
								<Item xs={6}>
									<TextInputController
										placeholder="Enter your Phone number"
										label={'Phone number'}
										name={'number'}
										type="number"
										control={control}
									/>
									{/* <PhoneInputController
										placeholder="Enter your Phone number"
										label={'Phone number'}
										name={'number'}
										type="number"
										control={control}
									/>  */}
								</Item>

								<Item xs={12}>
									<TextInputController
										placeholder="Enter your Email ID"
										label={'Email ID'}
										name={'email'}
										control={control}
									/>
								</Item>
								<Item md={6.1} xs={8.1}>
									<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />
								</Item>
								<Item xs={12} md={9}>
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

						<Container spacing={2} center>
							<Item xs={12} md={7}>
								<Text variant="small" gray align="left" mt="18px">
									By proceeding to create your account, you are agreeing to our
									<b> Terms of Use </b> and <b> Privacy Policy</b>
								</Text>
							</Item>

							<Item xs={12} md={5}>
								<Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
									sign up
								</Button>
							</Item>
						</Container>

						{/* <Text mt="24px">
							Already have an account?{' '}
							<Text component={'span'} sx={{ display: 'inline' }} color="primary" bold>
								Sign in
							</Text>
						</Text> */}
					</Box>
				</Item>
			</Container>
		</form>
	);
};

export default Signup;
