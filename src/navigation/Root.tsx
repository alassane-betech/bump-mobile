import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";
import { AUTH_PAGES, MAIN_PAGES, RootStackParamList } from "./Types";
import { ThemeProvider } from "@src/context/ThemeContext";
import Main from "./Main";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name={MAIN_PAGES.Main}
              component={Main}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name={AUTH_PAGES.Auth}
              component={Auth}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
