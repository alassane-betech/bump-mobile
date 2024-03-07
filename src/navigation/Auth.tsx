import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Name from "@src/pages/auth/signup/Name";
import WelcomePage from "@src/pages/welcomePage/WelcomePage";
import { AuthStackParamList } from "./Types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Name"
        component={Name}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
