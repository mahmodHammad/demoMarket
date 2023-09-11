import { Chip as MUIChip, SxProps , ChipProps} from '@mui/material';

interface Chip extends ChipProps {
	label: string;
	checked: boolean;
	sx?: SxProps;
}

const setChipLayoutSXProps = (props: any) => ({
	borderRadius: '32px',
	height: '32px',
	borderColor: props.checked ? '#008EA5' : '#E3E3E3',
	...props.sx,
});

export default function Chip({ label, ...props }: Chip) {
	return (
		<MUIChip
			label={label}
			variant='outlined'
			sx={setChipLayoutSXProps(props)}
			{...props}
		/>
	);
}
