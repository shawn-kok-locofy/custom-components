import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.image1Parent}>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.needAnyHelpParent}>
          <a className={styles.needAnyHelp}>Need any help?</a>
          <div className={styles.engParent}>
            <a className={styles.eng}>ENG</a>
            <img alt="" src="/vector-1366.svg" />
          </div>
          <div className={styles.searchIconButtonParent}>
            <div className={styles.searchIconButton}>
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/search.svg"
              />
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/bell.svg"
              />
              <img
                className={styles.iconamoonsearch}
                loading="lazy"
                alt=""
                src="/settings.svg"
              />
            </div>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

