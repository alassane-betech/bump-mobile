import { useThemeContext } from "@src/context/ThemeContext";
import { FONTS, defaultHitSlot } from "@src/styles/BaseStyle";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import React, { useRef, useState } from "react";
import {
  Animated,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInputProps,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  NativeTouchEvent,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import ErrorText from "@src/components/shared/ErrorText/ErrorText";

export enum ETextFielType {
  Password = "Password",
  Default = "Default",
  Date = "Date",
}
interface TextFieldProps extends TextInputProps {
  label: string;
  type?: ETextFielType;
  error?: string;
  togglePasswordVisibility?: () => void;
}
export const TextField = ({
  label,
  type = ETextFielType.Default,
  error,
  togglePasswordVisibility,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleOnPressIn = (e: NativeSyntheticEvent<NativeTouchEvent>) => {
    setIsFocused(true);
    if (props.onPressIn) {
      props.onPressIn(e);
    }
  };

  const { theme } = useThemeContext();
  const themed = React.useMemo(() => getThemeStyle(theme), [theme]);

  React.useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || props.value !== "" ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, props.value, animatedIsFocused]);
  const focusInput = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  const labelStyle: any = {
    position: "absolute",
    left: 10,
    right: 0,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 2],
      outputRange: [17, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
  };

  return (
    <TouchableWithoutFeedback onPress={focusInput}>
      <>
        <View style={themed.container}>
          <Animated.Text style={[themed.label, labelStyle]}>
            {label}
          </Animated.Text>
          <TextInput
            {...props}
            onPressIn={handleOnPressIn}
            selectionColor={theme.text.input}
            style={[themed.textInput, props.style]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            blurOnSubmit
            ref={inputRef}
            editable={type !== ETextFielType.Date}
          />
          {type === ETextFielType.Password && (
            <TouchableOpacity
              hitSlop={defaultHitSlot}
              style={styles.eyeContainer}
              onPress={togglePasswordVisibility}
            >
              <Feather
                name={props?.secureTextEntry ? "eye" : "eye-off"}
                size={20}
                color={theme.text.input}
              />
            </TouchableOpacity>
          )}
        </View>
        {error && <ErrorText text={error} />}
      </>
    </TouchableWithoutFeedback>
  );
};

const getThemeStyle = (theme: Theme) =>
  StyleSheet.create({
    label: {
      color: theme.text.input,
      ...Typo.placeholder,
    },
    textInput: {
      flex: 1,
      color: theme.text.input,
      fontFamily: FONTS.semiBold,
    },
    container: {
      paddingTop: 18,
      height: 56,
      paddingLeft: 10,
      backgroundColor: theme.background.input,
      marginVertical: 5,
      borderRadius: 10,
    },
  });

const styles = StyleSheet.create({
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
