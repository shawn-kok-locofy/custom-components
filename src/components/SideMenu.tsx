import { FunctionComponent, useState } from "react";
import MenuItem from "./MenuItem";
import { SideMenuItemsContext } from "../context/SideMenuItemsContext";
import styles from "./SideMenu.module.css";

export type SideMenuItemsType = Array<{
  image: string;
  text: string;
}>;

export type SideMenuType = {
  className?: string;
  activeTab?: number;
};

const SideMenu: FunctionComponent<SideMenuType> = ({
  className = "",
  activeTab = 0,
}) => {
  const [sideMenuItems, setSideMenuItems] = useState<SideMenuItemsType>([
    {
      image: "PersonalInformation",
      text: "Personal Information",
    },
    {
      image: "PersonalVerification",
      text: "Personal Verification",
    },
    {
      image: "BusinessInformation",
      text: "Business Information",
    },
    {
      image: "BusinessOwners",
      text: "Business Owners",
    },
    {
      image: "BusinessNames",
      text: "Business Names",
    },
    {
      image: "FormationDocuments",
      text: "Formation Documents",
    },
    {
      image: "EINVerification",
      text: "EIN Verification",
    },
  ]);

  return (
    <SideMenuItemsContext.Provider value={{ sideMenuItems, setSideMenuItems }}>
      <>
        <div className={[styles.sidemenu, className].join(" ")}>
          {sideMenuItems.map((item, index) => (
            <MenuItem
              status={
                index < activeTab
                  ? "completed"
                  : index === activeTab
                  ? "current"
                  : "incomplete"
              }
              key={index}
              image={item.image as never}
              text={item.text}
            />
          ))}
        </div>
        <div
          style={{
            display: "none",
          }}
        >
          {activeTab}
        </div>
      </>
    </SideMenuItemsContext.Provider>
  );
};

export default SideMenu;
