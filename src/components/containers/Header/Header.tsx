import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, window } from "@src/styles/BaseStyle";
import React from "react";
import BackButton from "@src/components/shared/BackButton/BackButton";
import { HeaderRightThing } from "@src/assets/svgs/HeaderRightThing";

type HeaderProps = {
  title?: string;
  isDetails?: boolean;
};

const { width } = Dimensions.get("window");

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.row1} />
      <View style={styles.headerRightContainer}>
        <HeaderRightThing />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "15%",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 16,
    textAlign: "center",
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: 15,
    width: "100%",
  },
  headerRightContainer: {
    position: "absolute",
    right: -20,
    top: "65%",
  },
  row1: {
    marginTop: window.isSmallDevice ? "25%" : "30%",
    borderTopLeftRadius: 35,
    backgroundColor: COLORS.white,
    height: 20,
    width: width,
  },
});
