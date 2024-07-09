import { FC } from "react";
import { TextField } from "@mui/material";
import styles from "./Input.module.css";

type InputProps = {
  text: string;
};

const Input: FC<InputProps> = ({ text = "Input" }) => {
  return (
    <TextField
      className={styles.input}
      placeholder={text}
      variant="outlined"
      sx={{
        "& fieldset": { borderColor: "#383838" },
        "& .MuiInputBase-root": { height: "48px", fontSize: "14px", flex: 1 },
        "& .MuiInputBase-input": { color: "#383838" },
        "&:hover fieldset": {
          borderColor: "#00E377" + "!important",
        },
        "&.MuiOutlinedInput-notchedOutline": {
          borderColor: "#00E377" + "!important",
        },
        "&:active fieldset": {
          borderColor: "#00E377" + "!important",
        },
        "outline": "#00E377",
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#00E377" + "!important",
          }
        },
        minWidth: "260px"
      }}
    />
  );
};

export default Input;
