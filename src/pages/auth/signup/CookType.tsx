import AuthContainer from "@src/components/containers/AuthContainer/AuthContainer";
import ErrorText from "@src/components/shared/ErrorText/ErrorText";
import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import Hr from "@src/components/ui/Hr/Hr";
import { useSignup } from "@src/context/SignupContext";
import { useCreateUser } from "@src/hooks/useUsers";
import { window } from "@src/styles/BaseStyle";
import { COOK_TYPE } from "@src/utils/Data";
import { formatDate } from "@src/utils/Helpers";
import { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

export default function CookType() {
  const { userInfo, updateUser } = useSignup();
  const { mutate: createUser, data, isPending, isSuccess } = useCreateUser();

  const [showError, setShowError] = useState(false);

  const submit = () => {
    setShowError(false);
    if (userInfo.category) {
      requestCreateUser();
    } else {
      setShowError(true);
    }
  };

  const requestCreateUser = () => {
    const input = {
      ...userInfo,
      birthdate: formatDate(new Date(userInfo.birthdate), "dd/MM/yyyy"),
    };
    createUser(input);
  };
  useEffect(() => {
    if (data && isSuccess) {
      const { access_token } = data;
      alert(access_token);
      // should navigate to welcome page and pass the token via params!
    }
  }, [data, isSuccess]);

  return (
    <AuthContainer
      buttonTitle="Suivant"
      onSubmit={submit}
      loading={isPending}
      title="Quel type de cuisinier es-tu ?"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {COOK_TYPE?.map(({ id, name, value }, index) => {
          return (
            <View key={id}>
              <CategoryUserType
                selected={userInfo.category === value}
                showDivider={index === 2}
                type={name}
                value={value}
                onSelect={updateUser}
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

const CategoryUserType = ({
  type,
  showDivider,
  value,
  selected,
  onSelect,
}: {
  type: string;
  showDivider: boolean;
  value: string;
  selected?: boolean;
  onSelect: ({ category }: { category: string }) => void;
}) => {
  const handleSelect = () => onSelect({ category: value });
  return (
    <View>
      <CustomButton
        style={styles.buttonItem}
        title={type}
        onPress={handleSelect}
        variant={selected ? EButtonVariant.Primary : EButtonVariant.Secondary}
      />
      {showDivider && <Hr />}
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
