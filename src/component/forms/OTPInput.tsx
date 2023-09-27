'use client';

import OtpInput from 'react-otp-input';
import { useTheme } from '@emotion/react';

type Props = {
	value: string;
	onChange: (v: string) => void;
	hasError: boolean;
};

export default function OTPInput({ value, onChange, hasError = false }: Props) {
	const theme: any = useTheme();
	return (
		<OtpInput
			value={value}
			onChange={onChange}
			containerStyle={{ justifyContent: 'center' }}
			numInputs={4}
			inputType="tel"
			shouldAutoFocus
			inputStyle={{
				textAlign: 'center',
				backgroundColor: 'transparent',
				borderRadius: '8px',
				height: '48px',
				width: '48px',
				margin: '16px',
				border: `1px solid ${hasError ? '#FF4242' : '#E5E5E5'}`,
				outlineColor: hasError ? '#FF4242' : theme.palette.primary.main,
			}}
			renderInput={(props) => <input {...props} />}
		/>
	);
}
