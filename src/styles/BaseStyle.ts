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
    button: {
      primary: "#2B323B",
      secondary: "#ECEFF3",
    },
  },
  surface: "#FFFFFF",
  text: {
    default: "#2E3136",
    button: "#FFFFFF",
    input: "#5E646E",
    title: "#2E3136",
    link: "#68A9F1",
  },
  border: {
    default: "#E6E6E6",
  },
  success: {
    color: "#00875A",
    background: "",
  },
  error: {
    color: "#F91D45",
    background: "#FFEBE6",
  },
  cardBackGround: "#F7F8FA",
};

export const DarkTheme: Theme = {
  primary: "#F8B60D",
  background: {
    input: "red",
    card: "red",
    button: {
      primary: "",
      secondary: "",
    },
  },
  surface: "#1e1e1e",
  cardBackGround: "",
  text: {
    default: "",
    button: "",
    input: "",
    title: "",
    link: "",
  },
  border: {
    default: "",
  },
  success: {
    color: "",
    background: "",
  },
  error: {
    color: "",
    background: "",
  },
};

const COLORS = {
  primary: "#F8B60D",
  secondary: "#2B323B",
  tertiary: "#ECEFF3",
  brown: "#C59E74",
  red: "#EB5855",
  blue: "#52ACED",
  grey: "#C5D1DC",
  orange: "#CEA038",
  shadowColor: "#000",
  black: "black",
  darkGray: "gray",
  white: "white",
  tabIconFocused: "#2E3136",
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
