import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import { storyItems } from "@src/utils/Seed";
import { window } from "@src/styles/BaseStyle";
import { useNavigation } from "@react-navigation/native";
import StoryHeader from "./StoryHeader";

const { width, height } = window;

const Story = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const navigation = useNavigation();
  const [progress, setProgress] = useState(
    new Array(storyItems.length).fill(0)
  );
  const intervalRef = useRef(null);

  const handleProgressUpdate = (index: number, value: number) => {
    setProgress((prevProgress) => {
      const newProgress = [...prevProgress];
      newProgress[index] = value;
      return newProgress;
    });
  };

  useEffect(() => {
    const item = storyItems[currentItemIndex];

    if (item.type === "image") {
      const duration = 5000;
      const step = duration / 100;
      let elapsed = 0;
      intervalRef.current = setInterval(() => {
        elapsed += step;
        const progressValue = elapsed / duration;
        handleProgressUpdate(currentItemIndex, progressValue);
        if (elapsed >= duration) {
          clearInterval(intervalRef.current);
          if (currentItemIndex < storyItems.length - 1) {
            setCurrentItemIndex(currentItemIndex + 1);
          }
        }
      }, step);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentItemIndex]);

  const handleVideoPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.isLoaded) {
      const progressValue =
        playbackStatus.positionMillis / playbackStatus.durationMillis;
      handleProgressUpdate(currentItemIndex, progressValue);

      if (playbackStatus.didJustFinish) {
        if (currentItemIndex < storyItems.length - 1) {
          setCurrentItemIndex(currentItemIndex + 1);
        }
      }
    }
  };

  const handlePress = (e: GestureResponderEvent) => {
    const locationX = e.nativeEvent.locationX;
    if (locationX > width / 6) {
      if (currentItemIndex < storyItems.length - 1) {
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[currentItemIndex] = 1;
          return newProgress;
        });
        setCurrentItemIndex(currentItemIndex + 1);
      } else {
        navigation.goBack();
      }
    } else {
      if (currentItemIndex > 0) {
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[currentItemIndex] = 0;
          newProgress[currentItemIndex - 1] = 0;
          return newProgress;
        });
        setCurrentItemIndex(currentItemIndex - 1);
      }
    }
  };

  const renderStoryItem = () => {
    const item = storyItems[currentItemIndex];
    switch (item.type) {
      case "video":
        return (
          <Video
            source={{ uri: item.uri }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping={false}
            style={styles.media}
            onPlaybackStatusUpdate={handleVideoPlaybackStatusUpdate}
          />
        );
      case "image":
        return <Image source={{ uri: item.uri }} style={styles.media} />;
      default:
        return null;
    }
  };

  const renderStoryHeader = () => {
    return <StoryHeader progress={progress} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={1}
    >
      {renderStoryHeader()}
      {renderStoryItem()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    width,
    height,
  },
});

export default Story;
