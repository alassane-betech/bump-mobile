import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { defaultHitSlot } from "@src/styles/BaseStyle";
import { useThemeContext } from "@src/context/ThemeContext";

export default function BackButton() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const { theme } = useThemeContext();
  return (
    <TouchableOpacity
      onPress={goBack}
      style={styles.back}
      hitSlop={defaultHitSlot}
    >
      <MaterialIcons
        name="keyboard-arrow-left"
        size={40}
        color={theme.text.default}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back: { zIndex: 1000 },
});
