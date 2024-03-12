import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupProvider } from "@src/context/SignupContext";
import Birthdate from "@src/pages/auth/signup/Birthdate";
import CookType from "@src/pages/auth/signup/CookType";
import Credentials from "@src/pages/auth/signup/Credentials";
import Fullname from "@src/pages/auth/signup/Fullname";
import Username from "@src/pages/auth/signup/Username";
import WelcomePage from "@src/pages/welcomePage/WelcomePage";
import { AUTH_PAGES, AuthStackParamList } from "./Types";
import { LoggedInWelcomePage } from "@src/pages/auth/loggedInWelcomePage/LoggedInWelcomePage";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function Auth() {
  return (
    <SignupProvider>
      <AuthStack.Navigator initialRouteName={AUTH_PAGES.LoggedInWelcomePage}>
        <AuthStack.Screen
          name={AUTH_PAGES.WelcomePage}
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={AUTH_PAGES.Fullname}
          component={Fullname}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={AUTH_PAGES.Credentials}
          component={Credentials}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={AUTH_PAGES.Birthdate}
          component={Birthdate}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={AUTH_PAGES.Username}
          component={Username}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={AUTH_PAGES.Cooktype}
          component={CookType}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name={AUTH_PAGES.LoggedInWelcomePage}
          component={LoggedInWelcomePage}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </SignupProvider>
  );
}
