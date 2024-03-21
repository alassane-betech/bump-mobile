import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeaderBoard from "@src/pages/leaderBoard/LeaderBoard";
import { Profil } from "@src/pages/profil/Profil";
import { PRIVATE_PAGES, ProfilStackParamList } from "./Types";

const ProfilStack = createNativeStackNavigator<ProfilStackParamList>();

export default function ProfilNavigator() {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen
        name={PRIVATE_PAGES.Profil}
        component={Profil}
        options={{ headerShown: false }}
      />
      <ProfilStack.Screen
        name={PRIVATE_PAGES.LeaderBoard}
        component={LeaderBoard}
        options={{ headerShown: false }}
      />
    </ProfilStack.Navigator>
  );
}
