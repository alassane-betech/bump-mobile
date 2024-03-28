import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { PRIVATE_PAGES, PrivateStackParamList } from "./Types";
import Main from "./Main";
import Story from "@src/components/containers/Story/Story";
import NewLunch from "@src/pages/lunch/new-lunch/NewLunch";
import PublishPost from "@src/pages/lunch/new-post/PublishPost";
import { CameraPositionProvider } from "@src/context/CameraPositionContext";

const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();
export const defaultModalScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_bottom",
};
export default function Private() {
  return (
    <CameraPositionProvider>
      <PrivateStack.Navigator>
        <PrivateStack.Screen
          name={PRIVATE_PAGES.Main}
          component={Main}
          options={{ headerShown: false }}
        />
        <PrivateStack.Screen
          name={PRIVATE_PAGES.Story}
          component={Story}
          options={defaultModalScreenOptions}
        />
        <PrivateStack.Screen
          name={PRIVATE_PAGES.NewLunch}
          component={NewLunch}
          options={defaultModalScreenOptions}
        />
        <PrivateStack.Screen
          name={PRIVATE_PAGES.PublishPost}
          component={PublishPost}
          options={{ headerShown: false }}
        />
      </PrivateStack.Navigator>
    </CameraPositionProvider>
  );
}
