import { BumpEgg } from "@src/assets/svgs/BumpEgg";
import { CheckedElement } from "@src/components/ui/CheckedElement/CheckedElement";
import CustomButton from "@src/components/ui/CustomButton/CustomButton";
import { EggElement } from "@src/components/ui/EggElement/EggElement";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { height } = Dimensions.get("screen");

export const LoggedInWelcomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@src/assets/images/loggedInwelcomePage.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.headerBlock}>
          <View style={styles.bumpEgg}>
            <BumpEgg />
          </View>
          <Text style={styles.title}>Bienvenue sur Bump !</Text>
        </View>
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.checkedElements}>
              <CheckedElement text="Partage tes vidéos culinaires" />
              <CheckedElement text="Défi tes proches via le mode duel !" />
              <CheckedElement text="Remporte des points au classement" />
            </View>

            <View style={styles.eggsElements}>
              <EggElement
                eggColor="#C59E74"
                title="Cuisinier du dimanche"
                subTitle="Tu commences ici"
              />
              <EggElement
                eggColor="#C5D1DC"
                title="Apprenti"
                subTitle="1 000 points"
              />
              <EggElement
                eggColor="#F3CC45"
                title="Pépite"
                subTitle="5 000 points"
              />
              <EggElement
                eggColor="#52ACED"
                title="Régalade"
                subTitle="15 000 points"
              />
              <EggElement
                eggColor="#EB5855"
                title="Master"
                subTitle="50 000 points"
              />
            </View>

            <View style={styles.bottomButton}>
              <CustomButton
                title="Suivant"
                backgroundColor={COLORS.secondary}
                textColor="white"
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  image: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: "5%",
  },
  headerBlock: {
    marginTop: height * 0.09,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: FONTS.extraBold,
    fontSize: 28,
  },
  body: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
  },
  checkedElements: {
    marginTop: 5,
  },
  eggsElements: {
    marginTop: 25,
  },
  bottomButton: {
    marginVertical: 20,
    alignSelf: "center",
  },
  bumpEgg: {
    alignSelf: "center",
  },
});
