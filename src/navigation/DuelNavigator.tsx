import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PRIVATE_PAGES, DuelStackParamList } from "./Types";
import { Duels } from "@src/pages/duels/Duels";
import { DuelMode } from "@src/pages/duels/DuelMode";

const DuelStack = createNativeStackNavigator<DuelStackParamList>();

export default function DuelNavigator() {
  return (
    <DuelStack.Navigator>
      <DuelStack.Screen
        name={PRIVATE_PAGES.DuelsHome}
        component={Duels}
        options={{ headerShown: false }}
      />
      <DuelStack.Screen
        name={PRIVATE_PAGES.DuelMode}
        component={DuelMode}
        options={{ headerShown: false }}
      />
    </DuelStack.Navigator>
  );
}
