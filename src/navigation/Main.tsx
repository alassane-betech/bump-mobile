import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@src/pages/home/Home";
import { MAIN_PAGES, MainStackParamList } from "./Types";

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <MainStack.Navigator initialRouteName={MAIN_PAGES.Home}>
      <MainStack.Screen
        name={MAIN_PAGES.Home}
        component={Home}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default Main;
