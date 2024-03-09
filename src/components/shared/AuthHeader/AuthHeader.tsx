import { COLORS, FONTS, defaultHitSlot, window } from "@src/styles/BaseStyle";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function AuthHeader() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View
      style={
        window.isSmallDevice ? styles.containerSmallDevice : styles.container
      }
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.back}
          hitSlop={defaultHitSlot}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={40}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
        <Text style={styles.logoTitle}>BUMP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSmallDevice: {
    flex: 1 / 5.5,
    justifyContent: "center",
  },
  container: {
    height: "15%",
    justifyContent: "center",
  },
  back: { zIndex: 1000 },
  logoTitle: {
    fontFamily: FONTS.Logo,
    color: "white",
    fontSize: 39,
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: 15,
    width: "100%",
  },
});
