import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import { View, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}
interface BlurCardProps {
  title: string;
  description?: string;
  buttonProps: ButtonProps;
  image: JSX.Element;
}

export default function BlurCard({
  title,
  description,
  buttonProps,
  image,
}: BlurCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.left}>
          <CustomText style={styles.title} variant={ETextVariant.Title}>
            {title}
          </CustomText>

          {description && (
            <CustomText style={styles.description} variant={ETextVariant.Body}>
              {description}
            </CustomText>
          )}

          <CustomButton
            style={styles.button}
            variant={EButtonVariant.Primary}
            title={buttonProps.title}
            onPress={buttonProps.onPress}
          />
        </View>
        {image}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, width: "100%" },
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
  title: { marginBottom: 10 },
  description: { marginBottom: 20 },
  button: { width: "80%", height: 40 },
});
