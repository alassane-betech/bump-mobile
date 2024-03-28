import { FlatList, StyleSheet } from "react-native";
import { users } from "@src/utils/Seed";
import { DuelItem } from "./DuelItem";

const DuelList = () => {
  const renderItem = () => <DuelItem />;

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

export default DuelList;
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
});
