import { Switch as MUISwitch, SwitchProps } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch' } };

const Switch = (props: SwitchProps) => {
	// TODO: customize style
	return <MUISwitch {...label} {...props} />;
};

export default Switch;
