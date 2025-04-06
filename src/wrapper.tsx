import React, { ReactNode } from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import "./global.css";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <FluentProvider theme={webLightTheme} style={{display: "contents"}}>{children}</FluentProvider>;
}
