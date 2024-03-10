import TextFieldErrorIcon from "@src/assets/svgs/TextFieldErrorIcon";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import { useThemeContext } from "@src/context/ThemeContext";
import { StyleSheet, View } from "react-native";

interface ErrorTextProps {
  text: string;
  withBackground?: boolean;
}
export default function ErrorText({ text, withBackground }: ErrorTextProps) {
  const { theme } = useThemeContext();

  return (
    <View
      style={[
        styles.container,
        withBackground && {
          backgroundColor: theme.error.background,
          padding: 8,
          borderRadius: 12,
          width: "100%",
          marginTop: 10,
        },
      ]}
    >
      <TextFieldErrorIcon />
      <CustomText style={[styles.text, { color: theme.error.color }]}>
        {text}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
  },
});
