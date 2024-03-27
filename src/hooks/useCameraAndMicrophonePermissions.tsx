import { useEffect, useState } from "react";
import {
  useCameraPermission,
  useMicrophonePermission,
} from "react-native-vision-camera";

const useCameraAndMicrophonePermissions = () => {
  const {
    hasPermission: cameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const {
    hasPermission: microphonePermission,
    requestPermission: requestMicrophonePermission,
  } = useMicrophonePermission();
  const [allPermissionsGranted, setAllPermissionsGranted] = useState(false);

  useEffect(() => {
    const checkPermissions = () => {
      setAllPermissionsGranted(cameraPermission && microphonePermission);
    };

    checkPermissions();

    if (!cameraPermission) {
      requestCameraPermission();
    }
    if (!microphonePermission) {
      requestMicrophonePermission();
    }
  }, [
    cameraPermission,
    microphonePermission,
    requestCameraPermission,
    requestMicrophonePermission,
  ]);

  return allPermissionsGranted;
};

export default useCameraAndMicrophonePermissions;
