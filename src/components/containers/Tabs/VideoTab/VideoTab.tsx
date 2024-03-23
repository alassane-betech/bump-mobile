import { AntDesign } from "@expo/vector-icons";
import { COLORS, window } from "@src/styles/BaseStyle";
import { ResizeMode, Video } from "expo-av";
import React, { memo, useCallback, useState } from "react";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedVideos, setDisplayedVideos] = useState(
    videosList.slice(0, VIDEOS_PER_PAGE)
  );

  const handleOpenModal = useCallback((item) => {
    setModalVisible(true);
    setSelectedVideo(item.video);
  }, []);

  const closeModal = useCallback(() => setModalVisible(false), []);

  const loadMoreVideos = useCallback(() => {
    if (currentPage * VIDEOS_PER_PAGE < videosList.length) {
      setLoading(true);
      setTimeout(() => {
        setDisplayedVideos((prevVideos) =>
          videosList.slice(0, currentPage * VIDEOS_PER_PAGE)
        );
        setCurrentPage((prevPage) => prevPage + 1);
        setLoading(false);
      }, 1000);
    }
  }, [currentPage, videosList]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => handleOpenModal(item)}
      style={[styles.videoBlock, { backgroundColor: COLORS.tertiary }]}
    >
      <Video
        style={styles.videoBlock}
        source={{ uri: item?.video }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
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
              shouldPlay={modalVisible}
            />
          )}
        </View>
      </Modal>
      <FlatList
        data={displayedVideos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
    width: width,
    height: height,
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
