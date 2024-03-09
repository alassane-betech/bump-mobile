import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Name from "@src/pages/auth/signup/Name";
import WelcomePage from "@src/pages/welcomePage/WelcomePage";
import { AuthStackParamList, PAGES } from "./Types";
import Credentials from "@src/pages/auth/signup/Credentials";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PAGES.WelcomePage}
        component={WelcomePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={PAGES.Name}
        component={Name}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PAGES.Credentials}
        component={Credentials}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
