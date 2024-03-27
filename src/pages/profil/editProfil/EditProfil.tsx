import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Header } from "@src/components/containers/Header/Header";
import Avatar from "@src/components/ui/Avatar/Avatar";
import { TextField } from "@src/components/ui/TextField/TextField";
import { useUpdateUser } from "@src/hooks/useUsers";
import { PRIVATE_PAGES, ProfilStackParamList } from "@src/navigation/Types";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { DEFAULT_IMAGE } from "@src/utils/Seed";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface EditProfilProps {
  route: RouteProp<ProfilStackParamList, PRIVATE_PAGES.EditProfil>;
  navigation: NavigationProp<ProfilStackParamList, PRIVATE_PAGES.EditProfil>;
}

enum labels {
  USERNAME = "Username",
  DESCRIPTION = "Bio",
}

export const EditProfil: React.FC<EditProfilProps> = ({
  route,
  navigation,
}) => {
  const { user } = route?.params;

  const [username, setUsername] = useState<string>(user?.username);
  const [description, setDescription] = useState<string>(user?.description);
  const { mutateAsync: updateUser, isPending } = useUpdateUser();

  const handleOnChange = (text: string, name: string) => {
    const setValue = {
      [labels.USERNAME]: setUsername,
      [labels.DESCRIPTION]: setDescription,
    };

    const setValueFunction = setValue[name];
    if (setValueFunction) {
      setValueFunction(text);
    }
  };

  const handleUpdate = () => {
    const body = { username, description };
    updateUser(body).then(() => {
      navigation.navigate(PRIVATE_PAGES.Profil);
    });
  };

  const onEditImage = () => {};

  return (
    <View style={styles.container}>
      <Header
        isRightButton
        rightButton={
          !isPending ? (
            <Text style={styles.saveButton}>Enregistrer</Text>
          ) : (
            <ActivityIndicator size="small" color={COLORS.tertiary} />
          )
        }
        onRightButtonPress={handleUpdate}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Édition du profil</Text>
        <View style={styles.profilPic}>
          <Avatar
            isEditAvatar
            profilAvatar
            imageUri={user?.profilePicture ?? DEFAULT_IMAGE}
            type="default"
            size={75}
            onEdit={onEditImage}
          />
        </View>
        <Text style={styles.editImageText}>Modifier la photo</Text>

        <TextField
          label={labels.USERNAME}
          onChangeText={(text) => handleOnChange(text, labels.USERNAME)}
          defaultValue={username}
          autoCapitalize="none"
        />
        <TextField
          isTextarea
          label={labels.DESCRIPTION}
          onChangeText={(text) => handleOnChange(text, labels.DESCRIPTION)}
          defaultValue={description}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  saveButton: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.extraBold,
  },
  profilPic: {
    marginTop: 20,
    marginLeft: 10,
  },
  editImageText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
});
