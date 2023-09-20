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
		<FormControl sx={{ width: '100%' }}>
			<FormLabel id={`${label}-radio-buttons-group`} sx={{ fontSize: '12px', color: '#525451' }}>
				Gender
			</FormLabel>
			<MUIRadioGroup row sx={{ justifyContent: 'space-between', width: '100%', padding:'9px' }} aria-label={label} {...otherProps}>
				{options?.map((option) => <FormControlLabel value={option.value} control={<Radio />} label={option.label} />)}
			</MUIRadioGroup>
		</FormControl>
	);
};

export default RadioGroup;
