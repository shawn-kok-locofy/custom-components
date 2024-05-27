import { createContext } from "react";

export type SideMenuItemsType = Array<{
  image: string;
  text: string;
}>;

export type SideMenuItemsContextType = {
  sideMenuItems: SideMenuItemsType;
  setSideMenuItems: (value: SideMenuItemsType) => void;
};

export const SideMenuItemsContext =
  createContext<SideMenuItemsContextType | null>(null);
