import { View, StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import Typo from "@src/styles/Typo";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useThemeContext } from "@src/context/ThemeContext";
import { window } from "@src/styles/BaseStyle";
import BlurCard from "@src/components/shared/BlurCard/BlurCard";
import UserAvatarList from "@src/components/containers/UserAvatarList/UserAvatarList";

export const Lunch: React.FC = () => {
  const { theme } = useThemeContext();
  return (
    <View style={styles.container}>
      <Image
        style={styles.blurbackground}
        source={require("@src/assets/images/blurbackground.png")}
      />
      <View style={styles.row}>
        <Feather name="search" size={22} color={theme.text.default} />
        <CustomText style={styles.headerTitle}>Lunch</CustomText>
        <Fontisto name="bell" size={22} color={theme.text.default} />
      </View>
      <BlurCard />
      <View style={styles.userList}>
        <UserAvatarList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: window.isSmallDevice || Platform.OS === "android" ? 30 : 50,
    backgroundColor: "white",
    alignItems: "center",
  },
  headerTitle: {
    ...Typo.headerTitle,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userList: {
    paddingHorizontal: 15,
    width: "100%",
    flex: 1,
  },
  blurbackground: { position: "absolute", top: -100, width: window.width },
});
