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
import Select from "./components/Select";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import BankingCard from "./components/BankingCard";
import TableCard from "./components/TableCard";
import AccountCard from "./components/AccountCard";
import CustomPieChart from "./components/CustomPieChart";
import CustomLineChart from "./components/CustomLineChart";
import styles from "./temp.module.css";

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
                gap: "30px",
                backgroundColor: "#ffffff"
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
              <Avatar isBusinessAccount userName="Siddharth Srivastava Is the Boss"/>
              <FileUpload text="Enter the File"/>
              <SideMenu activeTab={5} />
              <Toggle />
              <Input text="Place Holder" />
              <Select text="Choose your option" />
              <div className={styles.reportCharts}>
                <CustomLineChart />
                <CustomPieChart expenditure="4500"/>
              </div>
            </div>
          </>
        }
      />
    </Routes>
  );
}
export default App;
