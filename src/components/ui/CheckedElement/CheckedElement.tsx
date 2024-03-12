import { CheckIcon } from "@src/assets/svgs/CheckIcon";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CheckedElement: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.checkedElement}>
      <View style={styles.checkIcon}>
        <CheckIcon />
      </View>
      <Text style={styles.checkedElementText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkedElement: {
    flexDirection: "row",
    marginTop: 20,
  },
  checkedElementText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  checkIcon: {
    backgroundColor: "#F7F8FA",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
});
