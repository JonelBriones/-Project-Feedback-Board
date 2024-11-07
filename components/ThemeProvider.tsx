"use client";

import React, { createContext, useContext, useState } from "react";

const defaultTheme: any = [];

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
