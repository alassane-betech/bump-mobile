import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import { TextField } from "@src/components/ui/TextField/TextField";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Credentials() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    // Should store data and go to next screen!
  };

  const isDisabledButton = false;
  return (
    <AuthContainer
      isSubmitButtonDisabled={isDisabledButton}
      onSubmit={submitForm}
      title="Identifiants"
      buttonTitle="Continuer"
    >
      <View>
        <TextField label="Email" value={email} onChangeText={setEmail} />
        <TextField
          secureTextEntry={true}
          label="Mot de passe"
          value={password}
          onChangeText={setPassword}
        />
      </View>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  cguContainer: {
    marginTop: 5,
    marginLeft: 3,
  },
});
