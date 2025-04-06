import { FunctionComponent } from "react";
import styles from "./Avatar.module.css";

export type FrameComponentType = {
  className?: string;
  userName?: string;
  isBusinessAccount?: boolean;
  avatarImage?: string;
};

const Avatar: FunctionComponent<FrameComponentType> = ({
  className = "",
  userName = "Joseph\nYoh",
  isBusinessAccount = false,
  avatarImage = "/avatar-image@2x.png",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.avatarImageParent}>
        <img className={styles.avatarImageIcon} alt="" src={avatarImage} />
        {isBusinessAccount ? (
          <img
            className={styles.businessicon}
            loading="lazy"
            alt=""
            src="/businessicon.svg"
          />
        ) : (
          <div className={styles["badge-normal"]}>
            {userName.trim().charAt(0)}
          </div>
        )}
      </div>
      <div className={styles.josephYoh}>{userName}</div>
    </div>
  );
};

export default Avatar;
