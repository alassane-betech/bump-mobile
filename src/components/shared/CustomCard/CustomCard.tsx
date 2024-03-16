import { useThemeContext } from "@src/context/ThemeContext";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const CustomCard: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
  },
});
