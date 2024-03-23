import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { DEFAULT_IMAGE } from "@src/utils/Seed";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../Avatar/Avatar";

type ProfileUserItemProps = {
  user: any;
};

export const ProfileUserItem: React.FC<ProfileUserItemProps> = ({ user }) => {
  return (
    <View style={styles.userItem}>
      <View style={styles.leftBlock}>
        <View style={styles.itemNumber}>
          <Text style={styles.text}>{user?.id}</Text>
        </View>
        <View style={styles.margin}>
          <Avatar imageUri={user.imageUri} type="default" size={40} />
        </View>
        <Text style={[styles.text, styles.margin]}>{user.name}</Text>
      </View>
      <View style={styles.rightBlock}>
        <Text style={styles.points}>{`${user?.points} points`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    justifyContent: "space-between",
  },
  leftBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemNumber: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  margin: {
    marginLeft: 15,
  },
  rightBlock: {},
  points: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.darkGray,
  },
});
