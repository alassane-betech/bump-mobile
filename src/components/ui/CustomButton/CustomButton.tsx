import { COLORS, FONTS } from "@src/styles/BaseStyle";
import {
  ButtonProps,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const { width: screenWidth } = Dimensions.get("screen");

interface CustomButtonProps extends ButtonProps {
  textColor?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
}

const CustomButton = ({
  textColor,
  backgroundColor,
  width,
  height,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor ? backgroundColor : COLORS.secondary,
          width: width ? width : screenWidth / 2 + 100,
          height: height ? height : 50,
          opacity: props.disabled ? 0.3 : 1,
        },
      ]}
    >
      <Text
        style={[styles.buttonText, { color: textColor ? textColor : "white" }]}
      >
        {props.title}
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
