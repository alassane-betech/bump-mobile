import { useThemeContext } from "@src/context/ThemeContext";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import { goToLink } from "@src/utils/Helpers";
import React from "react";
import { Text as RNText, StyleSheet, TextProps, TextStyle } from "react-native";

const styles = StyleSheet.create({
  title: Typo.screenTitle,
  button: Typo.buttonBold,
  body: Typo.body,
  subtitle: Typo.body,
});

export enum ETextVariant {
  Title = "title",
  Body = "body",
  Button = "button",
  Subtitle = "subtitle",
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

  const themed = React.useMemo(
    () => getThemeStyle(theme, variant),
    [theme, variant]
  );

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
      adjustsFontSizeToFit={false}
    />
  );
};

const getThemeStyle = (theme: Theme, variant: ETextVariant) =>
  StyleSheet.create({
    text: {
      color:
        variant === ETextVariant.Subtitle
          ? theme.text.input
          : theme.text.default,
      ...styles[variant],
    },
    link: {
      color: theme.text.link,
    },
  });
