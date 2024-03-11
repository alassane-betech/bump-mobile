import { FONTS, window } from "@src/styles/BaseStyle";
import { View, StyleSheet, Text } from "react-native";
import BackButton from "../BackButton/BackButton";
export default function AuthHeader() {
  return (
    <View
      style={
        window.isSmallDevice ? styles.containerSmallDevice : styles.container
      }
    >
      <View style={styles.header}>
        <BackButton />
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
