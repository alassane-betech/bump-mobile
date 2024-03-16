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
import { useSignup } from "@src/context/SignupContext";
import { useValidateEmail } from "@src/hooks/useUsers";

export interface CredentialsFormValues {
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
export const CredentialsValidationSchema = Yup.object().shape({
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
  const { userInfo, updateUser } = useSignup();
  const { mutateAsync: validateEmail, isPending } = useValidateEmail();
  const [emailExists, setEmailExists] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState<PasswordCriteria>({
    minLength: false,
    oneDigit: false,
    oneSpecialChar: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const submitForm = ({ email, password }: CredentialsFormValues) => {
    setEmailExists(false);
    validateEmail(email).then((data) => {
      if (data) {
        updateUser({ email, password });
        navigation.navigate(AUTH_PAGES.Birthdate);
      } else {
        setEmailExists(true);
      }
    });
  };

  return (
    <Formik
      initialValues={{ email: userInfo.email, password: userInfo.password }}
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
            onSubmit={handleSubmit}
            title="Identifiants"
            loading={isPending}
            buttonTitle="Continuer"
          >
            <View>
              <TextField
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
                keyboardType="email-address"
                error={
                  emailExists
                    ? "Adresse email déjà utilisée"
                    : touched.email && errors.email && errors.email
                }
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
