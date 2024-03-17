import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupProvider } from "@src/context/SignupContext";
import { PRIVATE_PAGES, PrivateStackParamList } from "./Types";
import Main from "./Main";
import Story from "@src/components/containers/Story/Story";

const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();

export default function Private() {
  return (
    <SignupProvider>
      <PrivateStack.Navigator>
        <PrivateStack.Screen
          name={PRIVATE_PAGES.Main}
          component={Main}
          options={{ headerShown: false }}
        />
        <PrivateStack.Screen
          name={PRIVATE_PAGES.Story}
          component={Story}
          options={{ headerShown: false }}
        />
      </PrivateStack.Navigator>
    </SignupProvider>
  );
}
