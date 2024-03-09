import { Dimensions } from "react-native";
import { Theme } from "./Types";

const FONTS = {
  regular: "NunitoSans_400Regular",
  semiBold: "NunitoSans_600SemiBold",
  bold: "NunitoSans_700Bold",
  extraBold: "NunitoSans_800ExtraBold",
  black: "NunitoSans_900Black",
  Logo: "Modak",
};

export const LighTheme: Theme = {
  primary: "#F8B60D",
  background: {
    input: "#ECEFF3",
    card: "",
  },
  surface: "#FFFFFF",
  text: {
    default: "#2E3136",
    button: "#FFFFFF",
    input: "#5E646E",
    title: "#2E3136",
    link: "#68A9F1",
  },
};

export const DarkTheme: Theme = {
  primary: "#F8B60D",
  background: {
    input: "red",
    card: "red",
  },
  surface: "#1e1e1e",
  text: {
    default: "",
    button: "",
    input: "",
    title: "",
    link: "",
  },
};

const COLORS = {
  primary: "#F8B60D",
  secondary: "#2B323B",
  tertiary: "#ECEFF3",
};

export { FONTS, COLORS };

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const deviceDiagonal = Math.sqrt(width ** 2 + height ** 2);

export const window = {
  width,
  height,
  isSmallDevice: deviceDiagonal <= 800,
};

export const defaultHitSlot = { top: 20, left: 20, bottom: 20, right: 20 };
