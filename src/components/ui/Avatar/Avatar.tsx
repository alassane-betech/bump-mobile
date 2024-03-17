import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // ou react-native-linear-gradient
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
              borderColor: "transparent", // Nécessaire pour iOS
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
              padding: 5,
              borderWidth: 0.4,
            },
          ]}
        >
          <Image source={{ uri: imageUri }} style={styles.avatarImage} />
        </View>
        <View
          style={{
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
          }}
        >
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
    padding: 2, // l'espace pour la bordure du dégradé
    backgroundColor: "white",
    overflow: "hidden", // Assurez-vous que l'image ne déborde pas
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  avatarContainer: {
    justifyContent: "center",
    padding: 3,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Avatar;
