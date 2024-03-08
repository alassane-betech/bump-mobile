import { useColorScheme } from "react-native";
import { Theme } from "@src/styles/Types";
import { DarkTheme, LighTheme } from "@src/styles/BaseStyle";

const useTheme = (): Theme => {
  const scheme = useColorScheme();
  return scheme === "dark" ? DarkTheme : LighTheme;
};

export default useTheme;
