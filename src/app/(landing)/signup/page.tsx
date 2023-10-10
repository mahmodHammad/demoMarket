'use client';

import { Box, Button, Container, Item, Text } from '@/wrappers';
import Image from 'next/image';
import React, { useState } from 'react';
import signupimg from '@/assets/images/herobg.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { PhoneInput, TextInputController } from '@/component';
import { RadioGroupController as RadioGroup } from '@/component';
import theme from '@/ThemeRegistry/theme';
import OTPModal from '@/component/modals/OTPModal';
import { post } from '@/utils/http';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
	name: yup.string().required('Full Name is required'),
	// phone_number: yup.string().required('Phone number is required'),
	email: yup.string().required('Email is required'),
	gender: yup.string(),
	interested: yup.string(),
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
		getValues,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			// phone_number: '',
			email: '',
			gender: 'male',
			interested: 'invest',
		},
		resolver: yupResolver(schema),
	});

	const [isOpen, setIsOpen] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState({});

	const signup = async (data: any) => {
		await post('/register', {
			...data,
			phone_country_code: phoneNumber?.phone_country_code?.id,
			dial_code: phoneNumber?.phone_country_code?.dial_code,
			phone_number: phoneNumber?.phone_number,
		})
			.then((response) => {
				console.log('success api signup', response);
				toast('Signup Successful', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' });
				return Promise.resolve('OK');
			})
			.catch((err) => {
				toast(err.message, { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' });
				console.log('error api signup', err.message);
				return Promise.reject('OK');
			});
	};

	const onSubmit = async (data: any) => {
		if (!phoneNumber?.phone_number) {
			toast('Please enter phone number', {
				hideProgressBar: true,
				autoClose: 2000,
				type: 'error',
				position: 'top-right',
			});
			return;
		}

		if (phoneNumber?.phone_number) {
			setIsOpen(true);
		}
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
										name={'name'}
										control={control}
									/>
								</Item>
								<Item xs={6}>
									<Container column>
										<Item>
											<Text variant="caption" sx={{ float: 'left' }}>
												Phone
											</Text>
										</Item>
										<Item>
											<PhoneInput
												// value={phoneNumber}
												label={'Phone Number'}
												onChange={(e: any) => setPhoneNumber(e)}
											/>
										</Item>
									</Container>
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
										name="interested"
										label="Intrested To"
										options={INTRESTED_OPTIONS}
										control={control}
										errors={errors}
									/>
								</Item>
							</Container>
						</Box>

						<Container>
							<Item xs={12} md={7}>
								<Text variant="small" gray align="left" mt="18px">
									By proceeding to create your account, you are agreeing to our
									<b> Terms of Use </b> and <b> Privacy Policy</b>
								</Text>
							</Item>

							<Item xs={12} md={12}>
								<Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: '24px' }}>
									sign up
								</Button>
							</Item>
						</Container>
						{isOpen && (
							<OTPModal
								successFunc={() => signup(getValues())}
								isOpen={isOpen}
								setIsOpen={setIsOpen}
								mobile={`${phoneNumber?.phone_country_code?.dial_code} ${phoneNumber?.phone_number}`}
							/>
						)}
					</Box>
				</Item>
			</Container>
		</form>
	);
};

export default Signup;
