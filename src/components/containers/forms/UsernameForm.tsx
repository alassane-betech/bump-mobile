import { useNavigation } from "@react-navigation/native";
import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import { TextField } from "@src/components/ui/TextField/TextField";
import { useSignup } from "@src/context/SignupContext";
import { AUTH_PAGES } from "@src/navigation/Types";
import { Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
  username: string;
}
const usernameValidationSchema = Yup.object().shape({
  username: Yup.string().required("Renseigne ce champ"),
});

export default function UsernameForm() {
  const navigation = useNavigation();
  const { userInfo, updateUser } = useSignup();

  const submitForm = ({ username }: FormValues) => {
    updateUser({ username });
    navigation.navigate(AUTH_PAGES.Cooktype);
  };

  return (
    <Formik
      initialValues={{ username: userInfo.username }}
      validationSchema={usernameValidationSchema}
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
          buttonTitle="Créer mon compte"
          onSubmit={handleSubmit}
          title="Nom d’utilisateur"
        >
          <TextField
            label="Nom d'utilisateur"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            error={touched.username && errors.username && errors.username}
          />
        </AuthContainer>
      )}
    </Formik>
  );
}
