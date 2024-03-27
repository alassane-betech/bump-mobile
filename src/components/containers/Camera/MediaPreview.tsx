import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import BackButton from "@src/components/shared/BackButton/BackButton";
import { useIsFocused } from "@react-navigation/native";
import { useIsForeground } from "@src/hooks/useIfForeground";
import { EMediaType, Media } from "./types";
interface MediaPreviewProps {
  media: Media;
  onClose: () => void;
}
export default function MediaPreview({ media, onClose }: MediaPreviewProps) {
  const { mediaUri, type, uploaded } = media;
  const [hasMediaLoaded, setHasMediaLoaded] = useState(false);
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

  const onMediaLoadEnd = useCallback(() => {
    setHasMediaLoaded(true);
  }, []);

  const uri = useMemo(() => `file://${mediaUri}`, [media]);

  return (
    <View style={[styles.container]}>
      {!hasMediaLoaded || (!isActive && <ActivityIndicator color={"gray"} />)}
      {type === EMediaType.Image && isActive && (
        <Image
          source={{ uri }}
          style={StyleSheet.absoluteFill}
          resizeMode={uploaded ? "contain" : "cover"}
          onLoadEnd={onMediaLoadEnd}
        />
      )}

      {type === EMediaType.Video && isActive && (
        <Video
          source={{ uri }}
          resizeMode={uploaded ? ResizeMode.CONTAIN : ResizeMode.COVER}
          shouldPlay
          isLooping={true}
          style={StyleSheet.absoluteFill}
          onLoad={onMediaLoadEnd}
          useNativeControls
        />
      )}

      <BackButton style={styles.backButton} onPress={onClose} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    width: 40,
    height: 40,
  },
});
