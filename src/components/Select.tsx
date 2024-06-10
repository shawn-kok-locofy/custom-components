import {
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FC } from "react";

type SelectProps = {
  text: string;
};

const Select: FC<SelectProps> = ({ text = "Select" }) => {
  const options = [text];
  const [value, setValue] = useState(options ? options[0] : "");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <MuiSelect
      color="primary"
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      onChange={handleChange}
      title="Type of componany"
      IconComponent={() => (
        <img width="24px" height="24px" src="/public/IconDropdown.svg" />
      )}
      sx={{
        color: "white",
        maxHeight: "48px !important",
        fontSize: "14px !important",
        flex: 1,
        minWidth: "260px",
        display: "inline-flex",
        "& .MuiInputBase-root": { height: "48px", fontSize: "14px" },
        "& .MuiInputBase-input": { color: "#383838" },
        fieldset: {
          borderColor: "#383838",
        },
        ":hover fieldset": {
          borderColor: "#1976d2 !important",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem value={option}>{option}</MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;
