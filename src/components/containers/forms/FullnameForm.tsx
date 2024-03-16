import { useNavigation } from "@react-navigation/native";
import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import { TextField } from "@src/components/ui/TextField/TextField";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSignup } from "@src/context/SignupContext";
import { AUTH_PAGES } from "@src/navigation/Types";

interface FormValues {
  firstname: string;
  lastname: string;
}
const nameValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("Renseigne ce champ"),
  lastname: Yup.string().required("Renseigne ce champ"),
});

export default function NameForm() {
  const { userInfo, updateUser } = useSignup();
  const navigation = useNavigation();

  const submitForm = ({ firstname, lastname }: FormValues) => {
    updateUser({ firstname, lastname });
    navigation.navigate(AUTH_PAGES.Credentials);
  };

  return (
    <Formik
      initialValues={{
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
      }}
      validationSchema={nameValidationSchema}
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
      }) => (
        <AuthContainer
          buttonTitle="Continuer et acceptez "
          onSubmit={handleSubmit}
          title="Quel est ton nom ?"
        >
          <>
            <TextField
              label="Prénom"
              value={values.firstname}
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              error={touched.firstname && errors.firstname && errors.firstname}
            />
            <TextField
              label="Nom"
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
              error={touched.lastname && errors.lastname && errors.lastname}
            />
            <CustomText style={styles.cguContainer}>
              En appuyant sur “continuer et acceptez”, vous reconnaissez avoir
              lu nos conditions de{" "}
              <CustomText link="https://google.com">
                protection des données personnelles
              </CustomText>{" "}
              et accepter nos{" "}
              <CustomText link="https://google.com">
                conditions d’utilisations
              </CustomText>
            </CustomText>
          </>
        </AuthContainer>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  cguContainer: {
    marginTop: 5,
    marginLeft: 3,
  },
});
