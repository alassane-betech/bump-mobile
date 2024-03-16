import { useRoute } from "@react-navigation/native";
import { BumpEgg } from "@src/assets/svgs/BumpEgg";
import { CheckedElement } from "@src/components/ui/CheckedElement/CheckedElement";
import CustomButton from "@src/components/ui/CustomButton/CustomButton";
import { EggElement } from "@src/components/ui/EggElement/EggElement";
import { AuthContext } from "@src/context/AuthContext";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { height, width } = Dimensions.get("screen");

export const LoggedInWelcomePage: React.FC = () => {
  const { authContext } = useContext(AuthContext);
  const { params } = useRoute();
  const { token } = params as { token: string };

  const goToMain = () => authContext.setToken(token);

  return (
    <View style={styles.container}>
      <Image
        source={require("@src/assets/images/frame.png")}
        resizeMode="cover"
        style={styles.image}
      />
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
              eggColor={COLORS.brown}
              title="Cuisinier du dimanche"
              subTitle="Tu commences ici"
            />
            <EggElement
              eggColor={COLORS.grey}
              title="Apprenti"
              subTitle="1 000 points"
            />
            <EggElement
              eggColor={COLORS.primary}
              title="Pépite"
              subTitle="5 000 points"
            />
            <EggElement
              eggColor={COLORS.blue}
              title="Régalade"
              subTitle="15 000 points"
            />
            <EggElement
              eggColor={COLORS.red}
              title="Master"
              subTitle="50 000 points"
            />
          </View>

          <View style={styles.bottomButton}>
            <CustomButton
              title="Suivant"
              backgroundColor={COLORS.secondary}
              textColor="white"
              onPress={goToMain}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  image: {
    position: "absolute",
    width,
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
