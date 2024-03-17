import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import { useThemeContext } from "@src/context/ThemeContext";
type AvatarProps = {
  imageUri: string;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  id?: string;
  type: "default" | "gradient";
};

const Avatar: React.FC<AvatarProps> = ({
  imageUri,
  size = 75,
  borderColor = "gray",
  borderWidth = 2,
  id,
  type = "gradient",
}) => {
  const gradientSize = size + borderWidth * 2.5; // Ajoutez la bordure à la taille totale
  const { theme } = useThemeContext();

  if (type === "gradient" && id !== "1") {
    return (
      <LinearGradient
        colors={["#F8B60D", "#A34F01"]}
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
              borderRadius: gradientSize / 2,
              borderColor,
            },
          ]}
        >
          <Image source={{ uri: imageUri }} style={styles.avatarImage} />
        </View>
        <View style={styles.addButton}>
          <FontAwesome6
            name="circle-plus"
            size={24}
            color={theme.text.default}
          />
        </View>
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
    padding: 2,
    borderColor: "transparent",
    backgroundColor: "white",
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
    padding: 5,
    borderWidth: 0.4,
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
});

export default Avatar;
