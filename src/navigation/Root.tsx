import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";
import { RootStackParamList } from "./Types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
