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
	DatePickerController as DatePicker,
	TimePickerController as TimePicker,
	DateTimePickerController as DateTimePicker,
} from '@/component';
import { Box, Button } from '@/wrappers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';

const schema = yup.object().shape({
	firstName: yup.string().required('First Name required'),
	enable: yup.boolean(),
	notify: yup.boolean(),
	total: yup.number().required('Total required'),
	range: yup.number(),
	rate: yup.number().required('Rate required'),
	gender: yup.string(),
	date: yup.date().required('Date required'),
	time: yup.date().required('Time required'),
	dateTime: yup.date().required('Date & Time required'),
	phone: yup.object().required('Phone required'), // 9
});

export default function FormsPlayground() {
	const [formData, setFormData] = useState(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: 'Abdulrahman',
			enable: true,
			notify: true,
			total: 10,
			range: 45,
			rate: 2,
			gender: 'male',
			date: dayjs('2023-09-20') as unknown as Date,
			// date: dayjs('2023-09-14T21:00:00.000Z') as unknown as Date,
			time: dayjs('08:32', 'HH:mm') as unknown as Date,
			// time: dayjs('2023-09-05T14:42:12.000Z') as unknown as Date,
			dateTime: dayjs('2022-04-17T15:35') as unknown as Date,
			// dateTime: dayjs('2022-04-17T12:35:00.000Z') as unknown as Date,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		setFormData(data);
		console.log('form data', data);
	};

	return (
		<Box sx={{ height: 1000, p: 5 }} row gap={5}>
			<Box sx={{ width: 0.2 }} column gap={3}>
				<TextInput name="firstName" control={control} errors={errors} />

				<Switch name="notify" control={control} errors={errors} />

				<Checkbox name="enable" control={control} errors={errors} />

				<Select name="total" items={SELECT_ITEMS} control={control} errors={errors} />

				<Slider name="range" control={control} errors={errors} />

				<Rating name="rate" control={control} errors={errors} />

				<RadioGroup name="gender" label="Gender" options={RADIO_OPTIONS} control={control} errors={errors} />

				<Button variant="contained" onClick={handleSubmit(onSubmit)}>
					Submit
				</Button>
			</Box>

			<Box sx={{ width: 0.2 }} column gap={3}>
				<DatePicker name="date" control={control} errors={errors} label="Date picker" />

				<TimePicker name="time" control={control} errors={errors} label="Time picker" />

				<DateTimePicker name="dateTime" control={control} errors={errors} label="Date Time picker" />

				<PhoneInput name="phone" control={control} errors={errors} />
			</Box>

			<Box sx={{ width: 0.2, ml: 8 }} column gap={3}>
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
