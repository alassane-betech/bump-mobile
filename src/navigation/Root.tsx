import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { queryClient } from "@src/api/queryClient";
import { ErrorProvider } from "@src/context/ErrorContext";
import { ThemeProvider } from "@src/context/ThemeContext";
import { QueryClientProvider } from "@tanstack/react-query";
import Auth from "./Auth";
import { AUTH_PAGES, MAIN_PAGES, RootStackParamList } from "./Types";

import Main from "./Main";
import { AuthContext, useAuthContext } from "@src/context/AuthContext";
import Loader from "@src/components/ui/Loader/Loader";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  const { state, authContext } = useAuthContext();

  if (state?.isLoading) return <Loader />;
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthContext.Provider value={{ state, authContext }}>
          <ThemeProvider>
            <ErrorProvider>
              <Stack.Navigator>
                {state.token ? (
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
        </AuthContext.Provider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
