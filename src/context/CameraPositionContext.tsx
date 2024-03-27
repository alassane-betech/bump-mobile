import { createContext, useContext, useState, ReactNode } from "react";

type CameraPosition = "front" | "back";
interface CameraContextType {
  cameraPosition: CameraPosition;
  toggleCameraPosition: () => void;
}

const CameraPositionContext = createContext<CameraContextType | undefined>(
  undefined
);

export const useCameraPositionContext = () => {
  const context = useContext(CameraPositionContext);
  if (context === undefined) {
    throw new Error("useCameraContext must be used within a CameraProvider");
  }
  return context;
};

export const CameraPositionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cameraPosition, setCameraPosition] = useState<CameraPosition>("back");

  const toggleCameraPosition = () => {
    setCameraPosition((prevPosition) =>
      prevPosition === "back" ? "front" : "back"
    );
  };

  return (
    <CameraPositionContext.Provider
      value={{ cameraPosition, toggleCameraPosition }}
    >
      {children}
    </CameraPositionContext.Provider>
  );
};
