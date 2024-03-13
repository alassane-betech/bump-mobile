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
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function BirthdateForm() {
  const [date, setDate] = useState(null);
  const { userInfo, updateUser } = useSignup();
  const [errorText, setErrorText] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();
  const submitForm = () => {
    setErrorText("");
    const birthdate = date || userInfo.birthdate;
    if (birthdate) {
      updateUser({ birthdate });
      navigation.navigate(AUTH_PAGES.Username);
    } else {
      setErrorText("Renseigne ce champs");
    }
  };

  const showHideDatePicker = () => setShowDatePicker(!showDatePicker);

  const handleConfirm = (date: Date) => {
    setDate(date);
    setShowDatePicker(false);
  };

  const getValue = () => {
    if (date) {
      return formatDate(date);
    } else if (userInfo.birthdate) {
      return formatDate(new Date(userInfo.birthdate));
    }
    return "";
  };
  return (
    <AuthContainer
      buttonTitle="Créer mon compte"
      onSubmit={submitForm}
      title="Date de naissance"
    >
      <>
        <TextField
          onPress={showHideDatePicker}
          label="Date de naissance"
          type={ETextFielType.Date}
          value={getValue()}
          error={errorText}
        />

        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          maximumDate={new Date()}
          onConfirm={handleConfirm}
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
