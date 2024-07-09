import { FunctionComponent } from "react";
import styles from "./Avatar.module.css";

export type FrameComponentType = {
  className?: string;
  userName?: string;
  isBusinessAccount?: boolean;
};

const Avatar: FunctionComponent<FrameComponentType> = ({
  className = "",
  userName = "Joseph\nYoh",
  isBusinessAccount = false
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.avatarImageParent}>
        <img
          className={styles.avatarImageIcon}
          alt=""
          src="/avatar-image@2x.png"
        />
        {isBusinessAccount ?
          <div className={styles.badge}>
            <div className={styles.businessbadge}>
              <img
                className={styles.businessicon}
                loading="lazy"
                alt=""
                src="/businessicon.svg"
              />
            </div>
          </div> :
          <div
            className={styles['badge-normal']}
          >{userName.trim().charAt(0)}</div>
        }

      </div>
      <div className={styles.josephYoh}>{userName}</div>
    </div>
  );
};

export default Avatar;

