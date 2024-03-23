import { ProfileUserItem } from "@src/components/ui/ProfileUserItem/ProfileUserItem";
import { PRIVATE_PAGES } from "@src/navigation/Types";
import { ProfilProps } from "@src/pages/profil/Profil";
import { window } from "@src/styles/BaseStyle";
import { users } from "@src/utils/Seed";
import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

interface RankingTabProps extends ProfilProps {}

export const RankingTab: React.FC<RankingTabProps> = ({ navigation }) => {
  const navigateToLeaderBoard = () => {
    navigation.navigate(PRIVATE_PAGES.LeaderBoard);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={navigateToLeaderBoard}>
      <ProfileUserItem user={item} key={item.id} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    height: height * 0.4,
  },
});
