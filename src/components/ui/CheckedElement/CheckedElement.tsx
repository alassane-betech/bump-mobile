import { CheckIcon } from "@src/assets/svgs/CheckIcon";
import { FONTS } from "@src/styles/BaseStyle";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";
import { useThemeContext } from "@src/context/ThemeContext";

export const CheckedElement: React.FC<{ text: string }> = ({ text }) => {
  const { theme } = useThemeContext();

  return (
    <View style={styles.checkedElement}>
      <View
        style={[styles.checkIcon, { backgroundColor: theme.cardBackGround }]}
      >
        <CheckIcon />
      </View>
      <CustomText style={styles.checkedElementText}>{text}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  checkedElement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkedElementText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  checkIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
});
