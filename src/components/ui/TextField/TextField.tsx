import Feather from "@expo/vector-icons/Feather";
import ErrorText from "@src/components/shared/ErrorText/ErrorText";
import { useThemeContext } from "@src/context/ThemeContext";
import { FONTS, defaultHitSlot } from "@src/styles/BaseStyle";
import { Theme } from "@src/styles/Types";
import Typo from "@src/styles/Typo";
import React, { useRef, useState } from "react";
import {
  Animated,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

export enum ETextFielType {
  Password = "Password",
  Default = "Default",
  Date = "Date",
}
interface TextFieldProps extends TextInputProps {
  label: string;
  type?: ETextFielType;
  error?: string;
  isTextarea?: boolean;
  onPress?: () => void;
  togglePasswordVisibility?: () => void;
}
export const TextField = ({
  label,
  type = ETextFielType.Default,
  error,
  isTextarea,
  togglePasswordVisibility,
  onPress,
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

  const handleOnPressIn = () => {
    setIsFocused(true);
    if (onPress) {
      onPress();
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
    if (onPress) {
      onPress();
    }
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
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          themed.container,
          { height: isTextarea ? 97 : 56, paddingTop: isTextarea ? 25 : 18 },
        ]}
        onPress={focusInput}
      >
        <Animated.Text style={[themed.label, labelStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          multiline={isTextarea ? true : false}
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
      </TouchableOpacity>
      {error && <ErrorText text={error} />}
    </>
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
    zIndex: 1000,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
