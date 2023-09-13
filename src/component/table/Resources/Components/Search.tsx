import { Box } from "@/Shared/layout";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
const Search = ({
  search,
  handleSearch,
}: {
  search: string;
  handleSearch: (value: string) => void;
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const debouncedSearchHandler = useMemo(
    () => debounce((nextValue) => handleSearch(nextValue), 1000),
    []
  );
  const handleChange = (event: any) => {
    setValue(event.target.value);
    debouncedSearchHandler(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          height: 40,
        }}
      >
        <TextField
          sx={{
            mr: 4,
            "& .MuiOutlinedInput-input": {
              py: "7px",
            },
          }}
          margin="none"
          variant="outlined"
          placeholder={t("dashboard.search")}
          value={value}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                color="primary"
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* {showSearchBar ? (
				<TextField
					sx={{
						mr: 4,
					}}
					variant="outlined"
					placeholder={t('dashboard.search')}
					value={value}
					onChange={handleChange}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<CloseIcon
									style={{ color: '#008EA5', cursor: 'pointer' }}
									onClick={() => {
										handleSearch('')
										setShowSearchBar(false)
									}}
								/>
							</InputAdornment>
						),
						startAdornment: (
							<InputAdornment position="end">
								<SearchIcon
									sx={{
										color: '#008EA5',
										cursor: 'pointer',
									}}
								/>
							</InputAdornment>
						),
					}}
				/>
			) : (
				<IconButton
					sx={{
						mr: 4,
						width: 'fit-content',
						border: '1px solid #f5f5f5',
					}}
					onClick={() => setShowSearchBar(true)}
					size="large"
				>
					<SearchIcon
						sx={{
							fontSize: '3rem',
						}}
					/>
				</IconButton>
			)} */}
    </>
  );
};
export default Search;
