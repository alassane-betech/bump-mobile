import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, window } from "@src/styles/BaseStyle";
import { ResizeMode, Video } from "expo-av";

const { width, height } = Dimensions.get("window");
const VIDEOS_PER_PAGE = 10;

type VideoTabProps = {
  videosList: any;
};

const VideoTab: React.FC<VideoTabProps> = ({ videosList }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenModal = useCallback((item) => {
    setSelectedVideo(item.video);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => handleOpenModal(item)}
      style={[styles.videoBlock, { backgroundColor: COLORS.tertiary }]}
    >
      <VideoPlayer video={item.video} selected={selectedVideo === item.video} />
    </TouchableOpacity>
  );

  const loadMoreVideos = () => {
    if (currentPage * VIDEOS_PER_PAGE < videosList.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={selectedVideo !== null}
        statusBarTranslucent={false}
        onRequestClose={closeModal}
      >
        <View style={styles.modal}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          {selectedVideo && (
            <Video
              style={styles.video}
              source={{ uri: selectedVideo }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
              shouldPlay
            />
          )}
        </View>
      </Modal>
      <FlatList
        data={videosList.slice(0, currentPage * VIDEOS_PER_PAGE)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        onEndReached={loadMoreVideos}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color="black" />
        }
      />
    </View>
  );
};

const VideoPlayer = ({ video, selected }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (selected) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [selected]);

  return (
    <Video
      ref={videoRef}
      style={styles.videoBlock}
      source={{ uri: video }}
      useNativeControls={false}
      resizeMode={ResizeMode.COVER}
      isLooping
    />
  );
};

export default memo(VideoTab);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    height: height * 0.4,
  },
  modal: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  videoBlock: {
    height: height * 0.2,
    width: width * 0.3,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  video: {
    alignSelf: "center",
    width,
    height,
  },
  closeButton: {
    position: "absolute",
    backgroundColor: COLORS.white,
    opacity: 0.3,
    height: 30,
    width: 30,
    borderRadius: 40,
    top: window.isSmallDevice ? "5%" : "6.5%",
    right: "11%",
    zIndex: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
});
