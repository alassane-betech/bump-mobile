import { View, StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { window } from "@src/styles/BaseStyle";
import BlurCard from "@src/components/shared/BlurCard/BlurCard";
import ScreenHeader from "@src/components/shared/ScreenHeader/ScreenHeader";
import Feather from "@expo/vector-icons/Feather";
import { useThemeContext } from "@src/context/ThemeContext";
import DuelList from "@src/components/containers/Duels/DuelList";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import { useNavigation } from "@react-navigation/native";
import { PRIVATE_PAGES } from "@src/navigation/Types";
export const Duels: React.FC = () => {
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  const goToDuelMode = () => navigation.navigate(PRIVATE_PAGES.DuelMode);
  return (
    <View style={styles.container}>
      <Image
        style={styles.blurbackground1}
        source={require("@src/assets/images/blurellipse.png")}
      />
      <Image
        style={styles.blurbackground2}
        source={require("@src/assets/images/blurellipse.png")}
      />
      <ScreenHeader
        title="Duel"
        iconLeft={
          <Feather name="search" size={22} color={theme.text.default} />
        }
        iconRight={<Feather name="send" size={22} color={theme.text.default} />}
      />
      <BlurCard
        title="Nouveau Duel"
        image={
          <Image
            style={styles.image}
            source={require("@src/assets/images/knife.png")}
          />
        }
        description="Trouve un adversaire avec un thème commun, poste ta vidéo originale et tente d'obtenir le plus de vote !"
        buttonProps={{
          title: "Nouveau Duel",
          onPress: goToDuelMode,
        }}
      />
      <View style={styles.content}>
        <CustomText variant={ETextVariant.Title}>Historique</CustomText>
        <DuelList />
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
  content: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    paddingTop: 5,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: "flex-end",
  },
  blurbackground1: {
    position: "absolute",
    top: -100,
    right: -window.width / 3,
  },
  blurbackground2: {
    position: "absolute",
    top: 0,
    left: -window.width / 3,
  },
  blurbackground: { position: "absolute", top: -100, width: window.width },
});
