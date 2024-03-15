import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BumpPlusEgg } from "@src/assets/svgs/BumpPlusEgg";
import { DuelsIcon } from "@src/assets/svgs/DuelsIcon";
import { DuelsIconFocused } from "@src/assets/svgs/DuelsIconFocused";
import { HomeIcon } from "@src/assets/svgs/HomeIcon";
import { HomeIconFocused } from "@src/assets/svgs/HomeIconFocused";
import { LunchIcon } from "@src/assets/svgs/LunchIcon";
import { LunchIconFocused } from "@src/assets/svgs/LunchIconFocused";
import { ProfileIcon } from "@src/assets/svgs/ProfileIcon";
import { ProfileIconFocused } from "@src/assets/svgs/ProfileIconFocused";
import { Duels } from "@src/pages/duels/Duels";
import { Home } from "@src/pages/home/Home";
import { Lunch } from "@src/pages/lunch/Lunch";
import { Profil } from "@src/pages/profil/Profil";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MAIN_PAGES } from "./Types";

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get("screen");

const routes = [
  {
    key: MAIN_PAGES.Home,
    title: "Accueil",
    component: Home,
    iconPath: <HomeIcon />,
    iconFocusedPath: <HomeIconFocused />,
  },
  {
    key: MAIN_PAGES.Lunch,
    title: "Lunch",
    component: Lunch,
    iconPath: <LunchIcon />,
    iconFocusedPath: <LunchIconFocused />,
  },
  {
    key: "eggButton",
    title: null,
    component: function EmptyComponent() {
      return null;
    },
    iconPath: <BumpPlusEgg />,
    iconFocusedPath: null,
  },
  {
    key: MAIN_PAGES.Duels,
    title: "Duels",
    component: Duels,
    iconPath: <DuelsIcon />,
    iconFocusedPath: <DuelsIconFocused />,
  },
  {
    key: MAIN_PAGES.Profil,
    title: "Profil",
    component: Profil,
    iconPath: <ProfileIcon />,
    iconFocusedPath: <ProfileIconFocused />,
  },
];

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDotAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(activeDotAnim, {
      toValue: activeIndex,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [activeIndex]);

  const activeDotPosition = activeDotAnim.interpolate({
    inputRange: routes.map((_, index) => index),
    outputRange: routes.map((_, index) => index * 50),
  });

  return (
    <Tab.Navigator
      initialRouteName={MAIN_PAGES.Home}
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {routes?.map((route, index) => (
        <Tab.Screen
          key={route.key}
          name={route.key}
          component={route.component}
          listeners={({ navigation }) =>
            index === 2 && {
              tabPress: (event) => {
                event.preventDefault();
                // navigate to screen ?
                //navigation.navigate("screen")
              },
            }
          }
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <Text
                style={[
                  styles.tabTitle,
                  { color: focused ? COLORS.black : COLORS.darkGray },
                ]}
              >
                {route.title}
              </Text>
            ),
            tabBarIcon: ({ focused }) =>
              index !== 2 ? (
                <View>
                  {focused && <View style={styles.activeDot} />}
                  {focused ? route.iconFocusedPath : route.iconPath}
                </View>
              ) : (
                <Image
                  source={require("@src/assets/images/plusEgg.png")}
                  resizeMode="contain"
                  style={styles.image}
                />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  activeDot: {
    position: "absolute",
    top: "-35%",
    width: 50,
    alignSelf: "center",
    borderWidth: 1.5,
    backgroundColor: COLORS.orange,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: COLORS.orange,
  },
  tabBarStyle: {
    backgroundColor: COLORS.white,
  },
  tabTitle: {
    fontSize: 10,
    fontFamily: FONTS.bold,
  },
  image: {
    marginTop: "55%",
    width: width * 0.23,
    height: height * 0.2,
  },
});
