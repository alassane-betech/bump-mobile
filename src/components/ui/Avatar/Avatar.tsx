import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import { useThemeContext } from "@src/context/ThemeContext";
import { EggIcon } from "@src/assets/svgs/EggIcon";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@src/styles/BaseStyle";
type AvatarProps = {
  imageUri: string;
  isEditAvatar?: boolean;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  id?: string;
  type: "outlined" | "gradient" | "default";
  profilAvatar?: boolean;
  onEdit?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({
  imageUri,
  size = 75,
  borderColor = "gray",
  borderWidth = 2,
  id,
  type = "gradient",
  profilAvatar,
  isEditAvatar,
  onEdit,
}) => {
  const gradientSize = size + borderWidth * 2.5;
  const { theme } = useThemeContext();

  if (type === "gradient" && id !== "1") {
    return (
      <>
        {profilAvatar && (
          <View style={styles.eggIcon}>
            <EggIcon color={borderColor} />
          </View>
        )}
        <LinearGradient
          colors={
            !profilAvatar ? ["#F8B60D", "#A34F01"] : [borderColor, borderColor]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.gradient,
            {
              borderRadius: gradientSize / 2,
              width: gradientSize,
              height: gradientSize,
            },
          ]}
        >
          <View
            style={[
              styles.imageContainer,
              {
                backgroundColor: !profilAvatar ? "white" : null,
                padding: !profilAvatar ? 2 : 0,
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: borderWidth,
              },
            ]}
          >
            <Image
              source={{ uri: imageUri }}
              style={[styles.avatarImage, { borderRadius: size / 2 }]}
            />
          </View>
        </LinearGradient>
      </>
    );
  } else {
    return (
      <View>
        <View
          style={[
            styles.avatarContainer,
            {
              width: gradientSize,
              height: gradientSize,
              padding: type === "outlined" || id === "1" ? 5 : 0,
              borderWidth: type === "outlined" || id === "1" ? 0.4 : 0,
              borderRadius: gradientSize / 2,
              borderColor,
            },
          ]}
        >
          <Image source={{ uri: imageUri }} style={styles.avatarImage} />
          {isEditAvatar && (
            <>
              <TouchableOpacity
                onPress={onEdit}
                style={[
                  styles.blurImage,
                  {
                    width: gradientSize,
                    height: gradientSize,
                    borderRadius: gradientSize / 2,
                  },
                ]}
              />
              <Feather
                style={styles.camera}
                name="camera"
                size={24}
                color="white"
              />
            </>
          )}
        </View>
        {type === "outlined" ||
          (id === "1" && (
            <View style={styles.addButton}>
              <FontAwesome6
                name="circle-plus"
                size={24}
                color={theme.text.default}
              />
            </View>
          ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  gradient: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderColor: "transparent",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  addButton: {
    position: "absolute",
    bottom: -5,
    right: -8,
    borderColor: "white",
    width: 35,
    zIndex: 1000,
    height: 35,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  eggIcon: {
    position: "absolute",
    zIndex: 9999,
    bottom: 2,
    left: "1.5%",
  },
  blurImage: {
    zIndex: 99999,
    position: "absolute",
    opacity: 0.3,
    backgroundColor: COLORS.darkGray,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    zIndex: 99999,
    position: "absolute",
  },
});

export default Avatar;
