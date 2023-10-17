import { SearchIcon } from '@/assets';
import { Box } from '@/wrappers';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useMemo, useState } from 'react';

const Search = ({ search, handleSearch }: { search: string; handleSearch: (value: string) => void }) => {
	function debounce(func: { (nextValue: any): void; apply?: any }, timeout = 300) {
		let timer: string | number | NodeJS.Timeout | undefined;
		return (...args: any) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}
	const debouncedSearchHandler = useMemo(() => debounce((nextValue) => handleSearch(nextValue), 1000), []);
	const [value, setValue] = useState(search);

	const handleChange = (event: any) => {
		setValue(event.target.value);
		debouncedSearchHandler(event.target.value);
		// handleSearch(event.target.value);
	};

	return (
		<>
			<Box
				sx={{
					height: 40,
				}}>
				<TextField
					autoFocus={search?.length > 0}
					sx={{
						mr: 4,
						'& .MuiOutlinedInput-input': {
							py: '7px',
						},
					}}
					margin="none"
					variant="outlined"
					placeholder={'Search'}
					value={value}
					onChange={handleChange}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon
									sx={{
										stroke: 'black',
										color: 'black',
										width: '14 ',
										height: '14 ',
										viewBox: '0 0 14 14 ',
										cursor: 'pointer',
									}}
								/>
							</InputAdornment>
						),
					}}
				/>
			</Box>
		</>
	);
};
export default Search;
