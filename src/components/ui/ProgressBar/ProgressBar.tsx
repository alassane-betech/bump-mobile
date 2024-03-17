import React from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

type ProgressBarProps = {
  progress: number | number[];
  width?: number;
  color?: string; // Couleur de la barre de progression
  unfilledColor?: string; // Couleur de fond de la barre de progression
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width,
  color = "white",
  unfilledColor = "#ccc",
}) => {
  const renderProgressBar = (prog: number, key?: number) => (
    <View key={key} style={styles.bar}>
      <Progress.Bar
        unfilledColor={unfilledColor}
        color={color}
        progress={prog}
        height={3}
        width={width || null}
        borderColor="transparent"
        borderWidth={0}
        animationType="timing"
      />
    </View>
  );

  if (Array.isArray(progress)) {
    return (
      <View style={styles.progressBarContainer}>
        {progress.map((prog, index) => renderProgressBar(prog, index))}
      </View>
    );
  }

  return (
    <View style={styles.progressBarContainer}>
      {renderProgressBar(progress)}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    width: "95%",
    top: 40,
    left: 10,
    right: 10,
  },
  bar: { flex: 1, paddingHorizontal: 3 },
});

export default ProgressBar;
