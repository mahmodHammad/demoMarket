import { Button as MUIButton, ButtonProps, CircularProgress } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

interface Button extends ButtonProps {
	whiteborder?: boolean;
	grayBorder?: boolean;
	loading?: boolean;
	sx?: any;
	component?: React.ElementType;
	onClick?: MouseEventHandler;
	children: ReactNode;
}
const setButtonLayoutSXProps = (props: any) => {
	return {
		...(props.whiteborder && {
			color: '#fff',
			borderColor: '#fff',
			'&:hover': { borderColor: '#fff', background: '#ffffff09' },
		}),
		...(props.grayBorder && {
			color: '#232425',
			borderColor: '#E3E3E3',
			'&:hover': { borderColor: '#E3E3E3', background: '#E3E3E309' },
		}),

		...props.sx,
	};
};
export default function Button(props: Button) {
	return (
		<MUIButton {...props} sx={setButtonLayoutSXProps(props)}>
			{!props.loading ? props.children : <CircularProgress size={25} color="inherit" />}
		</MUIButton>
	);
}
