import { useThemeContext } from "@src/context/ThemeContext";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import { ReactElement, useMemo } from "react";
import {
  ActivityIndicator,
  ButtonProps,
  DimensionValue,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  width?: DimensionValue;
  height?: number;
  loading?: boolean;
  iconLeft?: ReactElement;
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
  iconLeft,
  ...props
}: CustomButtonProps) => {
  const { theme } = useThemeContext();
  const buttonThemed = useMemo(() => getButtonThemeStyle(theme), [theme]);
  const textThemed = useMemo(() => getTextThemeStyle(theme), [theme]);

  const ButtonStyle = [
    styles.defaultButton,
    variant && buttonThemed[variant],
    style || styles.styledButton,
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
      {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
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
  defaultButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
  },
  styledButton: {
    width: screenWidth / 2 + 100,
  },
  iconLeft: {
    position: "absolute",
    left: 10,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  buttonText: {
    ...Typo.buttonBold,
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
