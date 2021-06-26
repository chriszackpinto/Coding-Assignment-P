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
const Form = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="" disabled>
            Location
          </MenuItem>
          <MenuItem value="kolkata">Kolkata</MenuItem>
          <MenuItem value="mumbai">Mumbai</MenuItem>
          <MenuItem value="delhi">Delhi</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
        placeholder="Doctor"
        InputProps={{
          "aria-label": "search",
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Form;
