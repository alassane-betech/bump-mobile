import { Entypo } from "@expo/vector-icons";
import { VerticalLine } from "@src/assets/svgs/VerticalLine";
import {
  CustomTopTab,
  ETabs,
} from "@src/components/shared/CustomTopTab/CustomTopTab";
import Avatar from "@src/components/ui/Avatar/Avatar";
import CustomButton from "@src/components/ui/CustomButton/CustomButton";
import { useThemeContext } from "@src/context/ThemeContext";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("screen");

export enum EGrade {
  DEFAULT = "DEFAULT",
  APPRENTI = "APPRENTI",
  PEPITE = "PEPITE",
  REGALADE = "REGALADE",
  MASTER = "MASTER",
}

const userProfil = {
  profilImage:
    "https://img.freepik.com/photos-gratuite/etudiant-belle-jeune-femme-africaine-au-repos-relaxant-assis-dans-cafe-souriant-boire-du-cafe_176420-12331.jpg",
  firstname: "Pixel",
  lastname: "Whisperer",
  description: "Spécialiste des déglaçages en urgence 🔥",
  tags: ["#cuisine italienne", "#cuisinier du dimanche"],
  grade: EGrade.DEFAULT,
};

const getGradeColor = (grade: EGrade) => {
  const color = {
    [EGrade.DEFAULT]: COLORS.brown,
    [EGrade.APPRENTI]: COLORS.grey,
    [EGrade.PEPITE]: COLORS.primary,
    [EGrade.REGALADE]: COLORS.blue,
    [EGrade.MASTER]: COLORS.red,
  };

  return color[grade] ?? "transparent";
};

export const Profil: React.FC = () => {
  const { theme } = useThemeContext();
  const [activeTab, setActiveTab] = useState<ETabs>(ETabs.VIDEOS);
  const translateXView1 = useSharedValue(0);
  const translateXView2 = useSharedValue(0);

  useEffect(() => {
    if (activeTab === ETabs.VIDEOS) {
      translateXView1.value = withTiming(0, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
      translateXView2.value = withTiming(-width, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      translateXView1.value = withTiming(width, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
      translateXView2.value = withTiming(0, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <Image
        source={require("@src/assets/images/profilBackground.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Avatar
            profilAvatar
            imageUri={userProfil.profilImage}
            type="gradient"
            borderColor={getGradeColor(userProfil.grade)}
            size={100}
          />
        </View>
        <View style={styles.userInfos}>
          <Text style={styles.name}>{`${userProfil.firstname || ""} ${
            userProfil.lastname || ""
          }`}</Text>
          <Text style={styles.description}> {userProfil?.description} </Text>
        </View>
        <View style={styles.tags}>
          <Text style={[styles.description, { color: COLORS.black }]}>
            {userProfil.tags.join(" ")}
          </Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <Text style={styles.statsItemNumber}>134</Text>
            <Text style={styles.statsItemText}>Abonnés</Text>
          </View>

          <View style={[styles.line, { left: "33%" }]}>
            <VerticalLine />
          </View>

          <View style={styles.statsItem}>
            <Text style={styles.statsItemNumber}>134</Text>
            <Text style={styles.statsItemText}>Abonnements</Text>
          </View>

          <View style={[styles.line, { left: "72%" }]}>
            <VerticalLine />
          </View>

          <View style={styles.statsItem}>
            <Text style={styles.statsItemNumber}>12</Text>
            <Text style={styles.statsItemText}>Points</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomButton
            title="Éditer profil"
            textSize={14}
            style={styles.button}
            backgroundColor={theme.tertiary}
          />
          <CustomButton
            title="Paramètres"
            textSize={14}
            style={styles.button}
            backgroundColor={theme.tertiary}
          />
          <TouchableOpacity
            style={[styles.dotsButton, { backgroundColor: theme.tertiary }]}
          >
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <CustomTopTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <Animated.View
          style={[
            styles.component,
            { transform: [{ translateX: translateXView1 }] },
          ]}
        >
          {activeTab === ETabs.VIDEOS && (
            <View style={styles.view1}>
              <Text>Contenu de View1</Text>
            </View>
          )}
        </Animated.View>
        <Animated.View
          style={[
            styles.component,
            { transform: [{ translateX: translateXView2 }] },
          ]}
        >
          {activeTab === ETabs.CLASSEMENT && (
            /* Contenu de View2 */
            <View style={styles.view2}>
              <Text>Contenu de View2</Text>
            </View>
          )}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  component: {
    marginTop: 10,
    backgroundColor: "lightgrey",
    width,
    flexDirection: "row",
  },
  image: {
    position: "absolute",
    height: height * 0.4,
    width,
  },
  header: {
    marginTop: "10%",
    width: "80%",
    alignSelf: "center",
  },
  avatar: {
    alignSelf: "center",
  },
  userInfos: {
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    textAlign: "center",
  },
  description: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.darkGray,
  },
  tags: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
  },
  stats: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 15,
  },
  statsItem: {
    alignItems: "center",
  },
  statsItemNumber: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  statsItemText: {
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  line: {
    position: "absolute",
    top: 10,
  },
  buttons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "40%",
    height: 40,
  },
  tabs: {
    marginVertical: 25,
  },
  dotsButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    width: 45,
    height: 45,
  },
  view1: {
    width,
    backgroundColor: "red",
  },
  view2: {
    width,
    backgroundColor: "lightgrey",
  },
});
