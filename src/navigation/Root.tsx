import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";
import { RootStackParamList } from "./Types";
import { ThemeProvider } from "@src/context/ThemeContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator>
          {isSignedIn ? (
            <></>
          ) : (
            <>
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
