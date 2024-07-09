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
  const imageName = ["completed", "current"].includes(status)  ? image : `${image}InActive`;
  return (
    <div className={[styles.menuitem, className].join(" ")} 
         style={{
           backgroundColor: status === "incomplete" ? "#F6F6F6" : status === "current" ? "#00E377" : '',
           border: status === 'completed' ? '1px solid #00E377' : ''
          }}>
      <div className={`${styles.iconbadge} ${styles[imageName]}`} />

        <div
          className={styles.text}
          style={{ color: status === "incomplete" ? "#A6A6A6" : "#373737" }}
        >
          {text}
        </div>
      {
       status === 'completed' && <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
       <path d="M6.03658 10.253L8.25047 12.3564L12.9632 7.64368" stroke="#00E377" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       <circle cx="9.5" cy="10" r="8.5" stroke="#00E377" stroke-width="1.5"/>
     </svg> 
      }
    </div>
  );
};

export default MenuItem;
