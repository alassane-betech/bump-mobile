import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import {
  ETextFielType,
  TextField,
} from "@src/components/ui/TextField/TextField";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import {
  CredentialsFormValues,
  CredentialsValidationSchema,
} from "./CredentialsForm";
import { useLogin } from "@src/hooks/useUsers";
import { AuthContext } from "@src/context/AuthContext";

export default function LoginForm() {
  const { authContext } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { mutate: login, data, isPending, isSuccess } = useLogin();

  const handleTogglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const submitForm = ({ email, password }: CredentialsFormValues) => {
    login({ email, password });
  };

  useEffect(() => {
    if (data && isSuccess) {
      authContext.setToken(data.access_token);
    }
  }, [data, isSuccess]);

  const onForgotPasswordPress = () => alert("FORGOT");

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={CredentialsValidationSchema}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        return (
          <AuthContainer
            onSubmit={handleSubmit}
            loading={isPending}
            title="Heureux de te revoir"
            buttonTitle="Connexion"
          >
            <View>
              <TextField
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
                keyboardType="email-address"
                error={touched.email && errors.email && errors.email}
              />
              <TextField
                secureTextEntry={!isPasswordVisible}
                togglePasswordVisibility={handleTogglePasswordVisibility}
                label="Mot de passe"
                autoCapitalize="none"
                type={ETextFielType.Password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={touched.password && errors.password && errors.password}
              />
              <View style={styles.forgotPasswordContainer}>
                <CustomText>Mot de passe oublié ?</CustomText>
                <CustomText
                  onPress={onForgotPasswordPress}
                  style={styles.textButton}
                  variant={ETextVariant.Button}
                >
                  Réinitialiser
                </CustomText>
              </View>
            </View>
          </AuthContainer>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textButton: {
    textDecorationLine: "underline",
  },
});
