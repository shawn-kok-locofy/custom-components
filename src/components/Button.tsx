import { Button as FluentButton } from "@fluentui/react-components";
import { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  className?: string;
  label: string;
  size: "small" | "medium" | "large";
  appearance: "secondary" | "primary" | "outline" | "subtle" | "transparent";
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({
  className,
  label = "Button",
  size = "medium",
  appearance = "primary",
  onClick = () => {console.log("clicked")}
}) => {
  return (
    <FluentButton
      className={[styles.button, className].join(" ")}
      size={size}
      appearance={appearance}
      onClick={onClick}
    >
      {label}
    </FluentButton>
  );
};

export default Button;
