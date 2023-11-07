import { Select, MenuItem, SelectProps, Divider } from '@mui/material';
import { Text } from '@/wrappers';

type Item = {
	item: string;
	value: number | string;
};

type SimpleSelectProps = SelectProps & {
	items: Item[];
	placeholder?: string;
	addNewText?: string;
	addNew?: boolean;
};

const SimpleSelect = ({ items, placeholder = 'Select', addNew, addNewText, ...otherProps }: SimpleSelectProps) => {
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
			{addNew && (
				<MenuItem value="addNew">
					<Text primary bold>
						+ {addNewText}
					</Text>
				</MenuItem>
			)}
			{addNew && <Divider />}
			{items?.map((i, index) => (
				<MenuItem key={index} value={i.value}>
					{i.item}
				</MenuItem>
			))}
		</Select>
	);
};

export default SimpleSelect;
