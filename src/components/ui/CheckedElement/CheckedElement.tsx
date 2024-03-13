import { CheckIcon } from "@src/assets/svgs/CheckIcon";
import { FONTS } from "@src/styles/BaseStyle";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";

export const CheckedElement: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.checkedElement}>
      <View style={styles.checkIcon}>
        <CheckIcon />
      </View>
      <CustomText style={styles.checkedElementText}>{text}</CustomText>
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
