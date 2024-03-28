import Typo from "@src/styles/Typo";
import { createContext, useContext, ReactNode } from "react";
import Toast from "react-native-root-toast";
import { useThemeContext } from "./ThemeContext";
import { Platform } from "react-native";

interface ErrorContextType {
  showError: (message: string) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  const showError = (message: string) => {
    Toast.show(message, {
      containerStyle: { marginTop: Platform.OS === "android" ? 30 : 0 },
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      backgroundColor: theme.error.color,
      textStyle: Typo.buttonBold,
      opacity: 1,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
    </ErrorContext.Provider>
  );
};
