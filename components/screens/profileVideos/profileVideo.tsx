import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import SourceDetail from "../sourceDetail";
import AsideReaction from "../../asideBar/asideReaction";
import { ResizeMode, Video } from "expo-av";
import { useRoute } from "@react-navigation/native";
import { clips, myClips, vd3, vd4 } from "../../../dummyData";
import ExpoPlayer from "../../myVdPlayer";
//import { changeIndex } from "../../../features/counter/currentVideoIndex";
export default function ProfileVideo() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [status, setStatus] = useState<any>({ error: "" });
  if (status.error) {
    console.log(status.error, "  error");
  }
  const router = useRoute();
  console.log("from profileVideos:", router.name);

  const handleCurrentIdx = (idx: number) => {
    setCurrentIdx(idx);
  };

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
      <Carousel
        ref={carouselRef}
        width={400}
        height={700}
        autoPlay={false}
        data={vd4}
        scrollAnimationDuration={800}
        maxScrollDistancePerSwipe={400}
        onSnapToItem={(index) => {
          handleCurrentIdx(index);
        }}
        loop={false}
        vertical={true}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <ExpoPlayer
              id={item.id}
              idx={currentIdx}
              uri={item.uri}
              mode="mp4"
              route="profileVideos"
            />
            <SourceDetail />
            <AsideReaction />
          </View>
        )}
      />
    </View>
  );
}
