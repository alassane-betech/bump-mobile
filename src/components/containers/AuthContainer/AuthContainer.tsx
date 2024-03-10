import { HeaderRightThing } from "@src/assets/svgs/HeaderRightThing";
import AuthHeader from "@src/components/shared/AuthHeader/AuthHeader";
import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import { useThemeContext } from "@src/context/ThemeContext";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface AuthContainerProps {
  children: JSX.Element;
  title: string;
  isSubmitButtonDisabled?: boolean;
  buttonTitle: string;
  onSubmit: () => void;
}

export default function AuthContainer({
  children,
  title,
  isSubmitButtonDisabled,
  buttonTitle,
  onSubmit,
}: AuthContainerProps) {
  const { theme } = useThemeContext();
  const themed = React.useMemo(() => getThemeStyle(theme), [theme]);

  return (
    <View style={themed.container}>
      <AuthHeader />
      <KeyboardAvoidingView
        enabled={true}
        style={themed.content}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
      >
        <View style={styles.headerRightContainer}>
          <HeaderRightThing />
        </View>

        <View style={styles.titleContainer}>
          <Text style={themed.title}>{title}</Text>
        </View>

        <View style={styles.children}>{children}</View>

        <View style={[styles.bottomButton]}>
          <CustomButton
            disabled={isSubmitButtonDisabled}
            onPress={onSubmit}
            variant={EButtonVariant.Primary}
            title={buttonTitle}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const getThemeStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    title: {
      textAlign: "center",
      color: theme.text.title,
      ...Typo.screenTitle,
    },
    content: {
      flex: 1,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: theme.surface,
    },
  });

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 35,
  },
  headerRightContainer: {
    position: "absolute",
    right: -20,
    zIndex: 1000,
    top: -25,
  },
  children: { flex: 1, paddingHorizontal: 20 },
  bottomButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1 / 4,
  },
});
