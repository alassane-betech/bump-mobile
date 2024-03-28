import { NavigationProp } from "@react-navigation/native";
import { RankingTab } from "@src/components/containers/Tabs/RankingTab/RankingTab";
import VideoTab from "@src/components/containers/Tabs/VideoTab/VideoTab";
import { UserInfos } from "@src/components/containers/UserInfos/UserInfos";
import {
  CustomTopTab,
  ETabs,
} from "@src/components/shared/CustomTopTab/CustomTopTab";
import Loader from "@src/components/ui/Loader/Loader";
import { useThemeContext } from "@src/context/ThemeContext";
import { useGetUser } from "@src/hooks/useUsers";
import { PRIVATE_PAGES, ProfilStackParamList } from "@src/navigation/Types";
import { window } from "@src/styles/BaseStyle";
import { profileVideos } from "@src/utils/Seed";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export interface ProfilProps {
  navigation: NavigationProp<ProfilStackParamList, PRIVATE_PAGES.Profil>;
}

export const Profil: React.FC<ProfilProps> = ({ navigation }) => {
  const { theme } = useThemeContext();

  const { data, isPending, refetch } = useGetUser();

  const [activeTab, setActiveTab] = useState<ETabs>(ETabs.VIDEOS);
  const translateXView1 = useSharedValue(0);
  const translateXView2 = useSharedValue(0);

  useEffect(() => {
    if (activeTab === ETabs.VIDEOS) {
      translateXView1.value = withTiming(0, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
      translateXView2.value = withTiming(-window.width, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      translateXView1.value = withTiming(window.width, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
      translateXView2.value = withTiming(0, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <Image
        source={require("@src/assets/images/profilBackground.png")}
        resizeMode="cover"
        style={styles.image}
      />
      {isPending ? (
        <Loader />
      ) : (
        <>
          <UserInfos user={data} theme={theme} navigation={navigation} />

          <View style={styles.tabs}>
            <CustomTopTab activeTab={activeTab} setActiveTab={setActiveTab} />
            <Animated.View
              style={{ transform: [{ translateX: translateXView1 }] }}
            >
              {activeTab === ETabs.VIDEOS && (
                <VideoTab videosList={profileVideos} />
              )}
            </Animated.View>
            <Animated.View
              style={{ transform: [{ translateX: translateXView2 }] }}
            >
              {activeTab === ETabs.CLASSEMENT && (
                <RankingTab navigation={navigation} />
              )}
            </Animated.View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tab: {
    marginTop: -5,
  },
  image: {
    position: "absolute",
    height: window.height * 0.4,
    width: window.width,
  },
  tabs: {
    marginTop: 15,
  },
  dotsButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    width: 45,
    height: 45,
  },
});
