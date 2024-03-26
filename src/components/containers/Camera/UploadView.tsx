import { CustomText } from "@src/components/ui/CustomText/CustomText";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { Media } from "@src/pages/lunch/new-lunch/NewLunch";

interface UploadProps {
  onMediaUploaded: (media: Media) => void;
}
export default function UploadView({ onMediaUploaded }: UploadProps) {
  const [latestImage, setLatestImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const { assets } = await MediaLibrary.getAssetsAsync({
          first: 1,
          sortBy: [MediaLibrary.SortBy.creationTime],
          mediaType: [MediaLibrary.MediaType.photo],
        });

        if (assets.length > 0) {
          setLatestImage(assets[0].uri);
        }
      }
    })();
  }, []);

  const pickImageOrVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onMediaUploaded({
        mediaUri: result.assets[0].uri,
        type: result.assets[0].type,
        uploaded: true,
      });
    }
  };
  return (
    <TouchableOpacity onPress={pickImageOrVideo}>
      {latestImage && (
        <Image source={{ uri: latestImage }} style={styles.image} />
      )}
      <CustomText style={styles.uploadText}>Upload</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
  },
  uploadText: { textAlign: "center", marginTop: 5, color: "white" },
});
