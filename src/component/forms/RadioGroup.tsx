import theme from '@/ThemeRegistry/theme';
import { Text } from '@/wrappers';
import {
	RadioGroup as MUIRadioGroup,
	FormControl,
	FormLabel,
	FormControlLabel,
	Radio,
	RadioGroupProps as MUIRadioGroupProps,
	useMediaQuery,
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
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<FormControl sx={{ width: '100%', alignItems: 'flex-start' }}>
			<FormLabel sx={{ fontSize: '12px', color: '#525451' }}>{label}</FormLabel>
			<MUIRadioGroup
				row
				sx={{ justifyContent: 'space-between', width: '100%', paddingLeft: '8px' }}
				aria-label={label}
				{...otherProps}>
				{options?.map((option, index) => (
					<FormControlLabel
						key={index}
						value={option.value}
						control={<Radio size={isMobileView ? 'small' : 'medium'} />}
						label={<Text variant="small">{option.label}</Text>}
					/>
				))}
			</MUIRadioGroup>
		</FormControl>
	);
};

export default RadioGroup;
