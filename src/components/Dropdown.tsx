import { Dropdown as FluentDropdown, Option } from "@fluentui/react-components";
import { FC } from "react";
import styles from "./Field.module.css";

type DropdownProps = {
  placeholder: string;
  dropdownSize: "small" | "medium" | "large";
  appearance: "outline" | "underline" | "filled-darker" | "filled-lighter";
  options: string[];
};

const Dropdown: FC<DropdownProps> = ({
  placeholder = "Select Dropdown Value",
  dropdownSize = "medium",
  appearance = "outline",
  options = [
    "India",
    "Singapore",
    "Pakistan",
    "Veitnam",
    "Hongkong",
    "China",
    "United States of America",
    "United Kingdom",
  ],
}) => {
  return (
    <div className={styles.container}>
      <FluentDropdown
        placeholder={placeholder}
        size={dropdownSize}
        appearance={appearance}
        clearable
        style={{ flex: 1, minWidth: "260px", height: "40px" }}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </FluentDropdown>
    </div>
  );
};

export default Dropdown;
