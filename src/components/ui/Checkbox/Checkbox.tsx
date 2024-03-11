import { useThemeContext } from "@src/context/ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";

interface CheckboxProps {
  title?: string;
  isChecked: boolean;
}
export const Checkbox = ({ title, isChecked }: CheckboxProps) => {
  const { theme } = useThemeContext();
  const checkbox = isChecked ? (
    <FontAwesome name="check-circle" size={22} color={theme.success.color} />
  ) : (
    <FontAwesome name="circle-o" size={22} color={theme.border.default} />
  );
  return (
    <View style={styles.container}>
      {checkbox}
      {title && <CustomText style={styles.checkboxText}>{title}</CustomText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    marginLeft: 5,
    textAlign: "left",
  },
});
