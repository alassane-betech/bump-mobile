import { NavigationProp, RouteProp } from "@react-navigation/native";
import { queryClient } from "@src/api/queryClient";
import { Header } from "@src/components/containers/Header/Header";
import Avatar from "@src/components/ui/Avatar/Avatar";
import { TextField } from "@src/components/ui/TextField/TextField";
import { useUpdateUser } from "@src/hooks/useUsers";
import { PRIVATE_PAGES, ProfilStackParamList } from "@src/navigation/Types";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { QueryKeys } from "@src/types/userTypes";
import * as ImagePicker from "expo-image-picker";
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
  const {
    username: currentUsername,
    description: currentDesc,
    profilePicture,
  } = route?.params;

  const [username, setUsername] = useState<string>(currentUsername);
  const [description, setDescription] = useState<string>(currentDesc);
  const [pickedImage, setPickedImage] = useState<string>(null);
  const { mutateAsync: updateUser, isPending } = useUpdateUser();

  const handleUpdate = () => {
    const body = { username, description };
    updateUser(body, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
      },
    }).then(() => {
      navigation.navigate(PRIVATE_PAGES.Profil);
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    setPickedImage(result?.assets[0]?.uri);
  };

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
            imageUri={pickedImage ? pickedImage : profilePicture}
            type="default"
            size={75}
            onEdit={pickImage}
          />
        </View>
        <Text style={styles.editImageText}>Modifier la photo</Text>

        <TextField
          label={labels.USERNAME}
          onChangeText={setUsername}
          defaultValue={username}
          autoCapitalize="none"
        />
        <TextField
          isTextarea
          label={labels.DESCRIPTION}
          onChangeText={setDescription}
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
