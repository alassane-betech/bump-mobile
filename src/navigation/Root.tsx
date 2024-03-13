import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";
import { RootStackParamList } from "./Types";
import { ThemeProvider } from "@src/context/ThemeContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@src/api/queryClient";
import { ErrorProvider } from "@src/context/ErrorContext";

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
          </ErrorProvider>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
