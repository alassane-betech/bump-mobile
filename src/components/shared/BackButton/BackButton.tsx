import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { defaultHitSlot } from "@src/styles/BaseStyle";
import { useThemeContext } from "@src/context/ThemeContext";

export default function BackButton({
  style,
  color,
  onPress,
}: {
  style?: ViewStyle;
  color?: string;
  onPress?: () => void;
}) {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const { theme } = useThemeContext();
  return (
    <TouchableOpacity
      onPress={onPress || goBack}
      style={[styles.back, style]}
      hitSlop={defaultHitSlot}
    >
      <Ionicons
        name="chevron-back"
        size={25}
        color={color || theme.text.default}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back: { zIndex: 1000 },
});
