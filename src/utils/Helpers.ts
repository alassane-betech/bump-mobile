import { Linking } from "react-native";

export const goToLink = (link: string) => Linking.openURL(link);
