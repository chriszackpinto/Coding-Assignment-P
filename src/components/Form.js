import React from "react";

import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";

const Form = ({ city, setCity, query, setQuery }) => {
  const useStyles = makeStyles((theme) => ({
    common: {
      border: "1px solid #000",
      borderRadius: 10,
      minWidth: 300,
      marginTop: 10,
      marginLeft: 22,
      // "&:hover": {
      //   // border: "1px solid #000",
      // },
      // "&:focused": {
      //   border: "1px solid #000",
      // },
    },
    adornment: {
      padding: 10,
    },
  }));

  const classes = useStyles();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          disableUnderline
          value={city}
          onChange={handleChange}
          className={classes.common}
          inputProps={{ "aria-label": "Without label" }}
          startAdornment={
            <InputAdornment className={classes.adornment} position="start">
              <LocationOnIcon style={{ fontSize: 15 }} />
            </InputAdornment>
          }
        >
          <MenuItem value="All" disabled>
            Location
          </MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
        </Select>
      </FormControl>

      <TextField
        disableUnderline
        className={classes.common}
        value={query}
        type="search"
        placeholder="Doctor"
        InputProps={{
          "aria-label": "search",
          disableUnderline: true,
          startAdornment: (
            <InputAdornment className={classes.adornment} position="start">
              <SearchIcon style={{ fontSize: 15 }} />
            </InputAdornment>
          ),
        }}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Form;
