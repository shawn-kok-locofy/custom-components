import { FunctionComponent } from "react";
import styles from "./TableCard.module.css";

export type TableCardType = {
  className?: string;
  title?: string;
  subTitle?: string;
  amount?: string;
  date?: string;
  icon?: string;
};

const TableCard: FunctionComponent<TableCardType> = ({
  className = "",
  title = "Fund Transfer",
  subTitle = "Transfer",
  amount = "$0.00",
  date = "Jan 01, 2023, 12:00 AM",
  icon = "37x37x2077741162",
}) => {
  return (
    <div className={[styles.tablecard, className].join(" ")}>
      <div className={styles.leftSide}>
        <img className={styles.icontransfer} alt="" src={icon} />
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.amount}>{amount}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

export default TableCard;
