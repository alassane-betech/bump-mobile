import { View, StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { window } from "@src/styles/BaseStyle";
import BlurCard from "@src/components/shared/BlurCard/BlurCard";
import ScreenHeader from "@src/components/shared/ScreenHeader/ScreenHeader";
import Feather from "@expo/vector-icons/Feather";
import { useThemeContext } from "@src/context/ThemeContext";
export const Duels: React.FC = () => {
  const { theme } = useThemeContext();
  return (
    <View style={styles.container}>
      <Image
        style={styles.blurbackground}
        source={require("@src/assets/images/blurbackground.png")}
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
          onPress: () => alert("ttt"),
        }}
      />
      <View style={styles.content}></View>
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
    paddingHorizontal: 15,
    width: "100%",
    flex: 1,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: "flex-end",
  },
  blurbackground: { position: "absolute", top: -100, width: window.width },
});
