import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { queryClient } from "@src/api/queryClient";
import { ErrorProvider } from "@src/context/ErrorContext";
import { ThemeProvider } from "@src/context/ThemeContext";
import { QueryClientProvider } from "@tanstack/react-query";
import Auth from "./Auth";
import { AUTH_PAGES, MAIN_PAGES, RootStackParamList } from "./Types";

import Main from "./Main";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  const isSignedIn = false;
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider>
          <ErrorProvider>
            <Stack.Navigator>
              {isSignedIn ? (
                <Stack.Screen
                  name={MAIN_PAGES.Main}
                  component={Main}
                  options={{ headerShown: false }}
                />
              ) : (
                <>
                  <Stack.Screen
                    name={AUTH_PAGES.Auth}
                    component={Auth}
                    options={{ headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
          </ErrorProvider>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
