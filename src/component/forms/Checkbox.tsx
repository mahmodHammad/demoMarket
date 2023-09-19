import { Checkbox as MUICheckbox, CheckboxProps } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

const Checkbox = (props: CheckboxProps) => {
	// TODO: customize style 
	return <MUICheckbox {...label} {...props} />;
};

export default Checkbox;
