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
          style={{ color: status === "incomplete" ? "#3A3A3A" : "#E8AB64" }}
        >
          {text}
        </div>
      <div className={`${styles.iconbadge} ${styles[imageName]}`} />
    </div>
  );
};

export default MenuItem;
