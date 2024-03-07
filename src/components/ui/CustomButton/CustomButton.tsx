import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get("screen");

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  textColor?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
}

const CustomButton = ({
  text,
  textColor,
  backgroundColor,
  width,
  height,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor ? backgroundColor : COLORS.secondary,
          width: width ? width : screenWidth / 2 + 100,
          height: height ? height : 50,
        },
      ]}
    >
      <Text
        style={[styles.buttonText, { color: textColor ? textColor : "white" }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
