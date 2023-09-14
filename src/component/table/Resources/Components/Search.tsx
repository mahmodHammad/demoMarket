import { Box } from "@/wrappers";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
// import { useTranslation } from "react-i18next";
const Search = ({
  search,
  handleSearch,
}: {
  search: string;
  handleSearch: (value: string) => void;
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  // const { t } = useTranslation();
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
          placeholder={'Search'}
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
    </>
  );
};
export default Search;
