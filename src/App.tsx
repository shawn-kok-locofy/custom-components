import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import FileUpload from "./components/FileUpload";
import SideMenu from "./components/SideMenu";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import Dropdown from "./components/Dropdown";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import BankingCard from "./components/BankingCard";
import TableCard from "./components/TableCard";
import AccountCard from "./components/AccountCard";
import CustomPieChart from "./components/PieChart";
import CustomLineChart from "./components/LineChart";
import styles from "./temp.module.css";
import DatePicker from "./components/DatePicker";
import Button from "./components/Button";
import PaymentCard from "./components/PaymentCard";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-39725":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "100px",
                gap: "30px",
                backgroundColor: "#ffffff",
              }}
            >
              <Header />
              <BankingCard />
              <AccountCard
                accountType="Checking Account"
                cardNumber="03 25481 9"
                balance="$10,540.00"
              />
              <TableCard
                title="Fund Transfer"
                subTitle="Transfer from Savings to Karla"
                amount="- $1000.00"
                date="Aug 16, 2023, 4:30 PM"
                icon="/icontransfer.svg"
              />
              <Avatar
                isBusinessAccount
                userName="Siddharth Srivastava"
              />
              <FileUpload text="Enter the File" />
              <SideMenu activeTab={5} />
              <Toggle />
              <div className={styles.row}>
                <Input
                  placeholder="First Name"
                  size="large"
                  appearance="outline"
                />
                <Input
                  placeholder="Last Name"
                  size="large"
                  appearance="outline"
                />
              </div>
              <div className={styles.row}>
                <Input
                  placeholder="Email Address"
                  size="large"
                  appearance="outline"
                />
                <Input
                  placeholder="Phone Number"
                  size="large"
                  appearance="outline"
                />
              </div>
              <div className={styles.row}>
                <Dropdown
                  placeholder="Select Nationality"
                  dropdownSize="large"
                  appearance="outline"
                  options={["Option 1", "Option 2", "Option 3"]}
                />
                <DatePicker
                  placeholder="Select Date"
                  size="large"
                  appearance="outline"
                />
              </div>
              <div className={styles.reportCharts}>
                <LineChart />
                <PieChart expenditure="$4,500.00" />
              </div>
              <Button label="Continue" size="large" appearance="primary"/>
              <PaymentCard label="Button" size="large" appearance="primary" icon="/icontransfer.svg"/>
            </div>
          </>
        }
      />
    </Routes>
  );
}
export default App;
