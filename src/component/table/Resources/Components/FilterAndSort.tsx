import { Box, Button, Item, Text } from "@/wrappers";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import { Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
// import { useTranslation } from "react-i18next";
type Props = {
  sorting?: boolean;
  filtering?: boolean;
  handleSort?: (id: string) => void;
  handleFilter?: (id: string) => void;
  filterValues?: any;
  sortValues?: any;
};
const FilterAndSort: React.FC<Props> = ({
  sorting,
  filtering,
  handleSort,
  handleFilter,
  filterValues,
  sortValues,
}) => {
  // const { t } = useTranslation();
  const [filterTitle, setFilterTitle] = useState("Filter by");
  const [sortTitle, setSortTitle] = useState("Sort");
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const handleFilterChange = (id: string) => {
    handleFilter!(id);
    setFilterTitle(
      filterValues[id]?.title ? filterValues[id]?.title : filterValues[id]
    );

    setAnchorEl1(null);
  };
  const handleSortChange = (id: string) => {
    handleSort!(id);
    setSortTitle(sortValues[id]);
    setAnchorEl2(null);
  };

  return (
    <Box row ycenter>
      {filtering && (
        <Item sx={{ mr: 6 }}>
          <Button
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              setAnchorEl1(event.currentTarget);
            }}
            style={{
              backgroundColor: "#fff",
              minWidth: "170px",
              color: "#232425",
              border: "1px solid #E3E3E3 ",
            }}
          >
            <>
              <FilterListIcon
                sx={{
                  color: "#232425",
                  mr: 4,
                }}
              />
              {filterTitle}
              <ArrowDropDownIcon />
            </>
          </Button>
          <Menu
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={() => {
              setAnchorEl1(null);
            }}
          >
            {Object.entries(filterValues).map(([id, type]) => (
              <MenuItem
                key={id}
                data-my-value={id}
                onClick={() => handleFilterChange(id)}
              >
                {type?.color ? (
                  <Text
                    variant="caption"
                    sx={{
                      color: type?.color,
                      backgroundColor: type?.background,
                      borderRadius: 50,
                      py: 1.5,
                      px: 6,
                      // width:"100%",
                      // textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {type.title}
                  </Text>
                ) : (
                  <Text
                    variant="caption"
                    sx={{
                      borderRadius: 50,
                      py: 1.5,
                      px: 6,
                      fontWeight: 500,
                    }}
                  >
                    {type}
                  </Text>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Item>
      )}
      {sorting && (
        <Box
          sx={{
            color: (theme) => theme.palette.primary.Greyscale900,
          }}
        >
          <Button
            color="inherit"
            variant="outlined"
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              setAnchorEl2(event.currentTarget);
            }}
          >
            <>
              <SortIcon
                sx={{
                  mr: 4,
                }}
              />

              {sortTitle}
              <ArrowDropDownIcon />
            </>
          </Button>
          <Menu
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={() => {
              setAnchorEl2(null);
            }}
          >
            {Object.entries(sortValues).map(([id, type]) => {
              return (
                <MenuItem
                  key={id}
                  data-my-value={id}
                  onClick={() => handleSortChange(id)}
                >
                  {type}
                </MenuItem>
              );
            })}
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default FilterAndSort;
