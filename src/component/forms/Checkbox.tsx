import * as React from 'react';
import { Switch, SwitchProps } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CheckBox = (props: SwitchProps) => {
  // TODO: customize the style
  return <Switch {...label} defaultChecked />;
};

export default CheckBox;
