import AntDesign from "@expo/vector-icons/AntDesign";
import { defaultHitSlot } from "@src/styles/BaseStyle";
import { TouchableOpacity, ViewStyle } from "react-native";

export default function CloseIcon({
  onClose,
  style,
}: {
  onClose: () => void;
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity hitSlop={defaultHitSlot} onPress={onClose} style={style}>
      <AntDesign name="close" size={24} color="white" />
    </TouchableOpacity>
  );
}
