import {
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import Root from "@src/navigation/Root";
import { ActivityIndicator } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
    Modak: require("@src/assets/fonts/Modak-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return <Root />;
}
