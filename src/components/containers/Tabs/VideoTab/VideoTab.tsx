import { AntDesign } from "@expo/vector-icons";
import { COLORS, window } from "@src/styles/BaseStyle";
import { ResizeMode, Video } from "expo-av";
import React, { memo, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");
const VIDEOS_PER_PAGE = 10;

type VideoTabProps = {
  videosList: any;
};

const VideoTab: React.FC<VideoTabProps> = ({ videosList }) => {
  const video = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalVideos, setTotalVideos] = useState(videosList.length);

  useEffect(() => {
    if (modalVisible) {
      video.current?.playAsync();
    } else {
      video.current?.pauseAsync();
    }
  }, [modalVisible]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        setModalVisible(true);
        setSelectedVideo(item.video);
      }}
      style={[styles.videoBlock, { backgroundColor: COLORS.tertiary }]}
    >
      <Video
        ref={video}
        style={styles.videoBlock}
        source={{ uri: item?.video }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
      />
    </TouchableOpacity>
  );

  const loadMoreVideos = () => {
    if (currentPage * VIDEOS_PER_PAGE < totalVideos) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        statusBarTranslucent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: selectedVideo }}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            isLooping
          />
        </View>
      </Modal>
      <FlatList
        data={videosList.slice(0, currentPage * VIDEOS_PER_PAGE)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onEndReached={loadMoreVideos}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color="black" />
        }
      />
    </View>
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
    height: height * 0.3,
    width: width * 0.45,
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
