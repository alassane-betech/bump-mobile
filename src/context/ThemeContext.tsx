import React, { ReactNode, createContext, useContext } from "react";
import useTheme from "../hooks/useTheme";
import { Theme } from "@src/styles/Types";
import { LighTheme } from "@src/styles/BaseStyle";

type ThemeContextType = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: LighTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
