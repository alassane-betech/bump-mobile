import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import ProgressBar from "@src/components/ui/ProgressBar/ProgressBar";

const { width, height } = Dimensions.get("window");

type VideoSource = {
  uri: string;
};

const videos: VideoSource[] = [
  {
    uri: "https://player.vimeo.com/progressive_redirect/playback/420239207/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=e05d9e753e17df9738cc49b14dc826a7aaecdebe8f6f978b2bd466bf25e2349d",
  },
  {
    uri: "https://player.vimeo.com/progressive_redirect/playback/389786356/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=70663dc5f66db4da3acb0792e69f3132722a5c9279010b4b16f8cfc9433d5bd3",
  },
  {
    uri: "https://player.vimeo.com/progressive_redirect/playback/390007248/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=905d491176bce221d94e35d72b4353f8511337cd58b9f9f7836b81b4c2f3b69a",
  },
  {
    uri: "https://player.vimeo.com/progressive_redirect/playback/389778408/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=8b98482c472b4874b9de801119e5a06f3681e2d1b459f4472890c563d716cd8c",
  },
  {
    uri: "https://player.vimeo.com/progressive_redirect/playback/390047650/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=3f65c9fb1cabd60e4ad11117f7617b7d5c25c0fabf9aeb3ef77a4317ba65e341",
  },
];

const Story = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(new Array(videos.length).fill(0));
  const videoRef = useRef<Video>(null);
  const longPressTimeout = useRef(null);
  const [isLongPress, setIsLongPress] = useState(false);
  useEffect(() => {
    // À chaque changement d'index, recommencer la vidéo depuis le début
    const playFromStart = async () => {
      if (videoRef.current) {
        await videoRef.current.stopAsync();
        await videoRef.current.setPositionAsync(0);
        await videoRef.current.playAsync();
      }
    };
    playFromStart();
  }, [currentVideoIndex]);

  const handleVideoPlaybackStatusUpdate = (
    playbackStatus: AVPlaybackStatus
  ) => {
    if (!playbackStatus.isLoaded) {
      return;
    }
    const newProgress = [...progress];
    newProgress[currentVideoIndex] =
      playbackStatus.positionMillis / playbackStatus.durationMillis;
    setProgress(newProgress);

    // Passer automatiquement à la vidéo suivante une fois la vidéo actuelle terminée
    if (playbackStatus.didJustFinish && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        updateProgressForWatchedVideos(newIndex, prevIndex);
        return newIndex;
      });
    }
  };

  const updateProgressForWatchedVideos = (
    newIndex: number,
    oldIndex: number
  ) => {
    setProgress((prevProgress) => {
      const newProgress = [...prevProgress];
      if (newIndex > oldIndex) {
        newProgress[oldIndex] = 1;
      } else if (newIndex < oldIndex) {
        newProgress[oldIndex] = 0;
      }
      return newProgress;
    });
  };

  const handlePress = (e: GestureResponderEvent) => {
    const locationX = e.nativeEvent.locationX;
    const isRightSide = locationX > width / 6;

    if (isRightSide) {
      if (currentVideoIndex < videos.length - 1) {
        const newIndex = currentVideoIndex + 1;
        updateProgressForWatchedVideos(newIndex, currentVideoIndex);
        setCurrentVideoIndex(newIndex);
      }
    } else {
      if (currentVideoIndex > 0) {
        const newIndex = currentVideoIndex - 1;
        updateProgressForWatchedVideos(newIndex, currentVideoIndex);
        setCurrentVideoIndex(newIndex);
      }
    }
  };

  const handlePressIn = () => {
    setIsLongPress(false);
    longPressTimeout.current = setTimeout(() => {
      videoRef.current?.pauseAsync();
      setIsLongPress(true);
    }, 300);
  };
  const handlePressOut = (e: GestureResponderEvent) => {
    clearTimeout(longPressTimeout.current);
    if (!isLongPress) {
      handlePress(e);
    } else {
      videoRef.current?.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.videoContainer}
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Video
          ref={videoRef}
          style={styles.video}
          source={{ uri: videos[currentVideoIndex].uri }}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isMuted={false}
          onPlaybackStatusUpdate={handleVideoPlaybackStatusUpdate}
          isLooping={false}
        />
        <ProgressBar progress={progress} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoContainer: {
    width: width,
    height: height,
    justifyContent: "flex-start",
  },
  video: {
    flex: 1,
  },
});

export default Story;
