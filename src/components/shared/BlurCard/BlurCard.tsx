import { BumpEgg } from "@src/assets/svgs/BumpEgg";
import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import { Platform, View, StyleSheet } from "react-native";

export default function BlurCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.left}>
          <CustomText style={styles.title} variant={ETextVariant.Title}>
            Partage ton plat, tes galères de cuisine
          </CustomText>

          <CustomButton
            style={styles.button}
            variant={EButtonVariant.Primary}
            title="Nouveau Lunch"
          />
        </View>
        <View style={styles.shadow}>
          <BumpEgg />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  card: {
    marginTop: 20,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    width: "100%",
    borderRadius: 20,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  left: { width: "70%" },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: { marginBottom: 20 },
  button: { width: "80%", height: 40 },
});
