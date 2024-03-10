import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fullname from "@src/pages/auth/signup/Fullname";
import WelcomePage from "@src/pages/welcomePage/WelcomePage";
import { AuthStackParamList, AUTH_PAGES } from "./Types";
import Credentials from "@src/pages/auth/signup/Credentials";
import Username from "@src/pages/auth/signup/Username";
import Birthdate from "@src/pages/auth/signup/Birthdate";
import CookType from "@src/pages/auth/signup/CookType";
import { SignupProvider } from "@src/context/SignupContext";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function Auth() {
  return (
    <SignupProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={AUTH_PAGES.WelcomePage}
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH_PAGES.Fullname}
          component={Fullname}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH_PAGES.Credentials}
          component={Credentials}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH_PAGES.Birthdate}
          component={Birthdate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH_PAGES.Username}
          component={Username}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AUTH_PAGES.Cooktype}
          component={CookType}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SignupProvider>
  );
}
