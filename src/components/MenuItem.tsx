import { FunctionComponent, useState } from "react";
import styles from "./MenuItem.module.css";

export type MenuItemType = {
  className?: string;
  image:
  | "BusinessInformation"
  | "BusinessNames"
  | "BusinessOwners"
  | "EINVerification"
  | "FormationDocuments"
  | "PersonalInformation"
  | "PersonalVerification";
  text: string;
  status: "completed" | "current" | "incomplete";
};

const MenuItem: FunctionComponent<MenuItemType> = ({
  className = "",
  image = "BusinessInformation",
  text,
  status = "incomplete",
}) => {
  const imageName = status === "completed" ? image : `${image}InActive`;
  return (
    <div className={[styles.menuitem, className].join(" ")}>
        <div
          className={styles.text}
          style={{ color: status === "incomplete" ? "#dbdbdb" : "#f3e0b5" }}
        >
          {text}
        </div>
      <div className={`${styles.iconbadge} ${styles[imageName]}`} />
    </div>
  );
};

export default MenuItem;
