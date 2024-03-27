import { COLORS, FONTS } from "@src/styles/BaseStyle";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export enum ETabs {
  VIDEOS = "VIDEOS",
  CLASSEMENT = "CLASSEMENT",
}

type CustomTopTabProps = {
  activeTab: ETabs;
  setActiveTab: React.Dispatch<React.SetStateAction<ETabs>>;
};

export const CustomTopTab: React.FC<CustomTopTabProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabWidth = width / 2;
  const linePosition = useSharedValue(
    activeTab === ETabs.VIDEOS ? 0 : tabWidth
  );

  const handleTabPress = (tab: ETabs) => {
    setActiveTab(tab);
    linePosition.value = withTiming(tab === ETabs.VIDEOS ? 0 : tabWidth, {
      duration: 250,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleTabPress(ETabs.VIDEOS)}
        style={styles.tabButton}
      >
        <Text
          style={[
            styles.tabTitle,
            {
              color:
                activeTab === ETabs.VIDEOS ? COLORS.black : COLORS.darkGray,
            },
          ]}
        >
          Vidéos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTabPress(ETabs.CLASSEMENT)}
        style={styles.tabButton}
      >
        <Text
          style={[
            styles.tabTitle,
            {
              color:
                activeTab === ETabs.CLASSEMENT ? COLORS.black : COLORS.darkGray,
            },
          ]}
        >
          Classement
        </Text>
      </TouchableOpacity>
      <View style={[styles.tabLine, { backgroundColor: COLORS.tertiary }]}>
        <Animated.View
          style={[
            styles.tabLineActive,
            {
              width: tabWidth,
              transform: [{ translateX: linePosition }],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
  },
  tabTitle: {
    marginBottom: 10,
    fontFamily: FONTS.bold,
    fontSize: 14,
    textAlign: "center",
  },
  tabLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 1.5,
    width: "100%",
  },
  tabLineActive: {
    height: 2,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: COLORS.black,
  },
});
