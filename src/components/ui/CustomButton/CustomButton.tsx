import { useThemeContext } from "@src/context/ThemeContext";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import { useMemo } from "react";
import {
  ActivityIndicator,
  ButtonProps,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

const { width: screenWidth } = Dimensions.get("screen");

export enum EButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}
interface CustomButtonProps extends ButtonProps {
  textColor?: string;
  backgroundColor?: string;
  variant?: EButtonVariant;
  width?: number;
  height?: number;
  loading?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const CustomButton = ({
  textColor,
  backgroundColor,
  width,
  height,
  variant,
  style,
  loading,
  ...props
}: CustomButtonProps) => {
  const { theme } = useThemeContext();
  const buttonThemed = useMemo(() => getButtonThemeStyle(theme), [theme]);
  const textThemed = useMemo(() => getTextThemeStyle(theme), [theme]);

  const ButtonStyle = [
    styles.button,
    variant && buttonThemed[variant],
    style,
    { opacity: loading ? 0.7 : 1 },
    backgroundColor && { backgroundColor },
  ];
  const TextStyle = [
    styles.buttonText,
    variant && textThemed[variant],
    textColor && { color: textColor },
  ];
  return (
    <TouchableOpacity {...props} style={ButtonStyle} disabled={loading}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={TextStyle}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: screenWidth / 2 + 100,
    height: 50,
  },
  buttonText: {
    ...Typo.button,
  },
});

const getButtonThemeStyle = (theme: Theme) =>
  StyleSheet.create({
    primary: {
      backgroundColor: theme.background.button.primary,
    },
    secondary: {
      backgroundColor: theme.background.button.secondary,
    },
  });

const getTextThemeStyle = (theme: Theme) =>
  StyleSheet.create({
    primary: {
      color: theme.text.button,
    },
    secondary: {
      color: theme.text.default,
    },
  });
