import { Select, MenuItem, SelectProps } from '@mui/material';

type Item = {
	item: string;
	value: number | string;
};

type SimpleSelectProps = SelectProps & {
	items: Item[];
};

const SimpleSelect = ({ items, ...otherProps }: SimpleSelectProps) => {
	// TODO: customize style
	return (
		<Select {...otherProps}>
			{items?.map((i, index) => (
				<MenuItem key={index} value={i.value}>
					{i.item}
				</MenuItem>
			))}
		</Select>
	);
};

export default SimpleSelect;
