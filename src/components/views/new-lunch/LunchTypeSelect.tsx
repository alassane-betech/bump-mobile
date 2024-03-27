import { CustomText } from "@src/components/ui/CustomText/CustomText";
import { useThemeContext } from "@src/context/ThemeContext";
import { defaultHitSlot } from "@src/styles/BaseStyle";
import Typo from "@src/styles/Typo";
import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
export enum NewLunchMode {
  Post = "post",
  Lunch = "lunch",
}

interface LunchTypeSelectProps {
  activeMode: NewLunchMode;
  setActiveMode: Dispatch<SetStateAction<NewLunchMode>>;
}
export default function LunchTypeSelect({
  activeMode,
  setActiveMode,
}: LunchTypeSelectProps) {
  const { theme } = useThemeContext();
  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        hitSlop={defaultHitSlot}
        onPress={() => setActiveMode(NewLunchMode.Post)}
        style={[
          activeMode === NewLunchMode.Post
            ? styles.activeButton
            : styles.inactiveButton,
        ]}
      >
        <CustomText
          style={[
            {
              color:
                activeMode === NewLunchMode.Post ? "white" : theme.text.input,
            },
            activeMode === NewLunchMode.Post
              ? { ...Typo.buttonBold }
              : { ...Typo.button },
          ]}
        >
          Post
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={defaultHitSlot}
        onPress={() => setActiveMode(NewLunchMode.Lunch)}
        style={[
          activeMode === NewLunchMode.Lunch
            ? styles.activeButton
            : styles.inactiveButton,
        ]}
      >
        <CustomText
          style={[
            {
              color:
                activeMode === NewLunchMode.Lunch ? "white" : theme.text.input,
            },
            activeMode === NewLunchMode.Lunch
              ? { ...Typo.buttonBold }
              : { ...Typo.button },
          ]}
        >
          Lunch
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 24,
  },
  inactiveButton: {
    marginHorizontal: 10,
  },
});
