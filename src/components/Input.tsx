import { FC, useEffect, useState } from "react";
import { Input as FluentInput, Field } from "@fluentui/react-components";
import styles from "./Field.module.css";

type InputProps = {
  placeholder: string;
  size: "small" | "medium" | "large";
  appearance: "outline" | "underline" | "filled-darker" | "filled-lighter";
  type?: "text" | "password" | "email" | "number";
  isError?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
};

const Input: FC<InputProps> = ({
  placeholder = "Input",
  appearance = "outline",
  size = "medium",
  type = "text",
  isError = false,
  onChange,
  errorMessage = "Passwords do not match",
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(isError);
  const [message, setMessage] = useState("");

  useEffect(() => {
    validate(value);
  }, [value]);

  const validate = (value: string) => {
    if (type === "password") {
      if (value.length < 8) {
        setError(true);
        setMessage("Password must be at least 8 characters long");
      } else {
        setError(false);
        setMessage("Password is valid");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={styles.container}>
      <Field
        validationMessage={type == "password"? isError? errorMessage: message: undefined}
        validationState={(error || isError) && type == "password" ? "error" : "success"}
      >
        <FluentInput
          appearance={
            appearance === "filled-darker" ? "filled-darker-shadow" : appearance
          }
          size={size}
          type={type}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          style={{ flex: 1, minWidth: "260px" }}
        />
      </Field>
    </div>
  );
};

export default Input;
