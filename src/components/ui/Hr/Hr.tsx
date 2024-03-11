import { useThemeContext } from "@src/context/ThemeContext";
import { View, StyleSheet } from "react-native";

export default function Hr() {
  const { theme } = useThemeContext();
  return (
    <View style={[styles.hr, { backgroundColor: theme.border.default }]} />
  );
}

const styles = StyleSheet.create({
  hr: {
    height: 1,
    marginTop: 20,
    marginBottom: 15,
    width: "100%",
  },
});
