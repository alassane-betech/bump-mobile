import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import { TextField } from "@src/components/ui/TextField/TextField";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Name() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const submitForm = () => {
    // Should store data and go to next screen!
  };

  const isDisabledButton = useMemo(() => {
    return firstname?.length < 2 || lastname?.length < 2;
  }, [firstname, lastname]);
  return (
    <AuthContainer
      isSubmitButtonDisabled={isDisabledButton}
      onSubmit={submitForm}
      title="Quel est ton nom ?"
    >
      <View>
        <TextField
          label="Prénom"
          value={firstname}
          onChangeText={setFirstname}
        />
        <TextField label="Nom" value={lastname} onChangeText={setLastname} />
        <CustomText style={styles.cguContainer}>
          En appuyant sur “continuer et acceptez”, vous reconnaissez avoir lu
          nos conditions de{" "}
          <CustomText link="https://google.com">
            protection des données personnelles
          </CustomText>{" "}
          et accepter nos{" "}
          <CustomText link="https://google.com">
            conditions d’utilisations
          </CustomText>
        </CustomText>
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
