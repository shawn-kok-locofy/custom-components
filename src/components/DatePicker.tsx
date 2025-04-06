import { DatePicker as FluentDatePicker } from "@fluentui/react-datepicker-compat";
import { FC } from "react";
import styles from "./Field.module.css";

type DatePickerProps = {
  placeholder: string;
  size: "small" | "medium" | "large";
  appearance: "outline" | "underline" | "filled-darker" | "filled-lighter";
};

const DatePicker: FC<DatePickerProps> = ({
  placeholder = "Select date",
  size = "medium",
  appearance = "outline",
}) => {
  return (
    <div className={styles.container}>
      <FluentDatePicker
        placeholder={placeholder}
        size={size}
        clearable
        appearance={appearance}
        style={{ flex: 1, minWidth: "260px", height: "38px" }}
      />
    </div>
  );
};

export default DatePicker;
