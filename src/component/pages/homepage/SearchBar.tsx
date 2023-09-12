"use client";
import { Box, Button, Text } from "@/wrappers";
import React, { useState } from "react";
import Link from "next/link";
import {
  Autocomplete,
  ButtonBase,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
} from "@mui/material";
import { Location, Search } from "@/assets";

function valuetext(value: number) {
  return `${value}°C`;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Residential Apartment",
  "Residential Land",
  "Independent House/Villa",
];

const SearchBar = () => {
  const [age, setAge] = React.useState("");

  const handleChangee = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [values, setValues] = React.useState<number[]>([20, 37]);

  const handleChanges = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const defaultProps = {
    options: Locations,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const flatProps = {
    options: Locations.map((option) => option.title),
  };
  const [value, setValue] = React.useState<FilmOptionType | null>(null);

  const [isRent, setIsRent] = useState(false);

  const handleClick = () => {
    setIsRent(false);
  };

  const handleClickRent = () => {
    setIsRent(true);
  };

  return (
    <Box sx={{ mt: { xs: "20px ", md: "60px" } }}>
      <Box row>
        <ButtonBase onClick={handleClick}>
          <Box
            center
            sx={{
              width: { xs: "50px", md: "102px" },
              height: { xs: "25px", md: "39px" },

              backgroundColor: isRent ? null : "#FFFFFF",
              borderRadius: {
                xs: "8px 8px 0px 0px",
                md: "15px 15px 0px 0px",
              },
            }}
          >
            <Text variant="small" sx={{ color: isRent ? "#FFFFFF" : null }}>
              Buy
            </Text>
          </Box>
        </ButtonBase>

        <ButtonBase onClick={handleClickRent}>
          <Box
            center
            sx={{
              width: { xs: "50px", md: "102px" },
              height: { xs: "25px", md: "39px" },
              backgroundColor: isRent ? "#FFFFFF" : null,
              borderRadius: {
                xs: "8px 8px 0px 0px",
                md: "15px 15px 0px 0px",
              },
            }}
          >
            <Text variant="small" sx={{ color: isRent ? null : "#FFFFFF" }}>
              Rent
            </Text>
          </Box>
        </ButtonBase>
      </Box>
      <Box
        xbetween
        row
        sx={{
          width: { xs: "400px", md: "918px" },
          height: { xs: "70px", md: "102px" },
          top: "347px",
          borderRadius: " 0px 20px 20px 20px",
          boxShadow: " 0px 30px 60px -15px #8F90BC26",
          backgroundColor: "#FFFFFFCC",
          backdropFilter: "blur(10px)",
          p: { xs: "10px", md: "24px" },
        }}
      >
        <Box xbetween width={"100%"}>
          <Box
            center
            width={"100%"}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box column width={"100%"} mr={"10px"}>
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                    }}
                    variant="standard"
                    placeholder="Location"
                    sx={{
                      input: {
                        "&::placeholder": {
                          textOverflow: "ellipsis !important",
                          color: "#232425",
                          opacity: 1,
                          fontSize: "13px",
                        },
                      },
                    }}
                  />
                )}
              />
            </Box>

            <Box column width={"100%"} mr={"10px"}>
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                    }}
                    variant="standard"
                    placeholder="Property Type"
                    sx={{
                      input: {
                        "&::placeholder": {
                          textOverflow: "ellipsis !important",
                          color: "#232425",
                          opacity: 1,
                          fontSize: "13px",
                        },
                      },
                    }}
                  />
                )}
              />
            </Box>
            <Box column width={"100%"} mr={"10px"}>
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                    }}
                    sx={{
                      input: {
                        "&::placeholder": {
                          textOverflow: "ellipsis !important",
                          color: "#232425",
                          opacity: 1,
                          fontSize: "13px",
                        },
                      },
                    }}
                    variant="standard"
                    placeholder="Price Range"
                  />
                )}
              />
            </Box>
          </Box>

          <Box
            row
            yend
            width={"100%"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box column mr={"30px"} width={"100%"}>
              <Text variant="label">Location</Text>
              <Autocomplete
                popupIcon={null}
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                    }}
                    variant="standard"
                    placeholder="Select Your City"
                  />
                )}
              />
            </Box>
            <Location />
            <Box center ml={"10px"} mr={"35px"}>
              <Divider
                orientation="vertical"
                sx={{
                  width: "2px",
                  background: "rgba(255, 66, 66, 0.08)",
                  border: "0px",
                  height: "46px",
                }}
              />
            </Box>
          </Box>
          <Box
            row
            yend
            width={"100%"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box column mr={"20px"} width={"100%"}>
              <Text variant="label">Property Type</Text>

              <Select
                sx={{
                  "& fieldset": { border: "none" },
                  height: "32px",
                }}
                labelId="demo-multiple-checkbox-label"
                placeholder="Choose Property Type"
                id="demo-multiple-checkbox"
                displayEmpty
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <Text sx={{ opacity: 0.5 }}> Choose Property Type</Text>
                    );
                  }
                  if (selected.length > 1) {
                    return selected.at(0) + "...";
                  }
                  return selected;
                }}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box center mr={"35px"}>
              <Divider
                orientation="vertical"
                sx={{
                  width: "2px",
                  background: "rgba(255, 66, 66, 0.08)",
                  border: "0px",
                  height: "46px",
                }}
              />
            </Box>
          </Box>
          <Box
            row
            yend
            width={"100%"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box column width={"100%"}>
              <Text variant="label">Price Range</Text>
              <Autocomplete
                popupIcon={null}
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                    }}
                    variant="standard"
                    placeholder="Choose Price Range"
                  />
                )}
              />
            </Box>
          </Box>
        </Box>

        <Box
          width={{ md: "54px" }}
          height={{ md: "54px" }}
          bgcolor={"#008EA5"}
          borderRadius={"20px"}
          center
        >
          <IconButton
            component={Link}
            aria-label="delete"
            size="large"
            href="/listingpage"
          >
            <Search />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;

interface FilmOptionType {
  title: string;
  year: number;
}

const Locations = [
  { title: "Ryiadh", year: 1994 },
  { title: "Khobar", year: 1972 },
  { title: "Mecca", year: 1974 },
];
