import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export const CustomCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F7F8FA",
    borderRadius: 15,
  },
});
