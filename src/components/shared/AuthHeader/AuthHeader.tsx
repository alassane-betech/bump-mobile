import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function AuthHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={40}
          color={COLORS.secondary}
        />
        <Text style={styles.logoTitle}>BUMP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 5.5,
    justifyContent: "center",
  },
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
