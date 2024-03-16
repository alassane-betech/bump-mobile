import { useThemeContext } from "@src/context/ThemeContext";
import { FONTS } from "@src/styles/BaseStyle";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import { goToLink } from "@src/utils/Helpers";
import React from "react";
import { Text as RNText, StyleSheet, TextProps, TextStyle } from "react-native";

const styles = StyleSheet.create({
  title: Typo.screenTitle,
  button: Typo.button,
  body: Typo.body,
});

export enum ETextVariant {
  Title = "title",
  Body = "body",
  Button = "button",
}

interface CustomTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
  variant?: ETextVariant;
  link?: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  link,
  variant = ETextVariant.Body,
  style,
  ...props
}) => {
  const { theme } = useThemeContext();

  const themed = React.useMemo(() => getThemeStyle(theme), [theme]);

  const textStyle = [
    themed.text,
    variant && styles[variant],
    style,
    link && themed.link,
  ];

  return (
    <RNText
      {...(link && { onPress: () => goToLink(link) })}
      style={textStyle}
      {...props}
    />
  );
};

const getThemeStyle = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.text.default,
    },
    link: {
      color: theme.text.link,
    },
  });
