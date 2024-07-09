import { FunctionComponent } from "react";
import styles from "./BankingCard.module.css";

export type BankingCardType = {
  className?: string;
  cardType?: string;
  cardNumber?: string;
  balance?: string;
};

const BankingCard: FunctionComponent<BankingCardType> = ({
  className = "",
  cardType = "Credit card",
  cardNumber = "XX XXXXX X",
  balance = "$0.00",
}) => {
  return (
    <div className={[styles.bankingcard, className].join(" ")}>
      <div className={styles.topSection}>
        <div className={styles.content}>
          <div className={styles.cardType}>{cardType}</div>
          <div className={styles.cardNumberContainer}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.cardNumber}>{cardNumber}</div>
          </div>
        </div>
        <img className={styles.chipIcon} alt="" src="/chip@2x.png" />
      </div>
      <b className={styles.balance}>{balance}</b>
    </div>
  );
};

export default BankingCard;
