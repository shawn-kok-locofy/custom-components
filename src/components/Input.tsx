import { FC } from "react";
import { Input as FluentInput } from "@fluentui/react-components";
import styles from "./Field.module.css";
type InputProps = {
  placeholder: string;
  size: "small" | "medium" | "large";
  appearance: "outline" | "underline" | "filled-darker" | "filled-lighter";
};

const Input: FC<InputProps> = ({
  placeholder = "Input",
  appearance = "outline",
  size = "medium",
}) => {
  return (
    <div className={styles.container}>
      <FluentInput
        appearance={
          appearance === "filled-darker" ? "filled-darker-shadow" : appearance
        }
        size={size}
        type="text"
        placeholder={placeholder}
        style={{ flex: 1, minWidth: "260px" }}
      />
    </div>
  );
};

export default Input;
