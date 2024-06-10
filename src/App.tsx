import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import FileUpload from "./components/FileUpload";
import SideMenu from "./components/SideMenu";
import MuiInput from "./components/Input";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import Select from "./components/Select";
import DatePicker from "./components/DatePicker";
import TextArea from "./components/TextArea";

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
                flexDirection: "row",
                gap: "30px",
                backgroundColor: "#ffffff"
              }}
            >
              <SideMenu activeTab={5} />
              <Toggle />
              <Input text="Place Holder" />
              <Select text="Choose your option" />
              <DatePicker />
            </div>
            <TextArea text="Placeholder...."/>
          </>
        }
      />
      <Route path="/fu" element={<FileUpload text="Drivers Licesne" />} />
    </Routes>
  );
}
export default App;
