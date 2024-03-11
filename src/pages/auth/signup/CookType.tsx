import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import ErrorText from "@src/components/shared/ErrorText/ErrorText";
import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import Hr from "@src/components/ui/Hr/Hr";
import { useSignup } from "@src/context/SignupContext";
import { window } from "@src/styles/BaseStyle";
import { COOK_TYPE } from "@src/utils/Data";
import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

export default function CookType() {
  const [selected, setSelected] = useState("");
  const { updateUser } = useSignup();
  const [showError, setShowError] = useState(false);
  const submit = () => {
    setShowError(false);
    if (selected) {
      updateUser({ userType: selected });
    } else {
      setShowError(true);
    }
  };

  return (
    <AuthContainer
      buttonTitle="Suivant"
      onSubmit={submit}
      title="Quel type de cuisinier es-tu ?"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {COOK_TYPE?.map(({ id, name }, index) => {
          return (
            <View key={id}>
              <UserType
                selected={selected === name}
                index={index}
                type={name}
                onSelect={setSelected}
              />
            </View>
          );
        })}
        {showError && (
          <ErrorText withBackground text="Sélectionne une réponse" />
        )}
      </ScrollView>
    </AuthContainer>
  );
}

const UserType = ({
  type,
  index,
  selected,
  onSelect,
}: {
  type: string;
  index: number;
  selected?: boolean;
  onSelect: (type: string) => void;
}) => {
  const handleSelect = () => onSelect(type);
  return (
    <View>
      <CustomButton
        style={styles.buttonItem}
        title={type}
        onPress={handleSelect}
        variant={selected ? EButtonVariant.Primary : EButtonVariant.Secondary}
      />
      {index === 2 && <Hr />}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonItem: {
    marginVertical: 5,
    width: window.width / 2 + 150,
  },
  scrollView: { alignItems: "center" },
});
