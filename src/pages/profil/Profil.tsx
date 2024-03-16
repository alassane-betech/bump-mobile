import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const Profil: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Profil Page</Text>
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