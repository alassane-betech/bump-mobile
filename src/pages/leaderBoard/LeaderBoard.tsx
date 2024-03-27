import { LockedEgg } from "@src/assets/svgs/LockedEgg";
import { ProfileEgg } from "@src/assets/svgs/ProfileEgg";
import { Header } from "@src/components/containers/Header/Header";
import { ProfileUserItem } from "@src/components/ui/ProfileUserItem/ProfileUserItem";
import { COLORS, FONTS, window } from "@src/styles/BaseStyle";
import { users } from "@src/utils/Seed";
import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get("window");

export const LeaderBoard: React.FC = () => {
  const renderItem = ({ item }) => (
    <ProfileUserItem user={item} key={item.id} />
  );

  return (
    <View style={styles.container}>
      <Header title="Leaderboard" />
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Cuisinier du dimanche</Text>
        <Text style={styles.contentSubtitle}> Jusqu’à 12 000 points </Text>
      </View>
      <View style={styles.eggsRow}>
        <ProfileEgg />
        <LockedEgg />
        <LockedEgg />
        <LockedEgg />
        <LockedEgg />
        <LockedEgg />
      </View>
      <View style={styles.row} />
      <View style={styles.usersList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    marginTop: 20,
  },
  contentTitle: {
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: 22,
  },
  contentSubtitle: {
    marginTop: 12,
    textAlign: "center",
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    fontSize: 16,
  },
  eggsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  row: {
    marginTop: 15,
    height: 1,
    backgroundColor: COLORS.tertiary,
  },
  usersList: {
    marginTop: 10,
    paddingHorizontal: 15,
    height: window.isSmallDevice ? height * 0.5 : height * 0.55,
  },
});
