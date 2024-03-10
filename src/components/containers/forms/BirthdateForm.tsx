import { useNavigation } from "@react-navigation/native";
import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import {
  ETextFielType,
  TextField,
} from "@src/components/ui/TextField/TextField";
import { formatDate } from "@src/utils/Helpers";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function BirthdateForm() {
  const [date, setDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();
  const submitForm = () => {
    // Should store data and go to next screen!
  };

  const onChange = (event: any, selectedDate: Date) => {
    setShowDatePicker(false);
    setDate(formatDate(selectedDate));
  };

  const showHideDatePicker = () => setShowDatePicker(!showDatePicker);

  return (
    <AuthContainer
      buttonTitle="Créer mon compte"
      onSubmit={submitForm}
      showDatePicker={showDatePicker}
      onDateChange={onChange}
      title="Date de naissance"
    >
      <>
        <TextField
          onPressIn={showHideDatePicker}
          label="Date de naissance"
          type={ETextFielType.Date}
          value={date?.toString() || ""}
          error={""}
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
