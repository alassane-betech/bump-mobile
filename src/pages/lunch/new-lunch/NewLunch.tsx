import { useNavigation } from "@react-navigation/native";
import CameraView from "@src/components/containers/Camera/CameraView";
import MediaPreview from "@src/components/containers/Camera/MediaPreview";
import CustomButton from "@src/components/ui/CustomButton/CustomButton";
import LunchTypeSelect, {
  NewLunchMode,
} from "@src/components/views/new-lunch/LunchTypeSelect";
import { PRIVATE_PAGES } from "@src/navigation/Types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface Media {
  mediaUri: string;
  type: "image" | "video";
  uploaded?: boolean;
}
export default function NewLunch() {
  const navigation = useNavigation();
  const [mode, setMode] = useState<NewLunchMode>(NewLunchMode.Post);
  const [media, setMedia] = useState<Media | null>(null);

  const handleClosePreview = () => setMedia(null);
  const handleCloseCamera = () => navigation.goBack();

  const handleGoNext = () => {
    if (mode === NewLunchMode.Lunch) {
      handleCloseCamera();
    } else if (mode === NewLunchMode.Post) {
      navigation.navigate(PRIVATE_PAGES.PublishPost, { media });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.camera}>
        {media !== null ? (
          <MediaPreview media={media} onClose={handleClosePreview} />
        ) : (
          <CameraView
            onClose={handleCloseCamera}
            onMediaCaptured={setMedia}
            mediaCaptured={media}
            onMediaUploaded={setMedia}
          />
        )}
      </View>
      <View style={styles.bottomButtonContainer}>
        {media ? (
          <CustomButton
            style={styles.button}
            onPress={handleGoNext}
            title={mode === NewLunchMode.Post ? "Suivant" : "Your lunch"}
          />
        ) : (
          <LunchTypeSelect activeMode={mode} setActiveMode={setMode} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    backgroundColor: "black",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bottomButtonContainer: {
    flex: 0.1,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: { backgroundColor: "white", width: "90%", height: 50 },
});
