import TextFieldErrorIcon from "@src/assets/svgs/TextFieldErrorIcon";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import { useThemeContext } from "@src/context/ThemeContext";
import { Theme } from "@src/styles/Types";
import { StyleSheet, View } from "react-native";

interface ErrorTextProps {
  text: string;
  withBackground?: boolean;
}
export default function ErrorText({ text, withBackground }: ErrorTextProps) {
  const { theme } = useThemeContext();
  const backgroundStyle = getTextBackgroundStyle(theme).background;
  return (
    <View style={[styles.container, withBackground && backgroundStyle]}>
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

const getTextBackgroundStyle = (theme: Theme) =>
  StyleSheet.create({
    background: {
      backgroundColor: theme.error.background,
      padding: 8,
      borderRadius: 12,
      width: "95%",
      marginTop: 10,
    },
  });
