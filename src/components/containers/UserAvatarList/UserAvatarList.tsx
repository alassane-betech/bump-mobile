import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { users } from "@src/utils/Seed";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import Avatar from "@src/components/ui/Avatar/Avatar";
import { useNavigation } from "@react-navigation/native";
import { PRIVATE_PAGES } from "@src/navigation/Types";

const UserAvatarItem = ({ user }) => {
  const navigation = useNavigation();
  const goToStories = () => {
    navigation.navigate(PRIVATE_PAGES.Story);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={goToStories}
      style={styles.container}
    >
      <Avatar type="gradient" size={90} imageUri={user.imageUri} id={user.id} />
      <CustomText style={styles.username}>Nouveau</CustomText>
    </TouchableOpacity>
  );
};
const UserAvatarList = () => {
  const renderItem = ({ item }) => <UserAvatarItem user={item} />;

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    paddingBottom: 40,
    width: "100%",
  },
  row: {
    flex: 1,
    marginVertical: 10,
  },
  avatar: {
    margin: 10,
  },
  container: { width: "33%", alignItems: "center" },
  username: { marginTop: 5 },
});

export default UserAvatarList;
