/* New COMPONENT, (WIP) */
'use client';

import ReactPhoneInput from 'react-phone-input-2';
import { Text } from '@/wrappers';
import 'react-phone-input-2/lib/style.css';
import './style.css';

type PhoneInputProps = {
	value?: string;
	onChange?: any;
	disabled?: boolean;
	label?: string;
};

const PhoneInput = ({ value, onChange = () => null, disabled, label, ...otherProps }: PhoneInputProps) => {
	// TODO: customize style
	return (
		<>
			<Text variant="caption" sx={{ float: 'left', mb: '8px', color: `${disabled ? '#CACACA' : ''}` }}>
				{label}
			</Text>
			<div>
				<ReactPhoneInput
					// inputStyle={{
					// 	// width: '100%',
					// }}
					country="sa"
					placeholder="Enter phone number"
					enableSearch
					containerStyle={{ height: '46px', borderRadius: '8px', marginTop:'8px' }}
					inputStyle={{ height: '46px', width: '100%', borderRadius: '8px' }}
					countryCodeEditable={false}
					disableCountryGuess
					// disableCountryCode // plus char
					// enableAreaCodes={false}
					// enableAreaCodes
					value={value}
					onChange={(value, country: any, e, formattedValue) => {
						console.log('value from phone input', value);
						onChange({
							phone_country_code: {
								id: country.countryCode.toUpperCase(),
								name: `${country.countryCode.toUpperCase()} ${country.dialCode}`,
								dial_code: `${country.dialCode}`,
							},
							phone_number: value.slice(country.dialCode.length),
						});
					}}
					{...otherProps}
				/>
			</div>
		</>
	);
};

export default PhoneInput;
