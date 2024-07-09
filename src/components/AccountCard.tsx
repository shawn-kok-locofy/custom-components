import { FunctionComponent } from "react";
import styles from "./AccountCard.module.css";

export type AccountCardType = {
  className?: string;
  accountType?: string;
  cardNumber?: string;
  balance?: string;
};

const AccountCard: FunctionComponent<AccountCardType> = ({
  className = "",
  accountType = "Checking Account",
  cardNumber = "XX XXXXX X",
  balance = "$0.00",
}) => {
  return (
    <div className={[styles.accountcard, className].join(" ")}>
      <div className={styles.topSection}>
        <div className={styles.content}>
          <div className={styles.accountType}>{accountType}</div>
          <div className={styles.cardNumberContainer}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.cardNumber}>{cardNumber}</div>
          </div>
        </div>
        <img className={styles.iconbars} alt="" src="/iconbars.svg" />
      </div>
      <b className={styles.balance}>{balance}</b>
    </div>
  );
};

export default AccountCard;
