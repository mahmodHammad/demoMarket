import { Box } from '@/wrappers';
import SearchIcon from '@mui/icons-material/Search';
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
							<InputAdornment position="end">
								<SearchIcon
									color="primary"
									sx={{
										cursor: 'pointer',
										marginRight: '8px',
										color: '#969798',
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
