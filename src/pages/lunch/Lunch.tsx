import { View, StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { window } from "@src/styles/BaseStyle";
import BlurCard from "@src/components/shared/BlurCard/BlurCard";
import UserAvatarList from "@src/components/containers/UserAvatarList/UserAvatarList";
import ScreenHeader from "@src/components/shared/ScreenHeader/ScreenHeader";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useThemeContext } from "@src/context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { PRIVATE_PAGES } from "@src/navigation/Types";
import { NewLunchMode } from "@src/components/views/new-lunch/LunchTypeSelect";
import { BumpEgg } from "@src/assets/svgs/BumpEgg";
export const Lunch: React.FC = () => {
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  const goToNewLunch = () =>
    navigation.navigate(PRIVATE_PAGES.NewLunch, { mode: NewLunchMode.Lunch });

  return (
    <View style={styles.container}>
      <Image
        style={styles.blurbackground}
        source={require("@src/assets/images/blurbackground.png")}
      />
      <ScreenHeader
        title="Lunch"
        iconLeft={
          <Feather name="search" size={22} color={theme.text.default} />
        }
        iconRight={
          <Fontisto name="bell" size={22} color={theme.text.default} />
        }
      />
      <BlurCard
        image={
          <View style={styles.shadow}>
            <BumpEgg />
          </View>
        }
        title="Partage ton plat, tes galères de cuisine"
        buttonProps={{ title: "Nouveau Lunch", onPress: goToNewLunch }}
      />
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
  userList: {
    paddingHorizontal: 15,
    width: "100%",
    flex: 1,
  },
  blurbackground: { position: "absolute", top: -100, width: window.width },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
