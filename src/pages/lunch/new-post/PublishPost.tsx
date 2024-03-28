import { useRoute } from "@react-navigation/native";
import BackButton from "@src/components/shared/BackButton/BackButton";
import ScreenHeader from "@src/components/shared/ScreenHeader/ScreenHeader";
import { useThemeContext } from "@src/context/ThemeContext";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import Typo from "@src/styles/Typo";
import CustomButton, {
  EButtonVariant,
} from "@src/components/ui/CustomButton/CustomButton";
import { FontAwesome6 } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useMemo } from "react";
import { EMediaType, Media } from "@src/components/containers/Camera/types";

export default function PublishPost() {
  const { theme } = useThemeContext();
  const { params } = useRoute();
  const { media } = params as { media: Media };
  const uri = useMemo(() => `file://${media.mediaUri}`, [media]);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        withBottomBorder
        title="Post"
        iconLeft={<BackButton color={theme.text.input} />}
      />

      <View style={styles.content}>
        <View style={styles.detail}>
          {media.type === EMediaType.Image ? (
            <Image
              source={{
                uri,
              }}
              resizeMode={
                media.uploaded && media.type === EMediaType.Image
                  ? "contain"
                  : "cover"
              }
              style={styles.previewImage}
            />
          ) : (
            <Video
              resizeMode={ResizeMode.COVER}
              source={{ uri }}
              style={styles.previewImage}
            />
          )}
          <CustomText style={styles.textTitle} variant={ETextVariant.Button}>
            Description
          </CustomText>
          <CustomText style={styles.textDesc} variant={ETextVariant.Body}>
            Ajouter des détails à votre publication pour obtenir plus
            d’engagement sur votre publication.
          </CustomText>

          <CustomButton
            iconLeft={<FontAwesome6 name="hashtag" size={15} color="black" />}
            title="Hashtags"
            style={[{ borderColor: theme.border.default }, styles.htagButton]}
          />
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonItem}>
            <CustomButton
              style={styles.fullWidth}
              title="Brouillon"
              variant={EButtonVariant.Secondary}
            />
          </View>
          <View style={styles.buttonItem}>
            <CustomButton
              style={styles.fullWidth}
              title="Publier"
              variant={EButtonVariant.Primary}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  detail: {
    flex: 1,
  },
  buttons: {
    flex: 1 / 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
  },
  textTitle: {
    marginTop: 10,
  },
  textDesc: {
    marginTop: 10,
    width: "90%",
    ...Typo.button,
  },
  htagButton: {
    marginTop: 15,
    width: "40%",
    backgroundColor: "white",
    borderWidth: 1,
    height: 40,
  },
  buttonItem: { width: "48%" },
  fullWidth: { width: "100%" },
  previewImage: {
    width: "40%",
    height: "35%",
    borderRadius: 10,
  },
});
