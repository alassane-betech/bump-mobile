import { useNavigation } from "@react-navigation/native";
import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import {
  ETextFielType,
  TextField,
} from "@src/components/ui/TextField/TextField";
import { useSignup } from "@src/context/SignupContext";
import { AUTH_PAGES } from "@src/navigation/Types";
import { formatDate } from "@src/utils/Helpers";
import { useState } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function BirthdateForm() {
  const [date, setDate] = useState("");
  const { updateUser } = useSignup();
  const [errorText, setErrorText] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();
  const submitForm = () => {
    if (date) {
      updateUser({ birthdate: date });
      navigation.navigate(AUTH_PAGES.Username);
    } else {
      setErrorText("Renseigne ce champs");
    }
  };

  const onChange = (event: any, selectedDate: Date) => {
    setErrorText("");
    // setShowDatePicker(false);
    setDate(formatDate(selectedDate));
  };

  const showHideDatePicker = () => setShowDatePicker(!showDatePicker);

  return (
    <AuthContainer
      buttonTitle="Créer mon compte"
      onSubmit={submitForm}
      title="Date de naissance"
    >
      <>
        {Platform.OS === "android" ? (
          <TouchableOpacity activeOpacity={1} onPress={showHideDatePicker}>
            <TextField
              label="Date de naissance"
              type={ETextFielType.Date}
              value={date?.toString() || ""}
              error={errorText}
            />
          </TouchableOpacity>
        ) : (
          <TextField
            onPressIn={showHideDatePicker}
            label="Date de naissance"
            type={ETextFielType.Date}
            value={date?.toString() || ""}
            error={errorText}
          />
        )}
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          maximumDate={new Date()}
          onConfirm={(date: any) => {
            setDate(formatDate(date));
            setShowDatePicker(false);
          }}
          display="spinner"
          locale="fr_FR"
          confirmTextIOS="Valider"
          cancelTextIOS="Annuler"
          onCancel={() => setShowDatePicker(false)}
        />
      </>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  cguContainer: {
    marginTop: 5,
    marginLeft: 3,
  },
});
