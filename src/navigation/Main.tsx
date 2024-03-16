import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { MAIN_PAGES } from "./Types";
import { CustomText } from "@src/components/ui/CustomText/CustomText";

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
    iconPath: null,
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
  return (
    <View style={styles.tabContainer}>
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
                <CustomText
                  style={[
                    styles.tabTitle,
                    { color: focused ? COLORS.black : COLORS.darkGray },
                  ]}
                >
                  {route.title}
                </CustomText>
              ),
              tabBarIcon: ({ focused }) =>
                index !== 2 ? (
                  <View style={{ position: "relative" }}>
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
      <View style={styles.whiteBackground} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  activeDot: {
    position: "absolute",
    top: "-36%",
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
    marginBottom: 5,
  },
  tabTitle: {
    fontSize: 10,
    fontFamily: FONTS.bold,
  },
  image: {
    marginTop: "55%",
    width: width * 0.23,
    height: height * 0.23,
  },
  whiteBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: COLORS.white,
  },
});
