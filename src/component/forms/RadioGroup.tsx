import {
	RadioGroup as MUIRadioGroup,
	FormControl,
	FormLabel,
	FormControlLabel,
	Radio,
	RadioGroupProps as MUIRadioGroupProps,
} from '@mui/material';

type Option = {
	label: string;
	value: number | string;
};

type RadioGroupProps = MUIRadioGroupProps & {
	options: Option[];
	label: string;
};

const RadioGroup = ({ label, options, ...otherProps }: RadioGroupProps) => {
	// TODO: customize style
	return (
		<FormControl>
			<FormLabel id={`${label}-radio-buttons-group`}>Gender</FormLabel>
			<MUIRadioGroup row aria-label={label} {...otherProps}>
				{options?.map((option) => <FormControlLabel value={option.value} control={<Radio />} label={option.label} />)}
			</MUIRadioGroup>
		</FormControl>
	);
};

export default RadioGroup;
