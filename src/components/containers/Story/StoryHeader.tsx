import Avatar from "@src/components/ui/Avatar/Avatar";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import { defaultHitSlot, window } from "@src/styles/BaseStyle";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
interface Props {
  progress: number[];
}
export default function StoryHeader({ progress }: Props) {
  const navigation = useNavigation();
  const close = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {progress.map((prog, index) => (
          <View
            key={index}
            style={[
              styles.progressItem,
              { maxWidth: window.width / progress.length - 2 },
            ]}
          >
            <Progress.Bar
              progress={prog}
              width={null}
              color="white"
              borderWidth={0}
              unfilledColor="rgba(255,255,255,0.2)"
            />
          </View>
        ))}
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Avatar
            size={27}
            type="default"
            imageUri="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <CustomText style={styles.text} variant={ETextVariant.Button}>
            Carla
          </CustomText>
          <CustomText style={styles.text} variant={ETextVariant.Button}>
            12h32
          </CustomText>
        </View>
        <TouchableOpacity hitSlop={defaultHitSlot} onPress={close}>
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    zIndex: 1,
    width: "90%",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    height: 3,
    width: "100%",
  },
  progressItem: {
    flex: 1,
    marginHorizontal: 1,
  },
  detailsContainer: {
    marginTop: 15,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    marginLeft: 10,
  },
});
