import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import { Checkbox } from "@src/components/ui/Checkbox/Checkbox";
import {
  ETextFielType,
  TextField,
} from "@src/components/ui/TextField/TextField";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { AUTH_PAGES } from "@src/navigation/Types";

interface FormValues {
  email: string;
  password: string;
}

type PasswordCriteria = {
  minLength: boolean;
  oneDigit: boolean;
  oneSpecialChar: boolean;
};

const passwordCriteriaRegex = {
  oneDigit: /\d/, // Au moins un chiffre
  oneSpecialChar: /[^A-Za-z0-9]/, // Au moins un caractère spécial
};
const CredentialsValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Adresse email invalide")
    .required("Renseigne ce champs"),
  password: Yup.string()
    .required("Renseigne ce champs")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      passwordCriteriaRegex.oneDigit,
      "Le mot de passe doit contenir au moins un chiffre"
    )
    .matches(
      passwordCriteriaRegex.oneSpecialChar,
      "Le mot de passe doit contenir au moins un caractère spécial"
    ),
});

export default function CredentialsForm() {
  const navigation = useNavigation();
  const [passwordCriteria, setPasswordCriteria] = useState<PasswordCriteria>({
    minLength: false,
    oneDigit: false,
    oneSpecialChar: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const submitForm = (values: FormValues) => {
    // Should store data and go to next screen
    navigation.navigate(AUTH_PAGES.Username);
  };

  const isDisabledButton = false;
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
        useEffect(() => {
          const criteria: PasswordCriteria = {
            minLength: values.password.length >= 8,
            oneDigit: passwordCriteriaRegex.oneDigit.test(values.password),
            oneSpecialChar: passwordCriteriaRegex.oneSpecialChar.test(
              values.password
            ),
          };
          setPasswordCriteria(criteria);
        }, [values.password]);
        return (
          <AuthContainer
            isSubmitButtonDisabled={isDisabledButton}
            onSubmit={handleSubmit}
            title="Identifiants"
            buttonTitle="Continuer"
          >
            <View>
              <TextField
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
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
              <View>
                <Checkbox
                  isChecked={!!passwordCriteria.minLength}
                  title="Minimum 8 caractères"
                />
                <Checkbox
                  isChecked={!!passwordCriteria.oneDigit}
                  title="Au moins un chiffre"
                />
                <Checkbox
                  isChecked={!!passwordCriteria.oneSpecialChar}
                  title="Au moins un caractère spécial"
                />
              </View>
            </View>
          </AuthContainer>
        );
      }}
    </Formik>
  );
}
