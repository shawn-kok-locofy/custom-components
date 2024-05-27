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
        "& fieldset": { borderColor: "#bdbdbd" },
        "& .MuiInputBase-root": { height: "48px", fontSize: "14px", flex: 1 },
        "& .MuiInputBase-input": { color: "#c4c4c4" },
        "&:hover fieldset": {
          borderColor: "#1976d2" + "!important",
        },
        minWidth: "260px"
      }}
    />
  );
};

export default Input;
