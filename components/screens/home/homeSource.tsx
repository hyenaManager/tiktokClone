import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

// const defaultImg =
//   "https://firebasestorage.googleapis.com/v0/b/tsnproject-4c406.appspot.com/o/images%2F%F0%9D%90%8E%F0%9D%90%9F%F0%9D%90%9F%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%A2%F0%9D%90%9A%F0%9D%90%A5%20%F0%9D%90%80%F0%9D%90%AB%F0%9D%90%AD%20-%20%F0%9D%90%89%F0%9D%90%AE%F0%9D%90%A3%F0%9D%90%AE%F0%9D%90%AD%F0%9D%90%AC%F0%9D%90%AE%20%F0%9D%90%8A%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%A7.jpg?alt=media&token=8aaf47dd-a1e9-4de4-bebb-a6864bb37e13";
import { clips, myClips } from "../../../dummyData";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import AsideReaction from "../../asideBar/asideReaction";
import SourceDetail from "../sourceDetail";
import { HomeHeader } from "../../headerNavigation/headerNavigate";
//import VideoPlayer from "expo-video-player";
import { ResizeMode, Video } from "expo-av";
import ExpoPlayer from "./myVdPlayer";
import { useDispatch } from "react-redux";
import { changeIndex } from "../../../features/counter/currentVideoIndex";
export default function HomeSource() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const duplicatedClip = [...clips];
  const [currentIdx, setCurrentIdx] = useState(0);
  const dispatch = useDispatch();

  const handleCurrentIdx = (idx: number) => {
    setCurrentIdx(idx);
  };
  // console.log("currentIdx :", currentIdx.current);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <HomeHeader />
      <Carousel
        ref={carouselRef}
        width={400}
        height={700}
        autoPlay={false}
        data={myClips}
        scrollAnimationDuration={800}
        maxScrollDistancePerSwipe={400}
        onSnapToItem={(index) => {
          //handleCurrentIdx(index);
          dispatch(changeIndex(index));
        }}
        loop={false}
        //defaultScrollOffsetValue={{ value: 800 }}
        vertical={true}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <ExpoPlayer uri={item.uri} id={index} idx={currentIdx} />
            <SourceDetail />
            <AsideReaction />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});

{
  /* <View
style={{
  width: "100%",
  height: "100%",
  flex: 1,
}}
>
<Image source={item.image} style={styles.backgroundImage} />
<SourceDetail />
<AsideReaction />
</View> */
}
