import theme from '@/ThemeRegistry/theme';
import { SearchIcon } from '@/assets';
import { Box } from '@/wrappers';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

const Search = ({ search, handleSearch }: { search: string; handleSearch: (value: string) => void }) => {
	const handleChange = (event: any) => {
		handleSearch(event.target.value);
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
					value={search}
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
