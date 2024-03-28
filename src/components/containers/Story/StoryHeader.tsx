import { useNavigation } from "@react-navigation/native";
import Avatar from "@src/components/ui/Avatar/Avatar";
import CloseIcon from "@src/components/ui/CloseIcon/CloseIcon";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import { window } from "@src/styles/BaseStyle";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface Props {
  currentItemIndex: number;
  progress: number[];
}
export default function StoryHeader({ progress, currentItemIndex }: Props) {
  const navigation = useNavigation();
  const close = () => navigation.goBack();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { top: insets.top + 10 }]}>
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
              progress={
                index < currentItemIndex
                  ? 1
                  : index === currentItemIndex
                  ? prog
                  : 0
              }
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
        <CloseIcon onClose={close} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
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
