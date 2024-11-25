"use client";

import React, { createContext } from "react";

const defaultTheme: any = [];

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
