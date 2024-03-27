import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, window } from "@src/styles/BaseStyle";
import React from "react";
import BackButton from "@src/components/shared/BackButton/BackButton";
import { HeaderRightThing } from "@src/assets/svgs/HeaderRightThing";

type HeaderProps = {
  title?: string;
  isDetails?: boolean;
  isRightButton?: boolean;
  rightButton?: JSX.Element;
  onRightButtonPress?: () => void;
};

const { width } = Dimensions.get("window");

export const Header: React.FC<HeaderProps> = ({
  title,
  isRightButton,
  rightButton,
  onRightButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.blankRow} />
      <View style={styles.headerRightContainer}>
        <HeaderRightThing />
      </View>
      {isRightButton ? (
        <TouchableOpacity
          style={styles.rightButton}
          onPress={onRightButtonPress}
        >
          {rightButton}
        </TouchableOpacity>
      ) : null}
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
    top: Platform.OS === "android" ? "55%" : "65%",
  },
  blankRow: {
    marginTop:
      window.isSmallDevice || Platform.OS === "android" ? "25%" : "30%",
    borderTopLeftRadius: 35,
    backgroundColor: COLORS.white,
    height: 20,
    width: width,
  },
  rightButton: {
    position: "absolute",
    right: "5%",
    top: "58%",
  },
});
