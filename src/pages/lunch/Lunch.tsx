import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const Lunch: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Lunch Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
