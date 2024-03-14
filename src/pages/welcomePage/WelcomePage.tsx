import { useNavigation } from "@react-navigation/core";
import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import { AUTH_PAGES } from "@src/navigation/Types";
import { COLORS, FONTS, window } from "@src/styles/BaseStyle";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const WelcomePage = () => {
  const navigation = useNavigation();

  const goToSignup = () => navigation.navigate(AUTH_PAGES.Fullname);
  const goToLogin = () => navigation.navigate(AUTH_PAGES.Login);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@src/assets/images/welcomeImage.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.bottomView}>
          <Text style={styles.title}>L'art culinaire</Text>
          <Text style={styles.title}>au défi</Text>
          <Text style={styles.subtitle}>Bienvenue sur Bump.</Text>
          <View style={styles.buttonsBlock}>
            <CustomButton
              onPress={goToSignup}
              variant={EButtonVariant.Primary}
              title="Créer mon compte"
            />
            <View style={styles.bottomButton}>
              <CustomButton
                onPress={goToLogin}
                title="J'ai déjà un compte"
                variant={EButtonVariant.Secondary}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width,
  },
  title: {
    color: COLORS.secondary,
    fontFamily: FONTS.extraBold,
    fontSize: 37,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
    color: COLORS.secondary,
    fontFamily: FONTS.regular,
  },
  bottomView: {
    width,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    height: window.isSmallDevice ? height * 0.45 : height * 0.42,
  },
  buttonsBlock: {
    position: "absolute",
    bottom: height * 0.05,
    alignSelf: "center",
  },
  bottomButton: {
    marginTop: 15,
  },
});
