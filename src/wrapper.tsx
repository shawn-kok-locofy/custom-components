import React, { ReactNode } from "react";
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './globals.css';
 
export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <FluentProvider theme={webLightTheme}>
      {children}
    </FluentProvider>
  );
}