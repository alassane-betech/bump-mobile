import { useIsFocused } from "@react-navigation/native";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import useCameraAndMicrophonePermissions from "@src/hooks/useCameraAndMicrophonePermissions";
import { useIsForeground } from "@src/hooks/useIfForeground";
import { EMediaType, Media } from "@src/pages/lunch/new-lunch/NewLunch";
import { useState, useRef, useCallback } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import {
  Camera,
  PhotoFile,
  VideoFile,
  useCameraDevice,
  useCameraFormat,
} from "react-native-vision-camera";
import CloseIcon from "@src/components/ui/CloseIcon/CloseIcon";
import UploadView from "./UploadView";
import { useCameraPositionContext } from "@src/context/CameraPositionContext";

interface CameraViewProps {
  mediaCaptured?: Media;
  onClose: () => void;
  onMediaUploaded: (media: Media) => void;
  onMediaCaptured: (media: Media) => void;
}
const CameraView = ({
  onMediaCaptured,
  mediaCaptured,
  onMediaUploaded,
  onClose,
}: CameraViewProps) => {
  const { cameraPosition, toggleCameraPosition } = useCameraPositionContext();
  const allPermissionsGranted = useCameraAndMicrophonePermissions();
  const cameraRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground && !mediaCaptured;
  const device = useCameraDevice(cameraPosition);

  const format = useCameraFormat(device, [
    { fps: 60 },
    { videoAspectRatio: 4 / 3 },
    { videoResolution: "max" },
    { photoAspectRatio: 4 / 3 },
    { photoResolution: "max" },
  ]);

  const takePhoto = async () => {
    if (!isRecording && cameraRef.current) {
      try {
        const photo: PhotoFile = await cameraRef.current.takePhoto();
        onMediaCaptured({ mediaUri: photo.path, type: EMediaType.Image });
      } catch (error) {
        Alert.alert("Erreur", "Impossible de prendre une photo");
      }
    }
  };

  const startRecording = async () => {
    if (cameraRef.current && !isRecording) {
      setIsRecording(true);
      try {
        await cameraRef.current.startRecording({
          onRecordingFinished: (video: VideoFile) => {
            onMediaCaptured({ mediaUri: video.path, type: EMediaType.Video });
            setIsRecording(false);
          },
          onRecordingError: (error: string) => {
            Alert.alert("Erreur", "Impossible d'enregistrer la vidéo");
            setIsRecording(false);
          },
        });
      } catch (error) {
        setIsRecording(false);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  const flip = useCallback(() => toggleCameraPosition(), []);

  if (device == null || !allPermissionsGranted) {
    return (
      <View style={styles.container}>
        <CustomText>Demande de permission en cours...</CustomText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={isActive}
        photo={true}
        video={true}
        audio={true}
        exposure={0}
        enableFpsGraph={true}
        orientation="portrait"
        format={format}
      />
      <View style={styles.control}>
        <TouchableOpacity onPress={flip}>
          <FontAwesome name="refresh" size={27} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.button, isRecording && styles.recordingButton]}
          onPress={takePhoto}
          onLongPress={startRecording}
          onPressOut={stopRecording}
        >
          <View
            style={[
              styles.innerButton,
              isRecording && styles.recordingInnerButton,
            ]}
          />
        </TouchableOpacity>
        <UploadView onMediaUploaded={onMediaUploaded} />
      </View>

      <CloseIcon onClose={onClose} style={styles.backButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  control: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 50,
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 10,
  },

  innerButton: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  recordingButton: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  recordingInnerButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "red",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 40,
    height: 40,
  },
});

export default CameraView;
