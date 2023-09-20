'use client';

import { useState } from 'react';
import {
	CheckboxController as Checkbox,
	SimpleSelectController as Select,
	SliderController as Slider,
	SwitchController as Switch,
	TextInputController as TextInput,
	RatingController as Rating,
	RadioGroupController as RadioGroup,
	PhoneInputController as PhoneInput,
} from '@/component';
import { Box, Button, Text } from '@/wrappers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	firstName: yup.string().required('First Name required'),
	enable: yup.boolean(),
	notify: yup.boolean(),
	total: yup.number().required('Total required'),
	range: yup.number(),
	rate: yup.number().required('Rate required'),
	gender: yup.string(),
});

export default function FormsPlayground() {
	const [formData, setFormData] = useState(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
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
		<Box sx={{ height: 800, p: 5 }} row gap={5}>
			<Box sx={{ width: 0.2 }} column gap={3}>
				<TextInput name="firstName" control={control} errors={errors} />

				<Switch name="notify" control={control} errors={errors} />

				<Checkbox name="enable" control={control} errors={errors} />

				<Select name="total" items={SELECT_ITEMS} control={control} errors={errors} />

				<Slider name="range" control={control} errors={errors} />

				<Rating name="rate" control={control} errors={errors} />

				<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />

				<PhoneInput name="phone" control={control} errors={errors} />

				<Button variant="contained" onClick={handleSubmit(onSubmit)}>
					Submit
				</Button>
			</Box>

			<Box sx={{ width: 0.2 }} column gap={3}>
				{formData && (
					<pre
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(formData, null, 2),
						}}
					/>
				)}
			</Box>
		</Box>
	);
}

const SELECT_ITEMS = [
	{
		item: 'Ten',
		value: 10,
	},
	{
		item: 'Twenty',
		value: 20,
	},
	{
		item: 'Thirty',
		value: 30,
	},
];

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
