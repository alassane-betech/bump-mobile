import { Entypo } from "@expo/vector-icons";
import { VerticalLine } from "@src/assets/svgs/VerticalLine";
import Avatar from "@src/components/ui/Avatar/Avatar";
import CustomButton from "@src/components/ui/CustomButton/CustomButton";
import { COLORS, FONTS, window } from "@src/styles/BaseStyle";
import { Theme } from "@src/styles/Types";
import { EGrade, User } from "@src/types/userTypes";
import { DEFAULT_IMAGE } from "@src/utils/Seed";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type UserInfosProps = {
  user: User;
  theme: Theme;
};

const getGradeColor = (grade: EGrade) => {
  const color = {
    [EGrade.DEFAULT]: COLORS.brown,
    [EGrade.APPRENTI]: COLORS.grey,
    [EGrade.PEPITE]: COLORS.primary,
    [EGrade.REGALADE]: COLORS.blue,
    [EGrade.MASTER]: COLORS.red,
  };

  return color[grade] ?? COLORS.brown;
};

export const UserInfos: React.FC<UserInfosProps> = ({ user, theme }) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Avatar
          profilAvatar
          imageUri={user?.profilePicture ?? DEFAULT_IMAGE}
          type="gradient"
          borderColor={getGradeColor(user?.grade)}
          size={window.isSmallDevice ? 75 : 100}
        />
      </View>
      <View style={styles.userInfos}>
        <Text style={styles.name}>{`${user?.firstname || ""} ${
          user?.lastname || ""
        }`}</Text>
        <Text style={styles.description}>
          {" "}
          {user?.description ?? "Spécialiste des déglaçages en urgence 🔥"}{" "}
        </Text>
      </View>
      <View style={styles.tags}>
        <Text style={[styles.description, { color: COLORS.black }]}>
          {user?.tags?.join(" ") ??
            "#cuisine italienne, #cuisinier du dimanche"}
        </Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.statsItem}>
          <Text style={styles.statsItemNumber}>{user?.totalFollowers}</Text>
          <Text style={styles.statsItemText}>Abonnés</Text>
        </View>

        <View style={[styles.line, { left: "33%" }]}>
          <VerticalLine />
        </View>

        <View style={styles.statsItem}>
          <Text style={styles.statsItemNumber}>{user?.totalFollowing}</Text>
          <Text style={styles.statsItemText}>Abonnements</Text>
        </View>

        <View style={[styles.line, { left: "72%" }]}>
          <VerticalLine />
        </View>

        <View style={styles.statsItem}>
          <Text style={styles.statsItemNumber}>{user?.points}</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: window.isSmallDevice
      ? "8%"
      : Platform.OS === "android"
      ? "12%"
      : "15%",
    width: "80%",
    alignSelf: "center",
  },
  avatar: {
    alignSelf: "center",
  },
  userInfos: {
    marginTop: "3%",
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
    height: 35,
  },

  dotsButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 5,
    width: 35,
    height: 35,
  },
});
