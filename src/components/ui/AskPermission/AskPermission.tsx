import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { PermissionImage } from "@src/assets/svgs/ContactsPermissionImage";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import CustomButton from "../CustomButton/CustomButton";

const { height, width } = Dimensions.get("screen");

interface AskPermissionProps {
  type: EPermissionType;
}

export enum EPermissionType {
  CONTACT = "CONTACT",
  LOCALISATION = "LOCALISATION",
  NOTIFICATION = "NOTIFICATION",
}

export const AskPermission: React.FC<AskPermissionProps> = ({ type }) => {
  const getPermissionType = (type: EPermissionType) => {
    const permissionType = {
      [EPermissionType.CONTACT]: {
        image: require("@src/assets/images/contactPermission.png"),
        title: "Invite tes amis",
        subTitle:
          "Synchronise tes contacts pour ajouter tes amis, leur partager tes créations culinaires et voir ce qu’ils publient.",
        buttonText: "Synchroniser mes contacts",
      },
      [EPermissionType.LOCALISATION]: {
        image: require("@src/assets/images/localisationPermission.png"),
        title: "Partage ta localisation",
        subTitle: "Pour une expérience plus adaptée !",
        buttonText: "Partager la localisation",
      },
      [EPermissionType.NOTIFICATION]: {
        image: require("@src/assets/images/notificationPermission.png"),
        title: "Accepte les notifications",
        subTitle:
          "Autorise les notifications pour recevoir tes demandes de duel, te rappeler de partager ton repas ou encore savoir quand un de tes proches a publié du contenu !",
        buttonText: "Partager la localisation",
      },
    };
    return permissionType[type] ?? null;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={40}
          color={COLORS.secondary}
        />
      </TouchableOpacity>

      {/* SVG not working as expected uncomment and comment image block to test */}
      {/* <View style={styles.image}>
        <PermissionImage />
      </View> */}
      <Image
        source={getPermissionType(type).image}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{getPermissionType(type).title}</Text>
        <Text style={styles.subtitle}>{getPermissionType(type).subTitle}</Text>
      </View>
      <View style={styles.buttonsBlock}>
        <CustomButton
          onPress={() => null}
          title={getPermissionType(type).buttonText}
        />
        <View style={styles.bottomButton}>
          <CustomButton
            onPress={() => null}
            title="Plus tard"
            textColor={COLORS.secondary}
            backgroundColor={COLORS.tertiary}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
  image: {
    top: height / 8,
    position: "absolute",
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    padding: 5,
    top: 20,
  },
  buttonsBlock: {
    position: "absolute",
    bottom: 50,
    width: "80%",
    alignSelf: "center",
  },
  bottomButton: {
    marginTop: 15,
  },
  body: {
    position: "absolute",
    top: height / 3,
    marginTop: 20,
    alignSelf: "center",
    width: width - 25,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.extraBold,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: FONTS.regular,
    textAlign: "center",
  },
});
