import { useNavigation } from "@react-navigation/native";
import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import { TextField } from "@src/components/ui/TextField/TextField";
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

  const submitForm = ({ username }: FormValues) => {
    console.log(username);
    // Should store data and go to next screen!
    navigation.navigate("Credentials");
  };

  return (
    <Formik
      initialValues={{ username: "" }}
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
