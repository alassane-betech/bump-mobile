import { View, StyleSheet, Image, Platform, ScrollView } from "react-native";
import React from "react";
import { window } from "@src/styles/BaseStyle";
import BlurCard from "@src/components/shared/BlurCard/BlurCard";
import ScreenHeader from "@src/components/shared/ScreenHeader/ScreenHeader";
import BackButton from "@src/components/shared/BackButton/BackButton";
export const DuelMode: React.FC = () => {
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

      <ScreenHeader title="Choix du mode" iconLeft={<BackButton />} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          style={styles.blurbackground3}
          source={require("@src/assets/images/blurellipse.png")}
        />
        <BlurCard
          title="Aléatoire"
          description="Affronte un joueur de ton niveau !"
          buttonProps={{
            title: "Rechercher un adversaire",
            onPress: () => alert("Aléatoire"),
          }}
        />

        <BlurCard
          title="Contre un ami"
          description="Invite un proche pour t’affronter lors d’un duel de cuisine."
          buttonProps={{
            title: "Défier un ami",
            onPress: () => alert("Défier un ami"),
          }}
        />
        <BlurCard
          title="2 VS 2"
          description="Affronte un autre duo et remportez les points en équipe"
          buttonProps={{
            title: "Défier un ami",
            onPress: () => alert("Défier un ami"),
          }}
        />
      </ScrollView>
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
  blurbackground3: {
    position: "absolute",
    right: -window.width / 3,
    top: window.height / 4,
    bottom: 0,
  },
  scroll: { paddingBottom: 50 },
});
