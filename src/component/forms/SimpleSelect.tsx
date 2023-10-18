import { Select, MenuItem, SelectProps } from '@mui/material';

type Item = {
	item: string;
	value: number | string;
};

type SimpleSelectProps = SelectProps & {
	items: Item[];
	placeholder?: string;
};

const SimpleSelect = ({ items, placeholder = 'Select', ...otherProps }: SimpleSelectProps) => {
	return (
		<Select
			displayEmpty
			MenuProps={{
				disableScrollLock: true,
			}}
			{...otherProps}>
			<MenuItem disabled value="">
				{placeholder}
			</MenuItem>
			{items?.map((i, index) => (
				<MenuItem key={index} value={i.value}>
					{i.item}
				</MenuItem>
			))}
		</Select>
	);
};

export default SimpleSelect;
