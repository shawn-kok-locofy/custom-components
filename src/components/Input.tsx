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
          borderColor: "#1976d2" + "!important",
        },
        minWidth: "260px"
      }}
    />
  );
};

export default Input;
