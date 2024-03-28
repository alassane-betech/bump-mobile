import { useState, useEffect, useRef, useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { storyItems } from "@src/utils/Seed";
import { window } from "@src/styles/BaseStyle";
import { useNavigation } from "@react-navigation/native";
import StoryHeader from "./StoryHeader";
import { EMediaType } from "../Camera/types";

const { width, height } = window;

type ProgressUpdate = {
  index: number;
  value: number;
};

const Story = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const navigation = useNavigation();
  const [progress, setProgress] = useState(
    new Array(storyItems.length).fill(0)
  );
  const intervalRef = useRef(null);

  const handleMultipleProgressUpdates = (updates: ProgressUpdate[]) => {
    setProgress((prevProgress) => {
      const newProgress = [...prevProgress];
      updates.forEach((update) => {
        if (update.index >= 0 && update.index < newProgress.length) {
          newProgress[update.index] = update.value;
        }
      });
      return newProgress;
    });
  };

  useEffect(() => {
    const item = storyItems[currentItemIndex];
    if (item.type === EMediaType.Image) {
      const duration = 5000;
      const step = duration / 10;
      let elapsed = 0;
      intervalRef.current = setInterval(() => {
        elapsed += step;
        const progressValue = elapsed / duration;
        handleMultipleProgressUpdates([
          {
            index: currentItemIndex,
            value: progressValue,
          },
        ]);
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

  const handleVideoPlaybackStatusUpdate = (
    playbackStatus: AVPlaybackStatus
  ) => {
    if (playbackStatus.isLoaded) {
      const progressValue =
        playbackStatus.positionMillis / playbackStatus.durationMillis;

      handleMultipleProgressUpdates([
        { index: currentItemIndex, value: progressValue },
      ]);

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
      goToNextItem();
    } else {
      goToPreviousItem();
    }
  };

  const goToNextItem = () => {
    if (currentItemIndex < storyItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
      handleMultipleProgressUpdates([{ index: currentItemIndex, value: 1 }]);
    } else {
      navigation.goBack();
    }
  };

  const goToPreviousItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
      handleMultipleProgressUpdates([
        { index: currentItemIndex, value: 0 },
        { index: currentItemIndex - 1, value: 0 },
      ]);
    } else {
      navigation.goBack();
    }
  };

  const renderStoryItem = useCallback(() => {
    const item = storyItems[currentItemIndex];
    switch (item.type) {
      case EMediaType.Video:
        return (
          <Video
            source={{ uri: item.uri }}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping={false}
            style={styles.media}
            onPlaybackStatusUpdate={handleVideoPlaybackStatusUpdate}
          />
        );
      case EMediaType.Image:
        return <Image source={{ uri: item.uri }} style={styles.media} />;
      default:
        return null;
    }
  }, [storyItems, currentItemIndex]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={1}
    >
      <StoryHeader currentItemIndex={currentItemIndex} progress={progress} />
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
